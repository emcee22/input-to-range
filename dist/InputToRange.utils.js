"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMultipleRangesFromArrayOfValues = exports.createRangeFromInputValue = exports.generateRangeBetweenTwoNumber = exports.splitTextBasedOnPattern = void 0;

var _InputToRangeConstants = require("./InputToRange.constants.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var splitTextBasedOnPattern = function splitTextBasedOnPattern(text) {
  var inputItems; // check thpe of input so we can update the multiple range

  if (_InputToRangeConstants.patten1.test(text) || _InputToRangeConstants.patten3.test(text)) {
    inputItems = [text, text];
  } else if (_InputToRangeConstants.patten2.test(text)) {
    inputItems = text.split('-');
  } else if (_InputToRangeConstants.patten4.test(text)) {
    inputItems = text.split(')-');
  } else if (_InputToRangeConstants.patten5.test(text)) {
    inputItems = text.split(')-(');
  } else if (_InputToRangeConstants.patten6.test(text)) {
    inputItems = text.split('-(');
  } else {
    return false;
  }

  var first = Number.parseInt(inputItems[0].replace('(', '').replace(')', ''));
  var second = Number.parseInt(inputItems[1].replace('(', '').replace(')', ''));
  return {
    first: first,
    second: second
  };
};

exports.splitTextBasedOnPattern = splitTextBasedOnPattern;

var generateRangeBetweenTwoNumber = function generateRangeBetweenTwoNumber(first, second) {
  // difference between the numbers
  var difference = Math.abs(first - second);
  return new Array(difference + 1).fill(undefined).map(function (val, index) {
    if (first < second) {
      return first + index;
    }

    return first - index;
  });
}; // generate an array of number based upon the inputState and the pattern used


exports.generateRangeBetweenTwoNumber = generateRangeBetweenTwoNumber;

var createRangeFromInputValue = function createRangeFromInputValue(inputState) {
  var _splitTextBasedOnPatt = splitTextBasedOnPattern(inputState),
      first = _splitTextBasedOnPatt.first,
      second = _splitTextBasedOnPatt.second; // generate range array


  return generateRangeBetweenTwoNumber(first, second);
};

exports.createRangeFromInputValue = createRangeFromInputValue;

var createMultipleRangesFromArrayOfValues = function createMultipleRangesFromArrayOfValues(texts) {
  var rangeArrays = [];
  texts.forEach(function (value) {
    var newRange = createRangeFromInputValue(value.toString());
    rangeArrays = [].concat(_toConsumableArray(rangeArrays), [newRange]);
  });
  return rangeArrays;
};

exports.createMultipleRangesFromArrayOfValues = createMultipleRangesFromArrayOfValues;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dFRvUmFuZ2UudXRpbHMuanMiXSwibmFtZXMiOlsic3BsaXRUZXh0QmFzZWRPblBhdHRlcm4iLCJ0ZXh0IiwiaW5wdXRJdGVtcyIsInBhdHRlbjEiLCJ0ZXN0IiwicGF0dGVuMyIsInBhdHRlbjIiLCJzcGxpdCIsInBhdHRlbjQiLCJwYXR0ZW41IiwicGF0dGVuNiIsImZpcnN0IiwiTnVtYmVyIiwicGFyc2VJbnQiLCJyZXBsYWNlIiwic2Vjb25kIiwiZ2VuZXJhdGVSYW5nZUJldHdlZW5Ud29OdW1iZXIiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImFicyIsIkFycmF5IiwiZmlsbCIsInVuZGVmaW5lZCIsIm1hcCIsInZhbCIsImluZGV4IiwiY3JlYXRlUmFuZ2VGcm9tSW5wdXRWYWx1ZSIsImlucHV0U3RhdGUiLCJjcmVhdGVNdWx0aXBsZVJhbmdlc0Zyb21BcnJheU9mVmFsdWVzIiwidGV4dHMiLCJyYW5nZUFycmF5cyIsImZvckVhY2giLCJ2YWx1ZSIsIm5ld1JhbmdlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVNPLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQUMsSUFBSSxFQUFJO0FBQzlDLE1BQUlDLFVBQUosQ0FEOEMsQ0FHOUM7O0FBQ0EsTUFBSUMsK0JBQVFDLElBQVIsQ0FBYUgsSUFBYixLQUFzQkksK0JBQVFELElBQVIsQ0FBYUgsSUFBYixDQUExQixFQUE4QztBQUM3Q0MsSUFBQUEsVUFBVSxHQUFHLENBQUNELElBQUQsRUFBT0EsSUFBUCxDQUFiO0FBQ0EsR0FGRCxNQUVPLElBQUlLLCtCQUFRRixJQUFSLENBQWFILElBQWIsQ0FBSixFQUF3QjtBQUM5QkMsSUFBQUEsVUFBVSxHQUFHRCxJQUFJLENBQUNNLEtBQUwsQ0FBVyxHQUFYLENBQWI7QUFDQSxHQUZNLE1BRUEsSUFBSUMsK0JBQVFKLElBQVIsQ0FBYUgsSUFBYixDQUFKLEVBQXdCO0FBQzlCQyxJQUFBQSxVQUFVLEdBQUdELElBQUksQ0FBQ00sS0FBTCxDQUFXLElBQVgsQ0FBYjtBQUNBLEdBRk0sTUFFQSxJQUFJRSwrQkFBUUwsSUFBUixDQUFhSCxJQUFiLENBQUosRUFBd0I7QUFDOUJDLElBQUFBLFVBQVUsR0FBR0QsSUFBSSxDQUFDTSxLQUFMLENBQVcsS0FBWCxDQUFiO0FBQ0EsR0FGTSxNQUVBLElBQUlHLCtCQUFRTixJQUFSLENBQWFILElBQWIsQ0FBSixFQUF3QjtBQUM5QkMsSUFBQUEsVUFBVSxHQUFHRCxJQUFJLENBQUNNLEtBQUwsQ0FBVyxJQUFYLENBQWI7QUFDQSxHQUZNLE1BRUE7QUFDTixXQUFPLEtBQVA7QUFDQTs7QUFDRCxNQUFNSSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUNiWCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNZLE9BQWQsQ0FBc0IsR0FBdEIsRUFBMkIsRUFBM0IsRUFBK0JBLE9BQS9CLENBQXVDLEdBQXZDLEVBQTRDLEVBQTVDLENBRGEsQ0FBZDtBQUdBLE1BQU1DLE1BQU0sR0FBR0gsTUFBTSxDQUFDQyxRQUFQLENBQ2RYLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY1ksT0FBZCxDQUFzQixHQUF0QixFQUEyQixFQUEzQixFQUErQkEsT0FBL0IsQ0FBdUMsR0FBdkMsRUFBNEMsRUFBNUMsQ0FEYyxDQUFmO0FBR0EsU0FBTztBQUFFSCxJQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU0ksSUFBQUEsTUFBTSxFQUFOQTtBQUFULEdBQVA7QUFDQSxDQXhCTTs7OztBQTBCQSxJQUFNQyw2QkFBNkIsR0FBRyxTQUFoQ0EsNkJBQWdDLENBQUNMLEtBQUQsRUFBUUksTUFBUixFQUFtQjtBQUMvRDtBQUNBLE1BQU1FLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNSLEtBQUssR0FBR0ksTUFBakIsQ0FBbkI7QUFDQSxTQUFPLElBQUlLLEtBQUosQ0FBVUgsVUFBVSxHQUFHLENBQXZCLEVBQTBCSSxJQUExQixDQUErQkMsU0FBL0IsRUFBMENDLEdBQTFDLENBQThDLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNwRSxRQUFJZCxLQUFLLEdBQUdJLE1BQVosRUFBb0I7QUFDbkIsYUFBT0osS0FBSyxHQUFHYyxLQUFmO0FBQ0E7O0FBQ0QsV0FBT2QsS0FBSyxHQUFHYyxLQUFmO0FBQ0EsR0FMTSxDQUFQO0FBTUEsQ0FUTSxDLENBV1A7Ozs7O0FBQ08sSUFBTUMseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFBQyxVQUFVLEVBQUk7QUFBQSw4QkFDNUIzQix1QkFBdUIsQ0FBQzJCLFVBQUQsQ0FESztBQUFBLE1BQzlDaEIsS0FEOEMseUJBQzlDQSxLQUQ4QztBQUFBLE1BQ3ZDSSxNQUR1Qyx5QkFDdkNBLE1BRHVDLEVBR3REOzs7QUFDQSxTQUFPQyw2QkFBNkIsQ0FBQ0wsS0FBRCxFQUFRSSxNQUFSLENBQXBDO0FBQ0EsQ0FMTTs7OztBQU9BLElBQU1hLHFDQUFxQyxHQUFHLFNBQXhDQSxxQ0FBd0MsQ0FBQUMsS0FBSyxFQUFJO0FBQzdELE1BQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBRCxFQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxLQUFLLEVBQUk7QUFDdEIsUUFBTUMsUUFBUSxHQUFHUCx5QkFBeUIsQ0FBQ00sS0FBSyxDQUFDRSxRQUFOLEVBQUQsQ0FBMUM7QUFDQUosSUFBQUEsV0FBVyxnQ0FBT0EsV0FBUCxJQUFvQkcsUUFBcEIsRUFBWDtBQUNBLEdBSEQ7QUFJQSxTQUFPSCxXQUFQO0FBQ0EsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0cGF0dGVuMSxcclxuXHRwYXR0ZW4yLFxyXG5cdHBhdHRlbjMsXHJcblx0cGF0dGVuNCxcclxuXHRwYXR0ZW41LFxyXG5cdHBhdHRlbjZcclxufSBmcm9tICcuL0lucHV0VG9SYW5nZS5jb25zdGFudHMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNwbGl0VGV4dEJhc2VkT25QYXR0ZXJuID0gdGV4dCA9PiB7XHJcblx0bGV0IGlucHV0SXRlbXM7XHJcblxyXG5cdC8vIGNoZWNrIHRocGUgb2YgaW5wdXQgc28gd2UgY2FuIHVwZGF0ZSB0aGUgbXVsdGlwbGUgcmFuZ2VcclxuXHRpZiAocGF0dGVuMS50ZXN0KHRleHQpIHx8IHBhdHRlbjMudGVzdCh0ZXh0KSkge1xyXG5cdFx0aW5wdXRJdGVtcyA9IFt0ZXh0LCB0ZXh0XTtcclxuXHR9IGVsc2UgaWYgKHBhdHRlbjIudGVzdCh0ZXh0KSkge1xyXG5cdFx0aW5wdXRJdGVtcyA9IHRleHQuc3BsaXQoJy0nKTtcclxuXHR9IGVsc2UgaWYgKHBhdHRlbjQudGVzdCh0ZXh0KSkge1xyXG5cdFx0aW5wdXRJdGVtcyA9IHRleHQuc3BsaXQoJyktJyk7XHJcblx0fSBlbHNlIGlmIChwYXR0ZW41LnRlc3QodGV4dCkpIHtcclxuXHRcdGlucHV0SXRlbXMgPSB0ZXh0LnNwbGl0KCcpLSgnKTtcclxuXHR9IGVsc2UgaWYgKHBhdHRlbjYudGVzdCh0ZXh0KSkge1xyXG5cdFx0aW5wdXRJdGVtcyA9IHRleHQuc3BsaXQoJy0oJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0Y29uc3QgZmlyc3QgPSBOdW1iZXIucGFyc2VJbnQoXHJcblx0XHRpbnB1dEl0ZW1zWzBdLnJlcGxhY2UoJygnLCAnJykucmVwbGFjZSgnKScsICcnKVxyXG5cdCk7XHJcblx0Y29uc3Qgc2Vjb25kID0gTnVtYmVyLnBhcnNlSW50KFxyXG5cdFx0aW5wdXRJdGVtc1sxXS5yZXBsYWNlKCcoJywgJycpLnJlcGxhY2UoJyknLCAnJylcclxuXHQpO1xyXG5cdHJldHVybiB7IGZpcnN0LCBzZWNvbmQgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJhbmdlQmV0d2VlblR3b051bWJlciA9IChmaXJzdCwgc2Vjb25kKSA9PiB7XHJcblx0Ly8gZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBudW1iZXJzXHJcblx0Y29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGZpcnN0IC0gc2Vjb25kKTtcclxuXHRyZXR1cm4gbmV3IEFycmF5KGRpZmZlcmVuY2UgKyAxKS5maWxsKHVuZGVmaW5lZCkubWFwKCh2YWwsIGluZGV4KSA9PiB7XHJcblx0XHRpZiAoZmlyc3QgPCBzZWNvbmQpIHtcclxuXHRcdFx0cmV0dXJuIGZpcnN0ICsgaW5kZXg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmlyc3QgLSBpbmRleDtcclxuXHR9KTtcclxufTtcclxuXHJcbi8vIGdlbmVyYXRlIGFuIGFycmF5IG9mIG51bWJlciBiYXNlZCB1cG9uIHRoZSBpbnB1dFN0YXRlIGFuZCB0aGUgcGF0dGVybiB1c2VkXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSYW5nZUZyb21JbnB1dFZhbHVlID0gaW5wdXRTdGF0ZSA9PiB7XHJcblx0Y29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBzcGxpdFRleHRCYXNlZE9uUGF0dGVybihpbnB1dFN0YXRlKTtcclxuXHJcblx0Ly8gZ2VuZXJhdGUgcmFuZ2UgYXJyYXlcclxuXHRyZXR1cm4gZ2VuZXJhdGVSYW5nZUJldHdlZW5Ud29OdW1iZXIoZmlyc3QsIHNlY29uZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTXVsdGlwbGVSYW5nZXNGcm9tQXJyYXlPZlZhbHVlcyA9IHRleHRzID0+IHtcclxuXHRsZXQgcmFuZ2VBcnJheXMgPSBbXTtcclxuXHR0ZXh0cy5mb3JFYWNoKHZhbHVlID0+IHtcclxuXHRcdGNvbnN0IG5ld1JhbmdlID0gY3JlYXRlUmFuZ2VGcm9tSW5wdXRWYWx1ZSh2YWx1ZS50b1N0cmluZygpKTtcclxuXHRcdHJhbmdlQXJyYXlzID0gWy4uLnJhbmdlQXJyYXlzLCBuZXdSYW5nZV07XHJcblx0fSk7XHJcblx0cmV0dXJuIHJhbmdlQXJyYXlzO1xyXG59O1xyXG4iXX0=