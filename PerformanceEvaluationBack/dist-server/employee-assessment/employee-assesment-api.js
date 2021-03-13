"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _employeeAssesmentService = _interopRequireDefault(require("./employee-assesment-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _saveResponses(_x, _x2, _x3) {
  return _saveResponses2.apply(this, arguments);
}

function _saveResponses2() {
  _saveResponses2 = _asyncToGenerator(function* (req, res, next) {
    try {
      var responsesInfo = req.body.responses_info;
      var insertedResponses = yield _employeeAssesmentService.default.saveResponses(responsesInfo);
      res.status(200).send({
        success: true,
        data: insertedResponses
      });
      next();
    } catch (err) {
      console.log('EmployeeAssessmentApi - saveResponses', err);
    }
  });
  return _saveResponses2.apply(this, arguments);
}

var EmployeeAssessmentApi = {
  saveResponses: _saveResponses
};
var _default = EmployeeAssessmentApi;
exports.default = _default;