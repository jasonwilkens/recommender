var el = document.querySelector('form[name="recommender"]'),
    answers = [],
    heightImperialMap = {
      0: '4&prime; 8&Prime;',
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
    },
    heightMetricMap = {
      0: '142 <abbr>cm</abbr>',
      10: '147 <abbr>cm</abbr>',
      20: '152 <abbr>cm</abbr>',
      30: '157 <abbr>cm</abbr>',
      40: '163 <abbr>cm</abbr>',
      50: '168 <abbr>cm</abbr>',
      60: '173 <abbr>cm</abbr>',
      70: '178 <abbr>cm</abbr>',
      80: '183 <abbr>cm</abbr>',
      90: '188 <abbr>cm</abbr>',
      100: '193 <abbr>cm</abbr>'
    },
    weightImperialMap = {
      0: '100 <abbr>lbs</abbr>',
      10: '110 <abbr>lbs</abbr>',
      20: '120 <abbr>lbs</abbr>',
      30: '130 <abbr>lbs</abbr>',
      40: '140 <abbr>lbs</abbr>',
      50: '150 <abbr>lbs</abbr>',
      60: '160 <abbr>lbs</abbr>',
      70: '170 <abbr>lbs</abbr>',
      80: '180 <abbr>lbs</abbr>',
      90: '190 <abbr>lbs</abbr>',
      100: '200 <abbr>lbs</abbr>',
    },
    weightMetricMap = {
      0: '45 kg',
      10: '50 <abbr>kg</abbr>',
      20: '54 <abbr>kg</abbr>',
      30: '59 <abbr>kg</abbr>',
      40: '64 <abbr>kg</abbr>',
      50: '68 <abbr>kg</abbr>',
      60: '73 <abbr>kg</abbr>',
      70: '77 <abbr>kg</abbr>',
      80: '82 <abbr>kg</abbr>',
      90: '86 <abbr>kg</abbr>',
      100: '91 <abbr>kg</abbr>'
    },
    imperialMaps = {
      height: heightImperialMap,
      weight: weightImperialMap,
    },
    metricMaps = {
      height: heightMetricMap,
      weight: weightMetricMap
    };

function updateVal(e) {
  for (i = 0; i < answers.length; i++) {
    if (answers[i].name === e.target.name) {
      answers[i].answer = e.target.value;
      break;
    }
  }
  if (e.target.type === 'range') {
    document.querySelector('#' + e.target.name + '-imperial').innerHTML = imperialMaps[e.target.name][e.target.value];
    document.querySelector('#' + e.target.name + '-metric').innerHTML = '(' + metricMaps[e.target.name][e.target.value] + ')';
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