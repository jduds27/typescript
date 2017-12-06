// function printAddress(street: string, streetTwo?: string, state = 'UT') {
//   console.log(street);
//   if (streetTwo) {
//     console.log(streetTwo);
//   }
//   console.log(state)
// }
// printAddress("123 Any St");
// printAddress("123 Any St", "Suit 540");
// function lineupCard(team: string, ...players: string[]) {
//   console.log('Team: ' + team);
//   for (let player of players) {
//     console.log(player);
//   }
// }
// lineupCard('Astros', 'Altuve', 'Correra', 'Bergman');
var gradeGenerator = function (grade) {
    if (grade < 60) {
        return "F";
    }
    else if (grade >= 60 && grade < 70) {
        return "D";
    }
    else if (grade >= 70 && grade < 80) {
        return "C";
    }
    else if (grade >= 80 && grade < 90) {
        return "B";
    }
    else {
        return "A";
    }
};
console.log(gradeGenerator(45));
console.log(gradeGenerator(99));
console.log(gradeGenerator(80));
console.log(gradeGenerator(69));
//# sourceMappingURL=016_function_args.js.map