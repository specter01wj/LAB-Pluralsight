
function introduction(name, profession) {
  console.log('My name is ' + name + ' and I am a ' + profession + '.');
  console.log(this);
}


introduction('John', 'student');
introduction(undefined, ['Mary', 'Laywer']);
introduction(undefined, ['James', 'Artist']);




