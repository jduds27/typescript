// function expression
function fullName(first: string, last: string): string {
  return first + " " + last;
}

// function expression
var otherFullName: (first: string, last: string) => string;

otherFullName = function (first: string, last: string) {
  return first + " " + last;
}

var thirdFullName: (first: string, last: string) => string = function (first: string, last: string) {
  return first + " " + last;
}

console.log(fullName('Jason', 'Dudley'));
console.log(otherFullName('Jason', 'Dudley'));
console.log(thirdFullName('Jason', 'Dudley'));

