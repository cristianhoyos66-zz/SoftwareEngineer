"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assesmentResultsRepository = _interopRequireDefault(require("./assesment-results-repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _getAssessmentResults(_x) {
  return _getAssessmentResults2.apply(this, arguments);
}

function _getAssessmentResults2() {
  _getAssessmentResults2 = _asyncToGenerator(function* (employeeId) {
    try {
      var selfAssessmentQuery = yield _assesmentResultsRepository.default.getSelfAssessmentTotal(employeeId);
      var employeeAssessmentQuery = yield _assesmentResultsRepository.default.getEmployeeAssessmentTotal(employeeId);
      var selfAssessmentTotal = selfAssessmentQuery[0]['sum(result)'];
      var employeeAssessmentTotal = employeeAssessmentQuery[0]['sum(result)'];
      var score = (selfAssessmentTotal + employeeAssessmentTotal) / 2;
      var results = {
        assessmentScore: score,
        message: getMessageResultByScore(score)
      };
      return results;
    } catch (err) {
      console.log('AssessmentResultsService - saveResponses', err);
    }
  });
  return _getAssessmentResults2.apply(this, arguments);
}

function getMessageResultByScore(score) {
  switch (true) {
    case score >= 13 && score < 23:
      return 'Insatisfactorio. Se debe hacer plan de mejora';

    case score >= 23 && score < 33:
      return 'Aceptable. Se debe hacer compromiso para mejorar';

    case score >= 33 && score < 43:
      return 'Bueno. Se deben mejorar áreas críticas';

    case score >= 43 && score <= 52:
      return 'Sobresaliente. Se darán incentivos';

    default:
      return 'Score is not in any range';
  }
}

var AssessmentResultsService = {
  getAssessmentResults: _getAssessmentResults
};
var _default = AssessmentResultsService;
exports.default = _default;