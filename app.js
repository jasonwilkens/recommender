var el = document.querySelector('form[name="recommender"]'),
    answers = [],
    heightImperialMap = {
      0: '&lt;4&prime; 5&Prime;',
      5: '4&prime; 5&Prime;',
      10: '4&prime; 6&Prime;',
      15: '4&prime; 7&Prime;',
      20: '4&prime; 8&Prime;',
      25: '4&prime; 9&Prime;',
      30: '4&prime; 10&Prime;',
      35: '4&prime; 11&Prime;',
      40: '5&prime;',
      45: '5&prime; 1&Prime;',
      50: '5&prime; 2&Prime;',
      55: '5&prime; 3&Prime;',
      60: '5&prime; 4&Prime;',
      65: '5&prime; 5&Prime;',
      70: '5&prime; 6&Prime;',
      75: '5&prime; 7&Prime;',
      80: '5&prime; 8&Prime;',
      85: '5&prime; 9&Prime;',
      90: '5&prime; 10&Prime;',
      95: '5&prime; 11&Prime;',
      100: '6&prime;',
      105: '6&prime; 1&Prime;',
      110: '6&prime; 2&Prime;',
      115: '6&prime; 3&Prime;',
      120: '6&prime; 4&Prime;',
      125: '6&prime; 5&Prime;',
      130: '&gt;6&prime; 5&Prime;'
    },
    heightMetricMap = {
      0: '&lt;135 <abbr>cm</abbr>',
      5: '135 <abbr>cm</abbr>',
      10: '137 <abbr>cm</abbr>',
      15: '140 <abbr>cm</abbr>',
      20: '142 <abbr>cm</abbr>',
      25: '145 <abbr>cm</abbr>',
      30: '147 <abbr>cm</abbr>',
      35: '150 <abbr>cm</abbr>',
      40: '152 <abbr>cm</abbr>',
      45: '155 <abbr>cm</abbr>',
      50: '157 <abbr>cm</abbr>',
      55: '160 <abbr>cm</abbr>',
      60: '163 <abbr>cm</abbr>',
      65: '165 <abbr>cm</abbr>',
      70: '168 <abbr>cm</abbr>',
      75: '170 <abbr>cm</abbr>',
      80: '173 <abbr>cm</abbr>',
      85: '175 <abbr>cm</abbr>',
      90: '178 <abbr>cm</abbr>',
      95: '180 <abbr>cm</abbr>',
      100: '183 <abbr>cm</abbr>',
      105: '185 <abbr>cm</abbr>',
      110: '188 <abbr>cm</abbr>',
      115: '191 <abbr>cm</abbr>',
      120: '193 <abbr>cm</abbr>',
      125: '196 <abbr>cm</abbr>',
      130: '&gt;196 <abbr>cm</abbr>'
    },
    weightImperialMap = {
      0: '&lt;85 <abbr>lbs</abbr>',
      5: '85 <abbr>lbs</abbr>',
      10: '90 <abbr>lbs</abbr>',
      15: '95 <abbr>lbs</abbr>',
      20: '100 <abbr>lbs</abbr>',
      25: '105 <abbr>lbs</abbr>',
      30: '110 <abbr>lbs</abbr>',
      35: '115 <abbr>lbs</abbr>',
      40: '120 <abbr>lbs</abbr>',
      45: '125 <abbr>lbs</abbr>',
      50: '130 <abbr>lbs</abbr>',
      55: '135 <abbr>lbs</abbr>',
      60: '140 <abbr>lbs</abbr>',
      65: '145 <abbr>lbs</abbr>',
      70: '150 <abbr>lbs</abbr>',
      75: '155 <abbr>lbs</abbr>',
      80: '160 <abbr>lbs</abbr>',
      85: '165 <abbr>lbs</abbr>',
      90: '170 <abbr>lbs</abbr>',
      95: '175 <abbr>lbs</abbr>',
      100: '180 <abbr>lbs</abbr>',
      105: '185 <abbr>lbs</abbr>',
      110: '190 <abbr>lbs</abbr>',
      115: '195 <abbr>lbs</abbr>',
      120: '200 <abbr>lbs</abbr>',
      125: '205 <abbr>lbs</abbr>',
      130: '210 <abbr>lbs</abbr>',
      135: '215 <abbr>lbs</abbr>',
      140: '220 <abbr>lbs</abbr>',
      145: '225 <abbr>lbs</abbr>',
      150: '230 <abbr>lbs</abbr>',
      155: '235 <abbr>lbs</abbr>',
      160: '240 <abbr>lbs</abbr>',
      165: '245 <abbr>lbs</abbr>',
      170: '&gt;245 <abbr>lbs</abbr>'
    },
    weightMetricMap = {
      0: '&lt;39 <abbr>kg</abbr>',
      5: '39 <abbr>kg</abbr>',
      10: '41 <abbr>kg</abbr>',
      15: '43 <abbr>kg</abbr>',
      20: '45 <abbr>kg</abbr>',
      25: '48 <abbr>kg</abbr>',
      30: '50 <abbr>kg</abbr>',
      35: '52 <abbr>kg</abbr>',
      40: '54 <abbr>kg</abbr>',
      45: '57 <abbr>kg</abbr>',
      50: '59 <abbr>kg</abbr>',
      55: '61 <abbr>kg</abbr>',
      60: '64 <abbr>kg</abbr>',
      65: '66 <abbr>kg</abbr>',
      70: '68 <abbr>kg</abbr>',
      75: '70 <abbr>kg</abbr>',
      80: '73 <abbr>kg</abbr>',
      85: '75 <abbr>kg</abbr>',
      90: '77 <abbr>kg</abbr>',
      95: '79 <abbr>kg</abbr>',
      100: '82 <abbr>kg</abbr>',
      105: '84 <abbr>kg</abbr>',
      110: '86 <abbr>kg</abbr>',
      115: '88 <abbr>kg</abbr>',
      120: '91 <abbr>kg</abbr>',
      125: '93 <abbr>kg</abbr>',
      130: '95 <abbr>kg</abbr>',
      135: '98 <abbr>kg</abbr>',
      140: '100 <abbr>kg</abbr>',
      145: '102 <abbr>kg</abbr>',
      150: '104 <abbr>kg</abbr>',
      155: '107 <abbr>kg</abbr>',
      160: '109 <abbr>kg</abbr>',
      165: '111 <abbr>kg</abbr>',
      170: '&gt;111 <abbr>kg</abbr>'
    },
    shoeSizeWomensUsa = {
      0: '4 <abbr>US</abbr>',
      5: '4.5 <abbr>US</abbr>',
      10: '5 <abbr>US</abbr>',
      15: '5.5 <abbr>US</abbr>',
      20: '6 <abbr>US</abbr>',
      25: '6.5 <abbr>US</abbr>',
      30: '7 <abbr>US</abbr>',
      35: '7.5 <abbr>US</abbr>',
      40: '8 <abbr>US</abbr>',
      45: '8.5 <abbr>US</abbr>',
      50: '9 <abbr>US</abbr>',
      55: '9.5 <abbr>US</abbr>',
      60: '10 <abbr>US</abbr>',
      65: '10.5 <abbr>US</abbr>',
      70: '11 <abbr>US</abbr>',
      75: '11.5 <abbr>US</abbr>',
      80: '12 <abbr>US</abbr>'
    },
    shoeSizeWomensEu = {
      0: '35 <abbr>Euro</abbr>',
      5: '35 <abbr>Euro</abbr>',
      10: '35-36 <abbr>Euro</abbr>',
      15: '36 <abbr>Euro</abbr>',
      20: '36-37 <abbr>Euro</abbr>',
      25: '37 <abbr>Euro</abbr>',
      30: '37-38 <abbr>Euro</abbr>',
      35: '38 <abbr>Euro</abbr>',
      40: '38-39 <abbr>Euro</abbr>',
      45: '39 <abbr>Euro</abbr>',
      50: '39-40 <abbr>Euro</abbr>',
      55: '40 <abbr>Euro</abbr>',
      60: '40-41 <abbr>Euro</abbr>',
      65: '41 <abbr>Euro</abbr>',
      70: '41-42 <abbr>Euro</abbr>',
      75: '42 <abbr>Euro</abbr>',
      80: '42-43 <abbr>Euro</abbr>'
    },
    shoeSizeMensUsa = {
      0: '6 <abbr>US</abbr>',
      5: '6.5 <abbr>US</abbr>',
      10: '7 <abbr>US</abbr>',
      15: '7.5 <abbr>US</abbr>',
      20: '8 <abbr>US</abbr>',
      25: '8.5 <abbr>US</abbr>',
      30: '9 <abbr>US</abbr>',
      35: '9.5 <abbr>US</abbr>',
      40: '10 <abbr>US</abbr>',
      45: '10.5 <abbr>US</abbr>',
      50: '11 <abbr>US</abbr>',
      55: '11.5 <abbr>US</abbr>',
      60: '12 <abbr>US</abbr>',
      65: '12.5 <abbr>US</abbr>',
      70: '13 <abbr>US</abbr>',
      75: '13.5 <abbr>US</abbr>',
      80: '14 <abbr>US</abbr>',
      85: '14.5 <abbr>US</abbr>',
      90: '15 <abbr>US</abbr>',
      95: '15.5 <abbr>US</abbr>',
      100: '16 <abbr>US</abbr>',
    },
    shoeSizeMensEu = {
      0: '39 <abbr>Euro</abbr>',
      5: '39 <abbr>Euro</abbr>',
      10: '40 <abbr>Euro</abbr>',
      15: '40-41 <abbr>Euro</abbr>',
      20: '41 <abbr>Euro</abbr>',
      25: '41-42 <abbr>Euro</abbr>',
      30: '42 <abbr>Euro</abbr>',
      35: '42-43 <abbr>Euro</abbr>',
      40: '43 <abbr>Euro</abbr>',
      45: '43-44 <abbr>Euro</abbr>',
      50: '44 <abbr>Euro</abbr>',
      55: '44-45 <abbr>Euro</abbr>',
      60: '45 <abbr>Euro</abbr>',
      65: '45-46 <abbr>Euro</abbr>',
      70: '46 <abbr>Euro</abbr>',
      75: '46-47 <abbr>Euro</abbr>',
      80: '47 <abbr>Euro</abbr>',
      85: '47-48 <abbr>Euro</abbr>',
      90: '48 <abbr>Euro</abbr>',
      95: '48-49 <abbr>Euro</abbr>',
      100: '49 <abbr>Euro</abbr>'
      
    },
    usaMaps = { 
      height: heightImperialMap,
      weight: weightImperialMap,
      womens: shoeSizeWomensUsa,
      mens: shoeSizeMensUsa
    },
    euMaps = {
      height: heightMetricMap,
      weight: weightMetricMap,
      womens: shoeSizeWomensEu,
      mens: shoeSizeMensEu
    };

function updateVal(e) {
  for (i = 0; i < answers.length; i++) {
    if (answers[i].name === e.target.name) {
      answers[i].answer = e.target.value;
      break;
    }
  }
  if (e.target.type === 'range') {
    document.querySelector('#' + e.target.name + '-imperial').innerHTML = usaMaps[e.target.name][e.target.value];
    document.querySelector('#' + e.target.name + '-metric').innerHTML = '(' + euMaps[e.target.name][e.target.value] + ')';
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