function startGame() {
  // starting a new game

  // let playerName: string = 'Audrey';
  let playerName: string | null;
  playerName = null;
  logPlayer(playerName);

  // var messagesElement = document.getElementById('messages');
  var messagesElement: HTMLElement | string;

  if(typeof messagesElement === 'string') {
  	return messagesElement;
  } else {
  	return messagesElement;
  }


  messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
}

function logPlayer(name) {
	console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
