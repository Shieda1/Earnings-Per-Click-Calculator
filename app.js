// https://calculator.swiftutors.com/earnings-per-click-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const earningsPerClickRadio = document.getElementById('earningsPerClickRadio');
const commissionsEarnedRadio = document.getElementById('commissionsEarnedRadio');
const totalClicksRadio = document.getElementById('totalClicksRadio');

let earningsPerClick;
let commissionsEarned = v1;
let totalClicks = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

earningsPerClickRadio.addEventListener('click', function() {
  variable1.textContent = 'Commissions Earned ($)';
  variable2.textContent = 'Total Clicks';
  commissionsEarned = v1;
  totalClicks = v2;
  result.textContent = '';
});

commissionsEarnedRadio.addEventListener('click', function() {
  variable1.textContent = '(EPC) Earnings Per Click ($)';
  variable2.textContent = 'Total Clicks';
  earningsPerClick = v1;
  totalClicks = v2;
  result.textContent = '';
});

totalClicksRadio.addEventListener('click', function() {
  variable1.textContent = '(EPC) Earnings Per Click ($)';
  variable2.textContent = 'Commissions Earned ($)';
  earningsPerClick = v1;
  commissionsEarned = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(earningsPerClickRadio.checked)
    result.textContent = `(EPC) Earnings Per Click ($) = ${computeEarningsPerClick().toFixed(2)}`;

  else if(commissionsEarnedRadio.checked)
    result.textContent = `Commissions Earned ($) = ${computeCommissionsEarned().toFixed(2)}`;

  else if(totalClicksRadio.checked)
    result.textContent = `Total Clicks = ${computeTotalClicks().toFixed(2)}`;
})

// calculation

function computeEarningsPerClick() {
  return Number(commissionsEarned.value) / Number(totalClicks.value);
}

function computeCommissionsEarned() {
  return Number(earningsPerClick.value) * Number(totalClicks.value);
}

function computeTotalClicks() {
  return Number(commissionsEarned.value) / Number(earningsPerClick.value);
}