// first way
// for (let i = 0; i<10; i++) {
//     console.log(i)
// }


// second way

// let i = 0;
// do {
//     console.log(i)
//     i++

// }while(i < 10)









// third way 

//let i = 0
// while(i<10) {
//     console.log(i)
//     i++
// }



let answers = []
let questions = [
    
    'What is your phone',
    'How old are you'
]


// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i])
// }
// console.log(answers)

// let i = 0
// while(i < questions.length) {
//     console.log(i)
//     i++
//     answers[i] = prompt(questions[i])
    

// }

let i = 0;
do {
    console.log(i)
    i++
    answers[i] = prompt(questions[i])
}while(i < questions)
answers[i] = prompt(questions[i])