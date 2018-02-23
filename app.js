var el = document.querySelector('form[name="recommender"]'),
    answers = [],
    heightImperialMap = {
      10: '4&prime; 10&Prime;',
      20: '5&prime;',
      30: '5&prime; 2&Prime;',
      40: '5&prime; 4&Prime;',
      50: '5&prime; 6&Prime;',
      60: '5&prime; 8&Prime;',
      70: '5&prime; 10&Prime;',
      80: '6&prime;',
      90: '6&prime; 2&Prime;',
      100: '6&prime; 4&Prime;'
    };

function updateVal(e) {
  for (i = 0; i < answers.length; i++) {
    if (answers[i].name === e.target.name) {
      answers[i].answer = e.target.value;
      break;
    }
  }
  if (e.target.type === 'range') {
    debugger;
    // update slider text here
  }
};

function initialAnswers() {
  var inputs = Array.from(document.querySelectorAll('input'));
  var names = [];
  for (i=0; i < inputs.length; i++) {
    if (names.indexOf(inputs[i].name) === -1) {
      names.push(inputs[i].name);
    }
  }
  inputs = inputs.filter(function(input) {
    return input.type === 'range' || (input.type === 'radio' && input.checked === true);
  });
  answers = inputs.map(function(input) {
    return { name: input.name, answer: input.value }
  });
  for (i=0; i < names.length; i++) {
    if (!answers.find(function(answer){
      return answer.name === names[i];
    })) {
      answers.push({ name: names[i], answer: '' });
    }
  }
}

initialAnswers();
el.addEventListener("input", updateVal, true);