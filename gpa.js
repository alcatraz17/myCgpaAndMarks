var grade = 0;
var totalCreditPoints = 0;

//// To round off the GPA in two decimal places and return a number.
let roundOff = (totalGrades, totalCredits) => {
    let semGrade = (totalCredits / totalGrades).toFixed(2);
    grade = 0;
    totalCreditPoints = 0;
    return Number(semGrade);
}

///// To calculate the GPA for corresponding semester.
let myFilter = (arr) => {
    arr.filter((elem) => {
        totalCreditPoints = elem.CreditPoints + totalCreditPoints;
        grade = elem.Credits + grade;
    });
}


///// SEM 1 ////////
let sem1 = [{
        name: "PT & Games",
        Credits: 1,
        Grade: "A",
        CreditPoints: 8,
    },

    {
        name: "Chemistry Lab",
        Credits: 2,
        Grade: "A",
        CreditPoints: 16,
    },

    {
        name: "Basic Electronics Engg Lab",
        Credits: 2,
        Grade: "C",
        CreditPoints: 10,
    },

    {
        name: "Engineering Graphics",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Fundamentals of Unix & C Programming",
        Credits: 3,
        Grade: "A",
        CreditPoints: 24,
    },

    {
        name: "Engg Chemistry",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Principles of Electronics Engg",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Physics",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20,
    },

    {
        name: "Engg Mathematics",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20,
    },

    {
        name: "Engg Mechanics",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20,
    },
];


let sem1Total = myFilter(sem1);
let sem1Grade = roundOff(grade, totalCreditPoints);
console.log(`Semester 1 grade is : ${sem1Grade} GPA`)



///// SEM 2 ////////


let sem2 = [{
        name: "PT & Games",
        Credits: 1,
        Grade: "A",
        CreditPoints: 8,
    },

    {
        name: "Data Structures Lab",
        Credits: 2,
        Grade: "A",
        CreditPoints: 16,
    },

    {
        name: "Workshop Practice",
        Credits: 2,
        Grade: "A+",
        CreditPoints: 18,
    },

    {
        name: "Engineering Mechanics Lab",
        Credits: 2,
        Grade: "A",
        CreditPoints: 16,
    },

    {
        name: "Physics Lab",
        Credits: 2,
        Grade: "B+",
        CreditPoints: 14,
    },

    {
        name: "Technical English",
        Credits: 3,
        Grade: "B+",
        CreditPoints: 21,
    },

    {
        name: "Principles of Mechanical Engg",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Environmental Science",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Fundamentals of Data Structure",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20,
    },

    {
        name: "Advance Engineering Mathematics",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20,
    },

    {
        name: "Principles of Electrical Engineering",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20
    }
];


let sem2Total = myFilter(sem2);
let sem2Grade = roundOff(grade, totalCreditPoints);
console.log(`Semester 2 grade is : ${sem2Grade} GPA`)



///// SEM 3 ////////

let sem3 = [{
        name: "PT & Games",
        Credits: 1,
        Grade: "A",
        CreditPoints: 8,
    },

    {
        name: "Basic Electrical Engg Lab",
        Credits: 2,
        Grade: "B+",
        CreditPoints: 14,
    },

    {
        name: "Strength Of Materials Lab",
        Credits: 2,
        Grade: "A",
        CreditPoints: 16,
    },

    {
        name: "Instrumental Analysis",
        Credits: 2,
        Grade: "A",
        CreditPoints: 16,
    },

    {
        name: "Biological Science",
        Credits: 3,
        Grade: "B",
        CreditPoints: 18,
    },

    {
        name: "Strength of Materials",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Fluid Mechanics",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Process Calculation And Mechanical Operations in Chemical Engineering",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20,
    },

    {
        name: "Chemical Engineering Thermodynamics",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20,
    },

];


let sem3Total = myFilter(sem3);
let sem3Grade = roundOff(grade, totalCreditPoints);
console.log(`Semester 3 grade is : ${sem3Grade} GPA`)

///// SEM 4 ////////

let sem4 = [{
        name: "PT & Games",
        Credits: 1,
        Grade: "C",
        CreditPoints: 5,
    },

    {
        name: "Energy Engg Lab",
        Credits: 2,
        Grade: "B+",
        CreditPoints: 14,
    },

    {
        name: "Numerical Methods for Chemical Engg Lab",
        Credits: 2,
        Grade: "B+",
        CreditPoints: 14,
    },

    {
        name: "Chemical Engg Lab 1",
        Credits: 2,
        Grade: "B+",
        CreditPoints: 14,
    },

    {
        name: "French",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Transport Phenomena",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Numerical Methods for Chemical Engineers",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Petrochemicals and Refinery Engg",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Heat Transfer Operations",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20,
    },

];


