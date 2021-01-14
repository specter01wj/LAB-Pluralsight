"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conference = void 0;
var Conference = /** @class */ (function () {
    function Conference(name, speakers, sessions) {
        if (speakers === void 0) { speakers = []; }
        if (sessions === void 0) { sessions = []; }
        this.name = name;
        this.speakers = speakers;
        this.sessions = sessions;
    }
    Conference.prototype.addSpeaker = function (speaker) {
        this.speakers.push(speaker);
    };
    Conference.prototype.addSession = function (sessionName) {
        this.sessions.push(sessionName);
    };
    return Conference;
}());
exports.Conference = Conference;
//# sourceMappingURL=conference.js.map