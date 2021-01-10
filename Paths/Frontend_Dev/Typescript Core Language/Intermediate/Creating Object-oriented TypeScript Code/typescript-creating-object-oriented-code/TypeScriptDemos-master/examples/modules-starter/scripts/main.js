"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conference_1 = require("./conference");
var speaker_1 = require("./speaker");
var conference = new conference_1.Conference('AngleBrackets');
conference.addSession('TypeScript with John');
var s1 = new speaker_1.Speaker('Dan the man', 'Wahlin');
var s2 = new speaker_1.Speaker('John', 'Papa');
conference.addSpeaker(s1);
conference.addSpeaker(s2);
document.getElementById('whatever').innerHTML = s1.firstName;
console.log(conference.speakers);
//# sourceMappingURL=main.js.map