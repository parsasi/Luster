export default (quiz) => {
    return quiz.filter(item => item.answer && item.questionText).map((item) => {
        delete item.component
        delete item.selected
        return item
    })
}

// quiz: [
//     {
//       component: 0,
//       selected: false,
//       answer: ''
//     },
//     {
//       component: 1,
//       selected: false,
//       answer: 'never',
//       questionText: 'exercise'
//     },]