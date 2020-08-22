
// Traversing the DOM

// const btns = document.querySelectorAll('.question-btn');

// // making click button functional...

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         // calls parent div element...
//         const questionParent = e.currentTarget.parentElement.parentElement;
//         questionParent.classList.toggle('show-text');
//     });
// });

// Another Method Using Selectors Inside Elements...

const questionsDiv = document.querySelectorAll('.question');


// Loops over all the elements with class .question
questionsDiv.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    
    // console.log(btn);

    // Hiding other divs when one section is visible...

    btn.addEventListener('click', function(){
        questionsDiv.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
});
