function startGame() {
  // starting a new game

  let playerName: string = 'Audrey';
  logPlayer(playerName);

  let messagesElement = document.getElementById('messages');
  
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  
}

function logPlayer(name: string): void {
  console.log(`New game starting for player: ${name}`);
}


function getInputValue(elementID: string): string | undefined {

  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return undefined;
  }
  else {
    return inputElement.value;
  }  
}



document.getElementById('startGame')!.addEventListener('click', startGame);


