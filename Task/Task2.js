let Maths = 82
let English = 70
let Computers = 66
let Science = 84

console.log('Maths :' + Maths + ' : ' + calculateGrades(Maths))
console.log('English :' + English + ' : ' + calculateGrades(English))
console.log('Computers :' + Computers + ' : ' + calculateGrades(Computers))
console.log('Science :' + Science + ' : ' + calculateGrades(Science))
console.log('Highest Marks' + ' : ' + CalculateHighestMarks(Maths, English, Computers, Science))

function calculateGrades(marks) {
    if (marks >= 80) {
        return 'A'
    } else if (marks < 80 && marks >= 60) {
        return 'B'
    } else if (marks < 60 && marks >= 40) {
        return 'C'
    } else return 'D'
}

function CalculateHighestMarks(Maths, English, Computers, Science) {
    if (Maths > English && Maths > Computers && Maths > Science) {
        return 'Maths'
    } else if (English > Computers && English > Science) {
        return 'English'
    } if (Computers > Science) {
        return 'Computers'
    } else {
        return 'Science'
    }
}