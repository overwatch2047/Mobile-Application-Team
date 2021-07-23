//sample array
const student = [
    {name : "Al", mark : 10},
    {name : "Sam", mark : 8},
    {name : "Helen", mark : 5},
    {name : "Simon", mark : 9},
    {name : "Arjun", mark : 3},
];

//filtering students having marks greater than or equal to 5
const gradePass = student.filter(s => s.mark >= 5);
console.log(gradePass);

//mapping to a new array after conversion

const newStudent = student.map (s => s.mark *9.5);
console.log(newStudent);


//sorting by marks

const sortedStudent = student.sort((s1,s2) => s1.mark - s2.mark);
console.log(sortedStudent);

//aggregate marks using reduce

const markSum = student.reduce((agg, s ) => agg + s.mark, 0);
console.log(`Aggregate is : ${markSum}`);    