let sem4Total = myFilter(sem4);
let sem4Grade = roundOff(grade, totalCreditPoints);
console.log(`Semester 4 grade is : ${sem4Grade} GPA`)

///// SEM 5 ////////

let sem5 = [{
        name: "Reaction Engg Lab",
        Credits: 2,
        Grade: "B",
        CreditPoints: 12,
    },

    {
        name: "Computer Aided Process Engg Lab 1",
        Credits: 2,
        Grade: "B",
        CreditPoints: 12,
    },

    {
        name: "Chemical Engg Lab 2",
        Credits: 2,
        Grade: "C",
        CreditPoints: 10,
    },

    {
        name: "Organisation Behaviour",
        Credits: 3,
        Grade: "B+",
        CreditPoints: 21,
    },

    {
        name: "Computer Aided Process Engineering",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Reaction Engineering",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Energy Engineering",  /////// BACKLOG //////
        Credits: 3,
        Grade: "D",
        CreditPoints: 12,
    },

    {
        name: "Mass Transfer Operations",
        Credits: 4,
        Grade: "C",
        CreditPoints: 20,
    },

];


let sem5Total = myFilter(sem5);
let sem5Grade = roundOff(grade, totalCreditPoints);
console.log(`Semester 5 grade is : ${sem5Grade} GPA`)

///// SEM 6 ////////

let sem6 = [
    {
        name: "Chemical Engg Equipment Design",
        Credits: 2,
        Grade: "B+",
        CreditPoints: 14,
    },

    {
        name: "Polymer Engg Lab",
        Credits: 2,
        Grade: "B+",
        CreditPoints: 14,
    },

    {
        name: "Chemical Engg Lab 3",
        Credits: 2,
        Grade: "B",
        CreditPoints: 12,
    },

    {
        name: "Advances in Reaction Engineering",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Polymer Science and Engineering",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Modern Separation Process",  ////// BACKLOG ////
        Credits: 3,
        Grade: "D",
        CreditPoints: 12,
    },

    {
        name: "Industrial Chemical Process", ////// BACKLOG ////
        Credits: 3,
        Grade: "D",
        CreditPoints: 12,
    },

    {
        name: "Biochemical Engineering",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

];


let sem6Total = myFilter(sem6);
let sem6Grade = roundOff(grade, totalCreditPoints);
console.log(`Semester 6 grade is : ${sem6Grade} GPA`)

///// SEM 7 ////////

let sem7 = [
    {
        name: "Chemical Technology Lab",
        Credits: 2,
        Grade: "B",
        CreditPoints: 12,
    },

    {
        name: "Computer Aided Process Engg Lab 2",
        Credits: 2,
        Grade: "B",
        CreditPoints: 12,
    },

    {
        name: "Process Control And Instrumentation Lab",
        Credits: 2,
        Grade: "C",
        CreditPoints: 10,
    },

    {
        name: "Polymer Composites",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Fiber Science And Technology",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Project Engg & Economics for Chemical Engineers",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Process Modelling Simulation & Optimization",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

    {
        name: "Process Control and Instrumentation",
        Credits: 3,
        Grade: "C",
        CreditPoints: 15,
    },

];


let sem7Total = myFilter(sem7);
let sem7Grade = roundOff(grade, totalCreditPoints);
console.log(`Semester 7 grade is : ${sem7Grade} GPA`)


///// SEM 8 ////////

let sem8 = [
    {
        name: "Entrepneurship and Business Plan",
        Credits: 1,
        Grade: "C",
        CreditPoints: 5,
    },

    {
        name: "Project and Comprehensive Viva",
        Credits: 8,
        Grade: "A+",
        CreditPoints: 72,
    }
];


let sem8Total = myFilter(sem8);
let sem8Grade = roundOff(grade, totalCreditPoints);
console.log(`Semester 8 grade is : ${sem8Grade} GPA`)

let currentCGPA = (sem1Grade + sem2Grade + sem3Grade + sem4Grade + sem5Grade + sem6Grade + sem7Grade + sem8Grade)/8;

console.log(`Current CGPA is: ${currentCGPA}`);

console.log("Final CGPA after completion will be 59.98 CGPA which is equivalent to 59.98%");    //For Non Collegiate students BIT Mesra only awards C grade if a student passes his examination even if he scores fully in his paper.
