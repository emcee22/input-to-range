"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputToRange = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./InputToRange.css");

var _InputToRangeConstants = require("./InputToRange.constants.js");

var _InputToRange2 = require("./InputToRange.utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputToRange = function InputToRange(props) {
  var useLabels = props.useLabels,
      labels = props.labels,
      onChange = props.onChange,
      allowIntersection = props.allowIntersection,
      onlyPossitive = props.onlyPossitive,
      onlyNegative = props.onlyNegative,
      extraKeys = props.extraKeys,
      useStyles = props.useStyles,
      restOfProps = _objectWithoutProperties(props, ["useLabels", "labels", "onChange", "allowIntersection", "onlyPossitive", "onlyNegative", "extraKeys", "useStyles"]);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputState = _useState2[0],
      setInputState = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      labelsState = _useState4[0],
      setLabelsState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      errorState = _useState6[0],
      setErrorState = _useState6[1]; // update the inside state with the props labels property


  _react["default"].useEffect(function () {
    if (!labels) return;

    if (!Array.isArray(labels)) {
      throw new Error('labels property must be an array. Example: ["123", "150-190"]');
    }

    labels && setLabelsState(labels);
  }, [labels]);

  var handleInputChange = function handleInputChange(event) {
    var value = event.target.value;
    setInputState(value);
    errorState && setErrorState(false);
  };

  var emitOnChange = function emitOnChange(labelState) {
    // create an array of ranges based on the current labels
    var rangeArrays = (0, _InputToRange2.createMultipleRangesFromArrayOfValues)(labelState); // trigger on change event with the new data

    onChange && onChange({
      labels: labelState,
      ranges: rangeArrays
    });
  };

  var handleKeyPress = function handleKeyPress(event) {
    var code = event.which || event.keyCode;

    if (_InputToRangeConstants.keys.indexOf(code) > -1) {
      event.preventDefault();
      var regex = RegExp(_InputToRangeConstants.finalPattern);

      if (!regex.test(inputState)) {
        setErrorState(true);
        return;
      } // update the labels


      var updatedLabelState = [].concat(_toConsumableArray(labelsState), [inputState]);
      setLabelsState(updatedLabelState);
      emitOnChange(updatedLabelState); // reset the input

      setInputState('');
    }
  };

  var removeLabel = function removeLabel(key) {
    var newLabelsState = labelsState.filter(function (label, k) {
      return k !== key;
    });
    setLabelsState(newLabelsState);
    emitOnChange(newLabelsState);
  };

  var createLabels = function createLabels() {
    return labelsState.map(function (label, key) {
      return _react["default"].createElement("span", {
        key: key,
        className: "InputToRange__labels-container__label"
      }, label, _react["default"].createElement("button", {
        className: "InputToRange__labels-container__label__close",
        onClick: function onClick() {
          removeLabel(key);
        }
      }, "x"));
    });
  };

  return _react["default"].createElement("div", {
    className: "InputToRange"
  }, useLabels && _react["default"].createElement("div", {
    className: "InputToRange__labels-container"
  }, createLabels()), _react["default"].createElement("div", {
    className: "InputToRange__input-container"
  }, _react["default"].createElement("input", _extends({
    className: "InputToRange__input-container__input",
    type: "text",
    value: inputState,
    onChange: handleInputChange,
    onKeyPress: handleKeyPress
  }, restOfProps))), errorState && _react["default"].createElement("p", {
    className: "InputToRange__Error"
  }, _InputToRangeConstants.errorMessage));
};

