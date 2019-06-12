"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMessage = exports.keys = exports.finalPattern = exports.patten6 = exports.patten5 = exports.patten4 = exports.patten3 = exports.patten2 = exports.patten1 = void 0;
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
var keys = [32, 13]; // error message that is displayed if the provided data is incorrect

exports.keys = keys;
var errorMessage = 'Incorrect pattern, follow: 100, -100, (-100), 50-100, (-100)-100, 100-(-100), (-100)-(-50)';
exports.errorMessage = errorMessage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dFRvUmFuZ2UuY29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbInBhdHRlbjEiLCJSZWdFeHAiLCJwYXR0ZW4yIiwicGF0dGVuMyIsInBhdHRlbjQiLCJwYXR0ZW41IiwicGF0dGVuNiIsImZpbmFsUGF0dGVybiIsImtleXMiLCJlcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDTyxJQUFNQSxPQUFPLEdBQUdDLE1BQU0sQ0FBQyxVQUFELENBQXRCLEMsQ0FFUDtBQUNBOzs7QUFDTyxJQUFNQyxPQUFPLEdBQUdELE1BQU0sQ0FBQyxtQkFBRCxDQUF0QixDLENBRVA7QUFDQTs7O0FBQ08sSUFBTUUsT0FBTyxHQUFHRixNQUFNLENBQUMsbUJBQUQsQ0FBdEIsQyxDQUVQO0FBQ0E7OztBQUNPLElBQU1HLE9BQU8sR0FBR0gsTUFBTSxDQUFDLDRCQUFELENBQXRCLEMsQ0FFUDtBQUNBOzs7QUFDTyxJQUFNSSxPQUFPLEdBQUdKLE1BQU0sQ0FBQyxxQ0FBRCxDQUF0QixDLENBRVA7QUFDQTs7O0FBQ08sSUFBTUssT0FBTyxHQUFHTCxNQUFNLENBQUMsNEJBQUQsQ0FBdEIsQyxDQUVQOzs7QUFDTyxJQUFNTSxZQUFZLEdBQUcsd0lBQXJCLEMsQ0FFUDs7O0FBQ08sSUFBTUMsSUFBSSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYixDLENBRVA7OztBQUNPLElBQU1DLFlBQVksR0FDeEIsNEZBRE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYXRjaGVzOiAxMDBcclxuLy8gT24gcmVhZGluZyB0aGlzIGRhdGE6IG5vIG5lZWQgZm9yIHNwbGl0dGluZ1xyXG5leHBvcnQgY29uc3QgcGF0dGVuMSA9IFJlZ0V4cCgvXlswLTldKyQvKTtcclxuXHJcbi8vIE1hdGNoZXM6IDEtMTAwXHJcbi8vIE9uIHJlYWRpbmcgdGhpcyBkYXRhOiBzcGxpdCBhZnRlciAnLSdcclxuZXhwb3J0IGNvbnN0IHBhdHRlbjIgPSBSZWdFeHAoL15bMC05XStbLV1bMC05XSskLyk7XHJcblxyXG4vLyBNYXRjaGVzOiAoLTEwKVxyXG4vLyBPbiByZWFkaW5nIHRoaXMgZGF0YTogbm8gbmVlZCBmb3Igc3BsaXR0aW5nXHJcbmV4cG9ydCBjb25zdCBwYXR0ZW4zID0gUmVnRXhwKC9eKFxcKC0pWzAtOV0rKFxcKSkkLyk7XHJcblxyXG4vLyBNYXRjaGVzOiAoLTEwKS0yMDBcclxuLy8gT24gcmVhZGluZyB0aGlzIGRhdGE6IHNwbGl0IGFmdGVyICcpLSdcclxuZXhwb3J0IGNvbnN0IHBhdHRlbjQgPSBSZWdFeHAoL14oXFwoLSlbMC05XSsoXFwpKVstXVswLTldKyQvKTtcclxuXHJcbi8vIE1hdGNoZXM6ICgtMTApLSgtMylcclxuLy8gT24gcmVhZGluZyB0aGlzIGRhdGE6IHNwbGl0IGFmdGVyICcpLSgnXHJcbmV4cG9ydCBjb25zdCBwYXR0ZW41ID0gUmVnRXhwKC9eKFxcKC0pWzAtOV0rKFxcKSlbLV0oXFwoLSlbMC05XSsoXFwpKSQvKTtcclxuXHJcbi8vIE1hdGNoZXM6IDEwLSgtMjAwKVxyXG4vLyBPbiByZWFkaW5nIHRoaXMgZGF0YTogc3BsaXQgYWZ0ZXIgJyktJ1xyXG5leHBvcnQgY29uc3QgcGF0dGVuNiA9IFJlZ0V4cCgvXlswLTldK1stXShcXCgtKVswLTldKyhcXCkpJC8pO1xyXG5cclxuLy8gYWxsIG9mIHRoZSBhYm92ZSBjb21iaW5lZCBzbyB3ZSBjYW4gdmFsaWRhdGUgdGhlIGlucHV0XHJcbmV4cG9ydCBjb25zdCBmaW5hbFBhdHRlcm4gPSAvXlswLTldKyR8XlswLTldK1stXVswLTldKyR8XihcXCgtKVswLTldKyhcXCkpWy1dWzAtOV0rJHxeKFxcKC0pWzAtOV0rKFxcKSkkfF4oXFwoLSlbMC05XSsoXFwpKVstXShcXCgtKVswLTldKyhcXCkpJHxeWzAtOV0rWy1dKFxcKC0pWzAtOV0rKFxcKSkkLztcclxuXHJcbi8vIGtleXMgdGhhdCB0cmlnZ2VyIGlucHV0IHZhbGlkYXRpb25cclxuZXhwb3J0IGNvbnN0IGtleXMgPSBbMzIsIDEzXTtcclxuXHJcbi8vIGVycm9yIG1lc3NhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgaWYgdGhlIHByb3ZpZGVkIGRhdGEgaXMgaW5jb3JyZWN0XHJcbmV4cG9ydCBjb25zdCBlcnJvck1lc3NhZ2UgPVxyXG5cdCdJbmNvcnJlY3QgcGF0dGVybiwgZm9sbG93OiAxMDAsIC0xMDAsICgtMTAwKSwgNTAtMTAwLCAoLTEwMCktMTAwLCAxMDAtKC0xMDApLCAoLTEwMCktKC01MCknO1xyXG4iXX0=