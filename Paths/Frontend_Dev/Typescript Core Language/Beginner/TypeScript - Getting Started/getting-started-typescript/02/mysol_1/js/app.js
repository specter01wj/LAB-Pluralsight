"use strict";
function startGame() {
    // starting a new game
    var messagesElement = document.getElementById('messages');
    var playername = document.getElementById('playername');
    messagesElement.innerText = "Welcome to MultiMath! " + playername.value + " Starting new game...";
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map