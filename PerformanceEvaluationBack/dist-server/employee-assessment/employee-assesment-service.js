"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _employeeAssesmentRepository = _interopRequireDefault(require("./employee-assesment-repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _saveResponses(_x) {
  return _saveResponses2.apply(this, arguments);
}

function _saveResponses2() {
  _saveResponses2 = _asyncToGenerator(function* (responsesInfo) {
    try {
      var insertedResponses = 0;

      for (var responseInfo of responsesInfo) {
        var result = yield _employeeAssesmentRepository.default.saveResponse(responseInfo);
        insertedResponses++;
      }

      return insertedResponses;
    } catch (err) {
      console.log('EmployeeAssessmentService - saveResponses', err);
    }
  });
  return _saveResponses2.apply(this, arguments);
}

var EmployeeAssessmentService = {
  saveResponses: _saveResponses
};
var _default = EmployeeAssessmentService;
exports.default = _default;