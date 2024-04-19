// Question 109
let hour = new Date;
let h = hour.getHours();
if (h < 12) {
    console.log("Good Morning");
}
// Question 110
function AssignGrade(grade) {
    if (grade >= 80) {
        console.log("A+");
    }
    else if (grade >= 70 && grade <= 79.99) {
        console.log("A");
    }
    else if (grade >= 60 && grade <= 69.99) {
        console.log("B");
    }
    else if (grade >= 50 && grade <= 59.99) {
        console.log("C");
    }
    else if (grade >= 40 && grade <= 49.99) {
        console.log("D");
    }
    else {
        console.log("F");
    }
}
AssignGrade(35);
// Question 111
function PersonAge(age) {
    if (age < 13) {
        return `Child`;
    }
    else if (age >= 13 && age <= 19) {
        return `Teenager`;
    }
    else {
        return `Adult`;
    }
}
console.log(PersonAge(5));
console.log(PersonAge(16));
console.log(PersonAge(20));
export {};
