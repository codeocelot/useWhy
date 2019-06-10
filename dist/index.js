"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useWhy;

var _react = require("react");

// eslint-disable-next-line no-console
function useWhy(deps) {
  let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let logger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : console.log;
  const [prevDeps, setPrevDeps] = (0, _react.useState)(deps);
  let changed = false;
  deps.forEach((d, i) => {
    if (d !== prevDeps[i]) {
      changed = true;
      logger("Why ".concat(id, ": dep ").concat(i, " has changed from ").concat(prevDeps[i], " to ").concat(d));
    }
  });
  if (changed) setPrevDeps(deps);
  return deps;
}