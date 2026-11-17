
function init() {
  ['brownType', 'brownBuckets', 'greenType', 'greenBuckets'].forEach(id => {
    document.getElementById(id).addEventListener('change', calc);
    document.getElementById(id).addEventListener('input', calc);
  });
  calc();
}

function calc() {
  const cBrown = parseFloat(document.getElementById('brownType').value)||60;
  const bBuckets = parseFloat(document.getElementById('brownBuckets').value)||3;
  const cGreen = parseFloat(document.getElementById('greenType').value)||20;
  const gBuckets = parseFloat(document.getElementById('greenBuckets').value)||1;

  const totalVol = bBuckets + gBuckets;
  const weightedC = ((cBrown * bBuckets) + (cGreen * gBuckets)) / totalVol;

  const ratio = Math.round(weightedC);
  let verdict = "Ideal Gold Standard Ratio (Fast Hot Composting)";
  let temp = "Reaches 135°F–155°F Thermophilic Kill Zone in 48 Hours";
  let odor = "Zero Smell / Sweet Earth";
  let time = "4–6 Weeks (Hot & Fast)";
  let color = "#4ade80";

  if (ratio < 22) {
    verdict = "Too High in Nitrogen! (Smelly Pile Risk)";
    temp = "Warning: Excess nitrogen escapes as pungent ammonia gas.";
    odor = "Rotten / Ammonia Odor Risk";
    time = "Slimy & Cold Breakdown";
    color = "#f87171";
  } else if (ratio > 40) {
    verdict = "Too High in Carbon! (Slow Cold Pile)";
    temp = "Microbes lack sufficient nitrogen fuel to generate heat.";
    odor = "Zero Odor (Completely Inert)";
    time = "6–12 Months (Slow Cold Compost)";
    color = "#facc15";
  }

  document.getElementById('finalRatio').textContent = `${ratio} : 1`;
  document.getElementById('ratioVerdict').textContent = verdict;
  document.getElementById('tempEstimate').textContent = temp;
  document.getElementById('odorRisk').textContent = odor;
  document.getElementById('odorRisk').style.color = color;
  document.getElementById('finishTime').textContent = time;
}
window.addEventListener('DOMContentLoaded', init);
