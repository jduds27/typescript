// function expression
function fullName(first, last) {
    return first + " " + last;
}
// function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Jason', 'Dudley'));
console.log(otherFullName('Jason', 'Dudley'));
console.log(thirdFullName('Jason', 'Dudley'));
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map