/**
 * Take two numbers and multiply them.
 *
 * @param int firstNumber One number to multiply.
 * @param int secondNumber The other number to add
 * @return int The product of the two numbers.
 */
function multiplyNumbers(firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}

let myNumber = -5;
let firstNumber = 29;

console.log(firstNumber);

console.log(multiplyNumbers(-2, myNumber));
console.log(multiplyNumbers(2, myNumber));
console.log(multiplyNumbers(-1, 5));
console.log(multiplyNumbers(6, 487635789));

console.log(firstNumber);


/**
 * Take two strings and concatenate them into a full name/
 *
 * @param string firstName The given name to concatenate
 * @param string lastName The family name to concatenate
 * @return string The full name of our person.
 */
function getFullName (firstName, lastName) {
	return firstName + ' ' + lastName;
}

let myFirstName = 'Barry';

console.log(getFullName(myFirstName, 'Schulzetenberg'));
console.log(getFullName("Paul", "Schulzetenberg"));



console.log(myFirstName, 'Schulzetenberg');
