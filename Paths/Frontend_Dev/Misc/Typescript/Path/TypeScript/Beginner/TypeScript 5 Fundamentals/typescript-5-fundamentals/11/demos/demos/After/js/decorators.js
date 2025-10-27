"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMethodInfo = void 0;
function logMethodInfo(origMethod, _context) {
    function replacementMethod(...args) {
        console.log(`Decorated construct: ${_context.kind}`);
        console.log(`Decorated construct name: ${_context.name}`);
        const result = origMethod.call(this, ...args);
        return result;
    }
    return replacementMethod;
}
exports.logMethodInfo = logMethodInfo;
