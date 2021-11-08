function startGame() {
  // starting a new game
  let playerName: string = "James";
  logPlayer(playerName);

  let messagesElement: HTMLElement | string;

  if(typeof messagesElement === 'string') {
  	return messagesElement;
  } else {
  	return messagesElement;
  }

  messagesElement = document.getElementById('messages');
  (<HTMLElement>messagesElement!).innerText = 'Welcome to MultiMath! Starting new game...';  
}

function logPlayer(name) {
	console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);