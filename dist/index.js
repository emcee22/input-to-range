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
  var ignoreDefaultStyles = props.ignoreDefaultStyles,
      hideLabels = props.hideLabels,
      labels = props.labels,
      onChange = props.onChange,
      allowIntersection = props.allowIntersection,
      onlyPossitiveNumbers = props.onlyPossitiveNumbers,
      onlyNegativeNumbers = props.onlyNegativeNumbers,
      keys = props.keys,
      restOfProps = _objectWithoutProperties(props, ["ignoreDefaultStyles", "hideLabels", "labels", "onChange", "allowIntersection", "onlyPossitiveNumbers", "onlyNegativeNumbers", "keys"]);

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

    if (_InputToRangeConstants.defaultKeys.indexOf(code) > -1) {
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
    className: !ignoreDefaultStyles ? 'InputToRange' : ''
  }, !hideLabels && _react["default"].createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbnB1dFRvUmFuZ2UiLCJwcm9wcyIsImlnbm9yZURlZmF1bHRTdHlsZXMiLCJoaWRlTGFiZWxzIiwibGFiZWxzIiwib25DaGFuZ2UiLCJhbGxvd0ludGVyc2VjdGlvbiIsIm9ubHlQb3NzaXRpdmVOdW1iZXJzIiwib25seU5lZ2F0aXZlTnVtYmVycyIsImtleXMiLCJyZXN0T2ZQcm9wcyIsImlucHV0U3RhdGUiLCJzZXRJbnB1dFN0YXRlIiwibGFiZWxzU3RhdGUiLCJzZXRMYWJlbHNTdGF0ZSIsImVycm9yU3RhdGUiLCJzZXRFcnJvclN0YXRlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsImVtaXRPbkNoYW5nZSIsImxhYmVsU3RhdGUiLCJyYW5nZUFycmF5cyIsInJhbmdlcyIsImhhbmRsZUtleVByZXNzIiwiY29kZSIsIndoaWNoIiwia2V5Q29kZSIsImRlZmF1bHRLZXlzIiwiaW5kZXhPZiIsInByZXZlbnREZWZhdWx0IiwicmVnZXgiLCJSZWdFeHAiLCJmaW5hbFBhdHRlcm4iLCJ0ZXN0IiwidXBkYXRlZExhYmVsU3RhdGUiLCJyZW1vdmVMYWJlbCIsImtleSIsIm5ld0xhYmVsc1N0YXRlIiwiZmlsdGVyIiwibGFiZWwiLCJrIiwiY3JlYXRlTGFiZWxzIiwibWFwIiwiZXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsTUFFbkNDLG1CQUZtQyxHQVdoQ0QsS0FYZ0MsQ0FFbkNDLG1CQUZtQztBQUFBLE1BR25DQyxVQUhtQyxHQVdoQ0YsS0FYZ0MsQ0FHbkNFLFVBSG1DO0FBQUEsTUFJbkND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IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vSW5wdXRUb1JhbmdlLmNzcyc7XHJcbmltcG9ydCB7XHJcblx0ZmluYWxQYXR0ZXJuLFxyXG5cdGRlZmF1bHRLZXlzLFxyXG5cdGVycm9yTWVzc2FnZVxyXG59IGZyb20gJy4vSW5wdXRUb1JhbmdlLmNvbnN0YW50cy5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU11bHRpcGxlUmFuZ2VzRnJvbUFycmF5T2ZWYWx1ZXMgfSBmcm9tICcuL0lucHV0VG9SYW5nZS51dGlscyc7XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRUb1JhbmdlID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IHtcclxuXHRcdGlnbm9yZURlZmF1bHRTdHlsZXMsXHJcblx0XHRoaWRlTGFiZWxzLFxyXG5cdFx0bGFiZWxzLFxyXG5cdFx0b25DaGFuZ2UsXHJcblx0XHRhbGxvd0ludGVyc2VjdGlvbiwgLy8gQFRPRE8gLT4gaWRlYSBpcyBub3QgdG8gYWxsb3cgc2FtZSBudW1iZXJzIHR3aWNlXHJcblx0XHRvbmx5UG9zc2l0aXZlTnVtYmVycywgLy8gQFRPRE8gLT4gYWxsb3cgb25seSBwb3NpdGl2ZSBudW1iZXJzXHJcblx0XHRvbmx5TmVnYXRpdmVOdW1iZXJzLCAvLyBAVE9ETyAtPiBhbGxvdyBvbmx5IHBvc2l0aXZlIG51bWJlcnNcclxuXHRcdGtleXMsIC8vIEBUT0RPIC0+IGlkZWEgaXMgdG8gc3VwcG9ydCBtb3JlIHRoYW4ganVzdCBTUEFDRSArIEVOVEVSXHJcblx0XHQuLi5yZXN0T2ZQcm9wc1xyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgW2lucHV0U3RhdGUsIHNldElucHV0U3RhdGVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtsYWJlbHNTdGF0ZSwgc2V0TGFiZWxzU3RhdGVdID0gdXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtlcnJvclN0YXRlLCBzZXRFcnJvclN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Ly8gdXBkYXRlIHRoZSBpbnNpZGUgc3RhdGUgd2l0aCB0aGUgcHJvcHMgbGFiZWxzIHByb3BlcnR5XHJcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghbGFiZWxzKSByZXR1cm47XHJcblx0XHRpZiAoIUFycmF5LmlzQXJyYXkobGFiZWxzKSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXHJcblx0XHRcdFx0J2xhYmVscyBwcm9wZXJ0eSBtdXN0IGJlIGFuIGFycmF5LiBFeGFtcGxlOiBbXCIxMjNcIiwgXCIxNTAtMTkwXCJdJ1xyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdFx0bGFiZWxzICYmIHNldExhYmVsc1N0YXRlKGxhYmVscyk7XHJcblx0fSwgW2xhYmVsc10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IGV2ZW50ID0+IHtcclxuXHRcdGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuXHRcdHNldElucHV0U3RhdGUodmFsdWUpO1xyXG5cdFx0ZXJyb3JTdGF0ZSAmJiBzZXRFcnJvclN0YXRlKGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBlbWl0T25DaGFuZ2UgPSBsYWJlbFN0YXRlID0+IHtcclxuXHRcdC8vIGNyZWF0ZSBhbiBhcnJheSBvZiByYW5nZXMgYmFzZWQgb24gdGhlIGN1cnJlbnQgbGFiZWxzXHJcblx0XHRsZXQgcmFuZ2VBcnJheXMgPSBjcmVhdGVNdWx0aXBsZVJhbmdlc0Zyb21BcnJheU9mVmFsdWVzKGxhYmVsU3RhdGUpO1xyXG5cclxuXHRcdC8vIHRyaWdnZXIgb24gY2hhbmdlIGV2ZW50IHdpdGggdGhlIG5ldyBkYXRhXHJcblx0XHRvbkNoYW5nZSAmJlxyXG5cdFx0XHRvbkNoYW5nZSh7XHJcblx0XHRcdFx0bGFiZWxzOiBsYWJlbFN0YXRlLFxyXG5cdFx0XHRcdHJhbmdlczogcmFuZ2VBcnJheXNcclxuXHRcdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlS2V5UHJlc3MgPSBldmVudCA9PiB7XHJcblx0XHRjb25zdCBjb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcclxuXHRcdGlmIChkZWZhdWx0S2V5cy5pbmRleE9mKGNvZGUpID4gLTEpIHtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0IHJlZ2V4ID0gUmVnRXhwKGZpbmFsUGF0dGVybik7XHJcblx0XHRcdGlmICghcmVnZXgudGVzdChpbnB1dFN0YXRlKSkge1xyXG5cdFx0XHRcdHNldEVycm9yU3RhdGUodHJ1ZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyB1cGRhdGUgdGhlIGxhYmVsc1xyXG5cdFx0XHRjb25zdCB1cGRhdGVkTGFiZWxTdGF0ZSA9IFsuLi5sYWJlbHNTdGF0ZSwgaW5wdXRTdGF0ZV07XHJcblx0XHRcdHNldExhYmVsc1N0YXRlKHVwZGF0ZWRMYWJlbFN0YXRlKTtcclxuXHJcblx0XHRcdGVtaXRPbkNoYW5nZSh1cGRhdGVkTGFiZWxTdGF0ZSk7XHJcblxyXG5cdFx0XHQvLyByZXNldCB0aGUgaW5wdXRcclxuXHRcdFx0c2V0SW5wdXRTdGF0ZSgnJyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgcmVtb3ZlTGFiZWwgPSBrZXkgPT4ge1xyXG5cdFx0Y29uc3QgbmV3TGFiZWxzU3RhdGUgPSBsYWJlbHNTdGF0ZS5maWx0ZXIoKGxhYmVsLCBrKSA9PiBrICE9PSBrZXkpO1xyXG5cdFx0c2V0TGFiZWxzU3RhdGUobmV3TGFiZWxzU3RhdGUpO1xyXG5cclxuXHRcdGVtaXRPbkNoYW5nZShuZXdMYWJlbHNTdGF0ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlTGFiZWxzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIGxhYmVsc1N0YXRlLm1hcCgobGFiZWwsIGtleSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRrZXk9e2tleX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZV9fbGFiZWxzLWNvbnRhaW5lcl9fbGFiZWxcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHtsYWJlbH1cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiSW5wdXRUb1JhbmdlX19sYWJlbHMtY29udGFpbmVyX19sYWJlbF9fY2xvc2VcIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0cmVtb3ZlTGFiZWwoa2V5KTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0eFxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXshaWdub3JlRGVmYXVsdFN0eWxlcyA/ICdJbnB1dFRvUmFuZ2UnIDogJyd9PlxyXG5cdFx0XHR7IWhpZGVMYWJlbHMgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiSW5wdXRUb1JhbmdlX19sYWJlbHMtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHR7Y3JlYXRlTGFiZWxzKCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiSW5wdXRUb1JhbmdlX19pbnB1dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZV9faW5wdXQtY29udGFpbmVyX19pbnB1dFwiXHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHR2YWx1ZT17aW5wdXRTdGF0ZX1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuXHRcdFx0XHRcdG9uS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfVxyXG5cdFx0XHRcdFx0ey4uLnJlc3RPZlByb3BzfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0e2Vycm9yU3RhdGUgJiYgKFxyXG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIklucHV0VG9SYW5nZV9fRXJyb3JcIj57ZXJyb3JNZXNzYWdlfTwvcD5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdfQ==