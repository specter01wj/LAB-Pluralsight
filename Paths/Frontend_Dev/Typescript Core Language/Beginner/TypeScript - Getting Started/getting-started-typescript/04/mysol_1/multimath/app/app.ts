function startGame() {
  // starting a new game

  // let playerName: string = 'Audrey';
  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  /*let messagesElement = document.getElementById('messages');
  
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';  */
  postScore(80, playerName);
  postScore(2222);
  postScore(-5, playerName);

}

function logPlayer(name?: string): void {
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


function postScore(score: number, playerName: string = 'MultiMath Player'): void {

  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  }
  else {
    logger = logMessage;
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;




  

  logger(`Score: ${score}`);
}

function logError(err: string): void {
  console.error(err);
}

const logMessage = (message: string) => console.log(message);


document.getElementById('startGame')!.addEventListener('click', startGame);


