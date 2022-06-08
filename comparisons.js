// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("is numberTeachers less than numberStudents", numberStudents > numberTeachers);
// this should log: is numberTeachers less than numberStudents? true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("is numberTeachers strictly equal to stringTeachers?" numberTachers == stringTeachers);
// this should log: is numberTeachers strictly equal to stringTeachers? false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("is numberTeachers not equal to numberStudents?" numberTeachers !== numberStudents);
// this should log: is numberTeachers not equal to numberStudents? true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("is numberStudents greater than or equal to 20" numberStudents >= 20);
// this should log: is numberStudents greater than or equal to 20? true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console,log("is numberStudents greater than or equal to 21?" numberStudens >= 21);
// this should log: is numberStudents greater than or equal to 21? false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log(" numberStudents less than or equal to 20?" numberStudents <= 20);
// this should log: numberStudents less than or equal to 20? true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("is numberStudents less than or equal to 21?" numberStudents <= 21);
// this should log:is numberStudents less than or equal to 21? true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain. This statment is asking "Is 9 greater thaan 4?" The computure outputs True

var books = 3;
console.log(4 < books);
// YOU DO: Explain, This statment is saying books = 3, then asking "is books greater than 3?" The computure outputs false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain. This statment is saying friends = 3 and sibinings = 2, then asks is friends greater than sibingings. the computure outputs true.

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: This statment is saying attendees = 9 and meals = 8, then asks if attendees and meals are NOT equal. The computure outputs true. 


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && isPuppy);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: There would be an error message becuase there is no "isPuppy" var.
