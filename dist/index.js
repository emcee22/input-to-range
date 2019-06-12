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
      setLabelsState(updatedLabelState); // create an array of ranges based on the current labels

      var rangeArrays = (0, _InputToRange2.createMultipleRangesFromArrayOfValues)(updatedLabelState); // trigger on change event with the new data

      onChange && onChange({
        labels: updatedLabelState,
        ranges: rangeArrays
      }); // reset the input

      setInputState('');
    }
  };

  var removeLabel = function removeLabel(key) {
    var newLabelsState = labelsState.filter(function (label, k) {
      return k !== key;
    });
    setLabelsState(newLabelsState);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbnB1dFRvUmFuZ2UiLCJwcm9wcyIsInVzZUxhYmVscyIsImxhYmVscyIsIm9uQ2hhbmdlIiwiYWxsb3dJbnRlcnNlY3Rpb24iLCJvbmx5UG9zc2l0aXZlIiwib25seU5lZ2F0aXZlIiwiZXh0cmFLZXlzIiwidXNlU3R5bGVzIiwicmVzdE9mUHJvcHMiLCJpbnB1dFN0YXRlIiwic2V0SW5wdXRTdGF0ZSIsImxhYmVsc1N0YXRlIiwic2V0TGFiZWxzU3RhdGUiLCJlcnJvclN0YXRlIiwic2V0RXJyb3JTdGF0ZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVLZXlQcmVzcyIsImNvZGUiLCJ3aGljaCIsImtleUNvZGUiLCJrZXlzIiwiaW5kZXhPZiIsInByZXZlbnREZWZhdWx0IiwicmVnZXgiLCJSZWdFeHAiLCJmaW5hbFBhdHRlcm4iLCJ0ZXN0IiwidXBkYXRlZExhYmVsU3RhdGUiLCJyYW5nZUFycmF5cyIsInJhbmdlcyIsInJlbW92ZUxhYmVsIiwia2V5IiwibmV3TGFiZWxzU3RhdGUiLCJmaWx0ZXIiLCJsYWJlbCIsImsiLCJjcmVhdGVMYWJlbHMiLCJtYXAiLCJlcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLLEVBQUk7QUFBQSxNQUVuQ0MsU0FGbUMsR0FXaENELEtBWGdDLENBRW5DQyxTQUZtQztBQUFBLE1BR25DQyxNQUhtQyxHQVdoQ0YsS0FYZ0MsQ0FHbkNFLE1BSG1DO0FBQUEsTUFJbkNDLFFBSm1DLEdBV2hDSCxLQVhnQyxDQUluQ0csUUFKbUM7QUFBQSxNQUtuQ0MsaUJBTG1DLEdBV2hD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LEdBQU07QUFDMUIsV0FBT2pDLFdBQVcsQ0FBQ2tDLEdBQVosQ0FBZ0IsVUFBQ0gsS0FBRCxFQUFRSCxHQUFSLEVBQWdCO0FBQ3RDLGFBQ0M7QUFDQyxRQUFBLEdBQUcsRUFBRUEsR0FETjtBQUVDLFFBQUEsU0FBUyxFQUFDO0FBRlgsU0FJRUcsS0FKRixFQUtDO0FBQ0MsUUFBQSxTQUFTLEVBQUMsOENBRFg7QUFFQyxRQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNkSixVQUFBQSxXQUFXLENBQUNDLEdBQUQsQ0FBWDtBQUNBO0FBSkYsYUFMRCxDQUREO0FBZ0JBLEtBakJNLENBQVA7QUFrQkEsR0FuQkQ7O0FBcUJBLFNBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0V2QyxTQUFTLElBQ1Q7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U0QyxZQUFZLEVBRGQsQ0FGRixFQU1DO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNDO0FBQ0MsSUFBQSxTQUFTLEVBQUMsc0NBRFg7QUFFQyxJQUFBLElBQUksRUFBQyxNQUZOO0FBR0MsSUFBQSxLQUFLLEVBQUVuQyxVQUhSO0FBSUMsSUFBQSxRQUFRLEVBQUVXLGlCQUpYO0FBS0MsSUFBQSxVQUFVLEVBQUVJO0FBTGIsS0FNS2hCLFdBTkwsRUFERCxDQU5ELEVBaUJFSyxVQUFVLElBQ1Y7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLEtBQW9DaUMsbUNBQXBDLENBbEJGLENBREQ7QUF1QkEsQ0FuSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9JbnB1dFRvUmFuZ2UuY3NzJztcclxuaW1wb3J0IHsgZmluYWxQYXR0ZXJuLCBrZXlzLCBlcnJvck1lc3NhZ2UgfSBmcm9tICcuL0lucHV0VG9SYW5nZS5jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNdWx0aXBsZVJhbmdlc0Zyb21BcnJheU9mVmFsdWVzIH0gZnJvbSAnLi9JbnB1dFRvUmFuZ2UudXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0VG9SYW5nZSA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7XHJcblx0XHR1c2VMYWJlbHMsXHJcblx0XHRsYWJlbHMsXHJcblx0XHRvbkNoYW5nZSxcclxuXHRcdGFsbG93SW50ZXJzZWN0aW9uLCAvLyBAVE9ETyAtPiBpZGVhIGlzIG5vdCB0byBhbGxvdyBzYW1lIG51bWJlcnMgdHdpY2VcclxuXHRcdG9ubHlQb3NzaXRpdmUsIC8vIEBUT0RPIC0+IGFsbG93IG9ubHkgcG9zaXRpdmUgbnVtYmVyc1xyXG5cdFx0b25seU5lZ2F0aXZlLCAvLyBAVE9ETyAtPiBhbGxvdyBvbmx5IHBvc2l0aXZlIG51bWJlcnNcclxuXHRcdGV4dHJhS2V5cywgLy8gQFRPRE8gLT4gaWRlYSBpcyB0byBzdXBwb3J0IG1vcmUgdGhhbiBqdXN0IFNQQUNFICsgRU5URVJcclxuXHRcdHVzZVN0eWxlcywgLy8gQFRPRE8gLT4gaWRlYSBpcyB0byB1c2Ugb3Igbm90IHRoZSBidWlsdCBpbiBzdHlsZXNcclxuXHRcdC4uLnJlc3RPZlByb3BzXHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBbaW5wdXRTdGF0ZSwgc2V0SW5wdXRTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW2xhYmVsc1N0YXRlLCBzZXRMYWJlbHNTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW2Vycm9yU3RhdGUsIHNldEVycm9yU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHQvLyB1cGRhdGUgdGhlIGluc2lkZSBzdGF0ZSB3aXRoIHRoZSBwcm9wcyBsYWJlbHMgcHJvcGVydHlcclxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFsYWJlbHMpIHJldHVybjtcclxuXHRcdGlmICghQXJyYXkuaXNBcnJheShsYWJlbHMpKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHQnbGFiZWxzIHByb3BlcnR5IG11c3QgYmUgYW4gYXJyYXkuIEV4YW1wbGU6IFtcIjEyM1wiLCBcIjE1MC0xOTBcIl0nXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblx0XHRsYWJlbHMgJiYgc2V0TGFiZWxzU3RhdGUobGFiZWxzKTtcclxuXHR9LCBbbGFiZWxzXSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xyXG5cdFx0Y29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0c2V0SW5wdXRTdGF0ZSh2YWx1ZSk7XHJcblx0XHRlcnJvclN0YXRlICYmIHNldEVycm9yU3RhdGUoZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUtleVByZXNzID0gZXZlbnQgPT4ge1xyXG5cdFx0Y29uc3QgY29kZSA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XHJcblx0XHRpZiAoa2V5cy5pbmRleE9mKGNvZGUpID4gLTEpIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0IHJlZ2V4ID0gUmVnRXhwKGZpbmFsUGF0dGVybik7XHJcblx0XHRcdGlmICghcmVnZXgudGVzdChpbnB1dFN0YXRlKSkge1xyXG5cdFx0XHRcdHNldEVycm9yU3RhdGUodHJ1ZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB1cGRhdGUgdGhlIGxhYmVsc1xyXG5cdFx0XHRjb25zdCB1cGRhdGVkTGFiZWxTdGF0ZSA9IFsuLi5sYWJlbHNTdGF0ZSwgaW5wdXRTdGF0ZV07XHJcblx0XHRcdHNldExhYmVsc1N0YXRlKHVwZGF0ZWRMYWJlbFN0YXRlKTtcclxuXHJcblx0XHRcdC8vIGNyZWF0ZSBhbiBhcnJheSBvZiByYW5nZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgbGFiZWxzXHJcblx0XHRcdGxldCByYW5nZUFycmF5cyA9IGNyZWF0ZU11bHRpcGxlUmFuZ2VzRnJvbUFycmF5T2ZWYWx1ZXMoXHJcblx0XHRcdFx0dXBkYXRlZExhYmVsU3RhdGVcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdC8vIHRyaWdnZXIgb24gY2hhbmdlIGV2ZW50IHdpdGggdGhlIG5ldyBkYXRhXHJcblx0XHRcdG9uQ2hhbmdlICYmXHJcblx0XHRcdFx0b25DaGFuZ2Uoe1xyXG5cdFx0XHRcdFx0bGFiZWxzOiB1cGRhdGVkTGFiZWxTdGF0ZSxcclxuXHRcdFx0XHRcdHJhbmdlczogcmFuZ2VBcnJheXNcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIHJlc2V0IHRoZSBpbnB1dFxyXG5cdFx0XHRzZXRJbnB1dFN0YXRlKCcnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCByZW1vdmVMYWJlbCA9IGtleSA9PiB7XHJcblx0XHRjb25zdCBuZXdMYWJlbHNTdGF0ZSA9IGxhYmVsc1N0YXRlLmZpbHRlcigobGFiZWwsIGspID0+IGsgIT09IGtleSk7XHJcblx0XHRzZXRMYWJlbHNTdGF0ZShuZXdMYWJlbHNTdGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlTGFiZWxzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIGxhYmVsc1N0YXRlLm1hcCgobGFiZWwsIGtleSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRrZXk9e2tleX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZV9fbGFiZWxzLWNvbnRhaW5lcl9fbGFiZWxcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtsYWJlbH1cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiSW5wdXRUb1JhbmdlX19sYWJlbHMtY29udGFpbmVyX19sYWJlbF9fY2xvc2VcIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmVtb3ZlTGFiZWwoa2V5KTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eFxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiSW5wdXRUb1JhbmdlXCI+XHJcblx0XHRcdHt1c2VMYWJlbHMgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiSW5wdXRUb1JhbmdlX19sYWJlbHMtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHR7Y3JlYXRlTGFiZWxzKCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiSW5wdXRUb1JhbmdlX19pbnB1dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZV9faW5wdXQtY29udGFpbmVyX19pbnB1dFwiXHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHR2YWx1ZT17aW5wdXRTdGF0ZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuXHRcdFx0XHRcdG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxyXG5cdFx0XHRcdFx0ey4uLnJlc3RPZlByb3BzfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0e2Vycm9yU3RhdGUgJiYgKFxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZV9fRXJyb3JcIj57ZXJyb3JNZXNzYWdlfTwvcD5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdfQ==