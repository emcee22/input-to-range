"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessage = exports.defaultKeys = exports.finalPattern = exports.patten6 = exports.patten5 = exports.patten4 = exports.patten3 = exports.patten2 = exports.patten1 = void 0;
// Matches: 100
// On reading this data: no need for splitting
var patten1 = RegExp(/^[0-9]+$/); // Matches: 1-100
// On reading this data: split after '-'

exports.patten1 = patten1;
var patten2 = RegExp(/^[0-9]+[-][0-9]+$/); // Matches: (-10)
// On reading this data: no need for splitting

exports.patten2 = patten2;
var patten3 = RegExp(/^(\(-)[0-9]+(\))$/); // Matches: (-10)-200
// On reading this data: split after ')-'

exports.patten3 = patten3;
var patten4 = RegExp(/^(\(-)[0-9]+(\))[-][0-9]+$/); // Matches: (-10)-(-3)
// On reading this data: split after ')-('

exports.patten4 = patten4;
var patten5 = RegExp(/^(\(-)[0-9]+(\))[-](\(-)[0-9]+(\))$/); // Matches: 10-(-200)
// On reading this data: split after ')-'

exports.patten5 = patten5;
var patten6 = RegExp(/^[0-9]+[-](\(-)[0-9]+(\))$/); // all of the above combined so we can validate the input

exports.patten6 = patten6;
var finalPattern = /^[0-9]+$|^[0-9]+[-][0-9]+$|^(\(-)[0-9]+(\))[-][0-9]+$|^(\(-)[0-9]+(\))$|^(\(-)[0-9]+(\))[-](\(-)[0-9]+(\))$|^[0-9]+[-](\(-)[0-9]+(\))$/; // keys that trigger input validation

exports.finalPattern = finalPattern;
var defaultKeys = [32, 13]; // error message that is displayed if the provided data is incorrect

exports.defaultKeys = defaultKeys;
var errorMessage = 'Incorrect pattern, follow: 100, -100, (-100), 50-100, (-100)-100, 100-(-100), (-100)-(-50)';
exports.errorMessage = errorMessage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dFRvUmFuZ2UuY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbInBhdHRlbjEiLCJSZWdFeHAiLCJwYXR0ZW4yIiwicGF0dGVuMyIsInBhdHRlbjQiLCJwYXR0ZW41IiwicGF0dGVuNiIsImZpbmFsUGF0dGVybiIsImRlZmF1bHRLZXlzIiwiZXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ08sSUFBTUEsT0FBTyxHQUFHQyxNQUFNLENBQUMsVUFBRCxDQUF0QixDLENBRVA7QUFDQTs7O0FBQ08sSUFBTUMsT0FBTyxHQUFHRCxNQUFNLENBQUMsbUJBQUQsQ0FBdEIsQyxDQUVQO0FBQ0E7OztBQUNPLElBQU1FLE9BQU8sR0FBR0YsTUFBTSxDQUFDLG1CQUFELENBQXRCLEMsQ0FFUDtBQUNBOzs7QUFDTyxJQUFNRyxPQUFPLEdBQUdILE1BQU0sQ0FBQyw0QkFBRCxDQUF0QixDLENBRVA7QUFDQTs7O0FBQ08sSUFBTUksT0FBTyxHQUFHSixNQUFNLENBQUMscUNBQUQsQ0FBdEIsQyxDQUVQO0FBQ0E7OztBQUNPLElBQU1LLE9BQU8sR0FBR0wsTUFBTSxDQUFDLDRCQUFELENBQXRCLEMsQ0FFUDs7O0FBQ08sSUFBTU0sWUFBWSxHQUFHLHdJQUFyQixDLENBRVA7OztBQUNPLElBQU1DLFdBQVcsR0FBRyxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQXBCLEMsQ0FFUDs7O0FBQ08sSUFBTUMsWUFBWSxHQUN4Qiw0RkFETSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1hdGNoZXM6IDEwMFxyXG4vLyBPbiByZWFkaW5nIHRoaXMgZGF0YTogbm8gbmVlZCBmb3Igc3BsaXR0aW5nXHJcbmV4cG9ydCBjb25zdCBwYXR0ZW4xID0gUmVnRXhwKC9eWzAtOV0rJC8pO1xyXG5cclxuLy8gTWF0Y2hlczogMS0xMDBcclxuLy8gT24gcmVhZGluZyB0aGlzIGRhdGE6IHNwbGl0IGFmdGVyICctJ1xyXG5leHBvcnQgY29uc3QgcGF0dGVuMiA9IFJlZ0V4cCgvXlswLTldK1stXVswLTldKyQvKTtcclxuXHJcbi8vIE1hdGNoZXM6ICgtMTApXHJcbi8vIE9uIHJlYWRpbmcgdGhpcyBkYXRhOiBubyBuZWVkIGZvciBzcGxpdHRpbmdcclxuZXhwb3J0IGNvbnN0IHBhdHRlbjMgPSBSZWdFeHAoL14oXFwoLSlbMC05XSsoXFwpKSQvKTtcclxuXHJcbi8vIE1hdGNoZXM6ICgtMTApLTIwMFxyXG4vLyBPbiByZWFkaW5nIHRoaXMgZGF0YTogc3BsaXQgYWZ0ZXIgJyktJ1xyXG5leHBvcnQgY29uc3QgcGF0dGVuNCA9IFJlZ0V4cCgvXihcXCgtKVswLTldKyhcXCkpWy1dWzAtOV0rJC8pO1xyXG5cclxuLy8gTWF0Y2hlczogKC0xMCktKC0zKVxyXG4vLyBPbiByZWFkaW5nIHRoaXMgZGF0YTogc3BsaXQgYWZ0ZXIgJyktKCdcclxuZXhwb3J0IGNvbnN0IHBhdHRlbjUgPSBSZWdFeHAoL14oXFwoLSlbMC05XSsoXFwpKVstXShcXCgtKVswLTldKyhcXCkpJC8pO1xyXG5cclxuLy8gTWF0Y2hlczogMTAtKC0yMDApXHJcbi8vIE9uIHJlYWRpbmcgdGhpcyBkYXRhOiBzcGxpdCBhZnRlciAnKS0nXHJcbmV4cG9ydCBjb25zdCBwYXR0ZW42ID0gUmVnRXhwKC9eWzAtOV0rWy1dKFxcKC0pWzAtOV0rKFxcKSkkLyk7XHJcblxyXG4vLyBhbGwgb2YgdGhlIGFib3ZlIGNvbWJpbmVkIHNvIHdlIGNhbiB2YWxpZGF0ZSB0aGUgaW5wdXRcclxuZXhwb3J0IGNvbnN0IGZpbmFsUGF0dGVybiA9IC9eWzAtOV0rJHxeWzAtOV0rWy1dWzAtOV0rJHxeKFxcKC0pWzAtOV0rKFxcKSlbLV1bMC05XSskfF4oXFwoLSlbMC05XSsoXFwpKSR8XihcXCgtKVswLTldKyhcXCkpWy1dKFxcKC0pWzAtOV0rKFxcKSkkfF5bMC05XStbLV0oXFwoLSlbMC05XSsoXFwpKSQvO1xyXG5cclxuLy8ga2V5cyB0aGF0IHRyaWdnZXIgaW5wdXQgdmFsaWRhdGlvblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdEtleXMgPSBbMzIsIDEzXTtcclxuXHJcbi8vIGVycm9yIG1lc3NhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgaWYgdGhlIHByb3ZpZGVkIGRhdGEgaXMgaW5jb3JyZWN0XHJcbmV4cG9ydCBjb25zdCBlcnJvck1lc3NhZ2UgPVxyXG5cdCdJbmNvcnJlY3QgcGF0dGVybiwgZm9sbG93OiAxMDAsIC0xMDAsICgtMTAwKSwgNTAtMTAwLCAoLTEwMCktMTAwLCAxMDAtKC0xMDApLCAoLTEwMCktKC01MCknO1xyXG4iXX0=