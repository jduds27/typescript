// function fullName(first: string, last: string): string {
//   return first + " " + last;
// }

// var names: string[] = ['Jason', 'Larissa', 'Lucas'];
// var counter: number = 0;

// (function () {
//   for (let name in names) {
//     counter++;
//   }
// })();

// console.log(counter);

var fullName: (first: string, last: string) => string;

fullName = function (first: string, last: string) {
  return first + " " + last;
}

console.log(fullName('Jason', 'Dudley'))