exports.InputToRange = InputToRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbnB1dFRvUmFuZ2UiLCJwcm9wcyIsInVzZUxhYmVscyIsImxhYmVscyIsIm9uQ2hhbmdlIiwiYWxsb3dJbnRlcnNlY3Rpb24iLCJvbmx5UG9zc2l0aXZlIiwib25seU5lZ2F0aXZlIiwiZXh0cmFLZXlzIiwidXNlU3R5bGVzIiwicmVzdE9mUHJvcHMiLCJpbnB1dFN0YXRlIiwic2V0SW5wdXRTdGF0ZSIsImxhYmVsc1N0YXRlIiwic2V0TGFiZWxzU3RhdGUiLCJlcnJvclN0YXRlIiwic2V0RXJyb3JTdGF0ZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJlbWl0T25DaGFuZ2UiLCJsYWJlbFN0YXRlIiwicmFuZ2VBcnJheXMiLCJyYW5nZXMiLCJoYW5kbGVLZXlQcmVzcyIsImNvZGUiLCJ3aGljaCIsImtleUNvZGUiLCJrZXlzIiwiaW5kZXhPZiIsInByZXZlbnREZWZhdWx0IiwicmVnZXgiLCJSZWdFeHAiLCJmaW5hbFBhdHRlcm4iLCJ0ZXN0IiwidXBkYXRlZExhYmVsU3RhdGUiLCJyZW1vdmVMYWJlbCIsImtleSIsIm5ld0xhYmVsc1N0YXRlIiwiZmlsdGVyIiwibGFiZWwiLCJrIiwiY3JlYXRlTGFiZWxzIiwibWFwIiwiZXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsTUFFbkNDLFNBRm1DLEdBV2hDRCxLQVhnQyxDQUVuQ0MsU0FGbUM7QUFBQSxNQUduQ0MsTUFIbUMsR0FXaENGLEtBWGdDLENBR25DRSxNQUhtQztBQUFBLE1BSW5DQyxRQUptQyxHQVdoQ0gsS0FYZ0MsQ0FJbkNHLFFB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QUMsS0FBS0osR0FBcEI7QUFBQSxLQUFuQixDQUF2QjtBQUNBN0IsSUFBQUEsY0FBYyxDQUFDOEIsY0FBRCxDQUFkO0FBRUFsQixJQUFBQSxZQUFZLENBQUNrQixjQUFELENBQVo7QUFDQSxHQUxEOztBQU9BLE1BQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUIsV0FBT25DLFdBQVcsQ0FBQ29DLEdBQVosQ0FBZ0IsVUFBQ0gsS0FBRCxFQUFRSCxHQUFSLEVBQWdCO0FBQ3RDLGFBQ0M7QUFDQyxRQUFBLEdBQUcsRUFBRUEsR0FETjtBQUVDLFFBQUEsU0FBUyxFQUFDO0FBRlgsU0FJRUcsS0FKRixFQUtDO0FBQ0MsUUFBQSxTQUFTLEVBQUMsOENBRFg7QUFFQyxRQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNkSixVQUFBQSxXQUFXLENBQUNDLEdBQUQsQ0FBWDtBQUNBO0FBSkYsYUFMRCxDQUREO0FBZ0JBLEtBakJNLENBQVA7QUFrQkEsR0FuQkQ7O0FBcUJBLFNBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0V6QyxTQUFTLElBQ1Q7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U4QyxZQUFZLEVBRGQsQ0FGRixFQU1DO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNDO0FBQ0MsSUFBQSxTQUFTLEVBQUMsc0NBRFg7QUFFQyxJQUFBLElBQUksRUFBQyxNQUZOO0FBR0MsSUFBQSxLQUFLLEVBQUVyQyxVQUhSO0FBSUMsSUFBQSxRQUFRLEVBQUVXLGlCQUpYO0FBS0MsSUFBQSxVQUFVLEVBQUVRO0FBTGIsS0FNS3BCLFdBTkwsRUFERCxDQU5ELEVBaUJFSyxVQUFVLElBQ1Y7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLEtBQW9DbUMsbUNBQXBDLENBbEJGLENBREQ7QUF1QkEsQ0F2SE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9JbnB1dFRvUmFuZ2UuY3NzJztcclxuaW1wb3J0IHsgZmluYWxQYXR0ZXJuLCBrZXlzLCBlcnJvck1lc3NhZ2UgfSBmcm9tICcuL0lucHV0VG9SYW5nZS5jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNdWx0aXBsZVJhbmdlc0Zyb21BcnJheU9mVmFsdWVzIH0gZnJvbSAnLi9JbnB1dFRvUmFuZ2UudXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0VG9SYW5nZSA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7XHJcblx0XHR1c2VMYWJlbHMsXHJcblx0XHRsYWJlbHMsXHJcblx0XHRvbkNoYW5nZSxcclxuXHRcdGFsbG93SW50ZXJzZWN0aW9uLCAvLyBAVE9ETyAtPiBpZGVhIGlzIG5vdCB0byBhbGxvdyBzYW1lIG51bWJlcnMgdHdpY2VcclxuXHRcdG9ubHlQb3NzaXRpdmUsIC8vIEBUT0RPIC0+IGFsbG93IG9ubHkgcG9zaXRpdmUgbnVtYmVyc1xyXG5cdFx0b25seU5lZ2F0aXZlLCAvLyBAVE9ETyAtPiBhbGxvdyBvbmx5IHBvc2l0aXZlIG51bWJlcnNcclxuXHRcdGV4dHJhS2V5cywgLy8gQFRPRE8gLT4gaWRlYSBpcyB0byBzdXBwb3J0IG1vcmUgdGhhbiBqdXN0IFNQQUNFICsgRU5URVJcclxuXHRcdHVzZVN0eWxlcywgLy8gQFRPRE8gLT4gaWRlYSBpcyB0byB1c2Ugb3Igbm90IHRoZSBidWlsdCBpbiBzdHlsZXNcclxuXHRcdC4uLnJlc3RPZlByb3BzXHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBbaW5wdXRTdGF0ZSwgc2V0SW5wdXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2xhYmVsc1N0YXRlLCBzZXRMYWJlbHNTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2Vycm9yU3RhdGUsIHNldEVycm9yU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHQvLyB1cGRhdGUgdGhlIGluc2lkZSBzdGF0ZSB3aXRoIHRoZSBwcm9wcyBsYWJlbHMgcHJvcGVydHlcclxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFsYWJlbHMpIHJldHVybjtcclxuXHRcdGlmICghQXJyYXkuaXNBcnJheShsYWJlbHMpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHQnbGFiZWxzIHByb3BlcnR5IG11c3QgYmUgYW4gYXJyYXkuIEV4YW1wbGU6IFtcIjEyM1wiLCBcIjE1MC0xOTBcIl0nXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRsYWJlbHMgJiYgc2V0TGFiZWxzU3RhdGUobGFiZWxzKTtcclxuXHR9LCBbbGFiZWxzXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xyXG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0c2V0SW5wdXRTdGF0ZSh2YWx1ZSk7XHJcblx0XHRlcnJvclN0YXRlICYmIHNldEVycm9yU3RhdGUoZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGVtaXRPbkNoYW5nZSA9IGxhYmVsU3RhdGUgPT4ge1xyXG5cdFx0Ly8gY3JlYXRlIGFuIGFycmF5IG9mIHJhbmdlcyBiYXNlZCBvbiB0aGUgY3VycmVudCBsYWJlbHNcclxuXHRcdGxldCByYW5nZUFycmF5cyA9IGNyZWF0ZU11bHRpcGxlUmFuZ2VzRnJvbUFycmF5T2ZWYWx1ZXMobGFiZWxTdGF0ZSk7XHJcblxyXG5cdFx0Ly8gdHJpZ2dlciBvbiBjaGFuZ2UgZXZlbnQgd2l0aCB0aGUgbmV3IGRhdGFcclxuXHRcdG9uQ2hhbmdlICYmXHJcblx0XHRcdG9uQ2hhbmdlKHtcclxuXHRcdFx0XHRsYWJlbHM6IGxhYmVsU3RhdGUsXHJcblx0XHRcdFx0cmFuZ2VzOiByYW5nZUFycmF5c1xyXG5cdFx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVLZXlQcmVzcyA9IGV2ZW50ID0+IHtcclxuXHRcdGNvbnN0IGNvZGUgPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xyXG5cdFx0aWYgKGtleXMuaW5kZXhPZihjb2RlKSA+IC0xKSB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zdCByZWdleCA9IFJlZ0V4cChmaW5hbFBhdHRlcm4pO1xyXG5cdFx0XHRpZiAoIXJlZ2V4LnRlc3QoaW5wdXRTdGF0ZSkpIHtcclxuXHRcdFx0XHRzZXRFcnJvclN0YXRlKHRydWUpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIHRoZSBsYWJlbHNcclxuXHRcdFx0Y29uc3QgdXBkYXRlZExhYmVsU3RhdGUgPSBbLi4ubGFiZWxzU3RhdGUsIGlucHV0U3RhdGVdO1xyXG5cdFx0XHRzZXRMYWJlbHNTdGF0ZSh1cGRhdGVkTGFiZWxTdGF0ZSk7XHJcblxyXG5cdFx0XHRlbWl0T25DaGFuZ2UodXBkYXRlZExhYmVsU3RhdGUpO1xyXG5cclxuXHRcdFx0Ly8gcmVzZXQgdGhlIGlucHV0XHJcblx0XHRcdHNldElucHV0U3RhdGUoJycpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHJlbW92ZUxhYmVsID0ga2V5ID0+IHtcclxuXHRcdGNvbnN0IG5ld0xhYmVsc1N0YXRlID0gbGFiZWxzU3RhdGUuZmlsdGVyKChsYWJlbCwgaykgPT4gayAhPT0ga2V5KTtcclxuXHRcdHNldExhYmVsc1N0YXRlKG5ld0xhYmVsc1N0YXRlKTtcclxuXHJcblx0XHRlbWl0T25DaGFuZ2UobmV3TGFiZWxzU3RhdGUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZUxhYmVscyA9ICgpID0+IHtcclxuXHRcdHJldHVybiBsYWJlbHNTdGF0ZS5tYXAoKGxhYmVsLCBrZXkpID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0a2V5PXtrZXl9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJJbnB1dFRvUmFuZ2VfX2xhYmVscy1jb250YWluZXJfX2xhYmVsXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7bGFiZWx9XHJcblx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZV9fbGFiZWxzLWNvbnRhaW5lcl9fbGFiZWxfX2Nsb3NlXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJlbW92ZUxhYmVsKGtleSk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHhcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZVwiPlxyXG5cdFx0XHR7dXNlTGFiZWxzICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZV9fbGFiZWxzLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0e2NyZWF0ZUxhYmVscygpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZV9faW5wdXQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJJbnB1dFRvUmFuZ2VfX2lucHV0LWNvbnRhaW5lcl9faW5wdXRcIlxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e2lucHV0U3RhdGV9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcblx0XHRcdFx0XHRvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cclxuXHRcdFx0XHRcdHsuLi5yZXN0T2ZQcm9wc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdHtlcnJvclN0YXRlICYmIChcclxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJJbnB1dFRvUmFuZ2VfX0Vycm9yXCI+e2Vycm9yTWVzc2FnZX08L3A+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iXX0=