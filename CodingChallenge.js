'use strict';

const result = document.querySelector('.result');

const poll = {
    question: 'What is your favorite programming language ?',
    option: ['0: JavaScript', '1: Python','2:Rust','3:C++'],
    answers: new Array(4).fill(0), //isso gera um vetor [0,0,0,0]
    registeredAnswer: function(){  
        const choice = Number(prompt(`${this.question} ${this.option.join("\n")}\n (write option number)`));
        if(typeof choice === 'number' && choice >= 0 && choice < this.answers.length){
            this.answers[choice-1]++;
        }else{
            alert('Insert a valid option!');
        }
        this.displayResults(this.answers.join(','));
    },

    displayResults: function(type){
        if(typeof type === 'string'){
            console.log(`Poll results are ${type}`)
            result.innerHTML = `Poll results are ${type}`;
        }else{
            console.log(type);
        }
    },
};

poll.registeredAnswer();

const btn = document.querySelector('.Poll');
btn.addEventListener('click', poll.registeredAnswer.bind(poll));
