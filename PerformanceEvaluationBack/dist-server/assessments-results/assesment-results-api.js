"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assesmentResultsService = _interopRequireDefault(require("./assesment-results-service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _getAssessmentResults(_x, _x2, _x3) {
  return _getAssessmentResults2.apply(this, arguments);
}

function _getAssessmentResults2() {
  _getAssessmentResults2 = _asyncToGenerator(function* (req, res, next) {
    try {
      var employeeId = req.query.employee_id;
      var assessmentResultsResponse = yield _assesmentResultsService.default.getAssessmentResults(employeeId);
      res.status(200).send({
        success: true,
        data: assessmentResultsResponse
      });
      next();
    } catch (err) {
      console.log('AssessmentResultsApi - getAssessmentResults', err);
    }
  });
  return _getAssessmentResults2.apply(this, arguments);
}

var AssessmentResultsApi = {
  getAssessmentResults: _getAssessmentResults
};
var _default = AssessmentResultsApi;
exports.default = _default;