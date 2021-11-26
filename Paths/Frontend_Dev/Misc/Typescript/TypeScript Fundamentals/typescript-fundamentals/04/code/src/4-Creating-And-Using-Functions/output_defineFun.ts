
const prefix = '🐉 ';


export default async function updateOutput(id: string) {

}

runTheLearningSamples();

function runTheLearningSamples() {

  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`Product id=${id.toString()} and name=${name}`);
  }

  displayProductInfo(10, 'Pizza');

  function addNumbersDeclaration(x: number, y: number) {
    const sum: number = x + y;
    return sum;
  }

}













