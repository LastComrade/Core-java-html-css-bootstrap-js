const heightRef = document.getElementById('heightInput');
const weightRef = document.getElementById('weightInput');

function calculateBMI(height, weight) {
    heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function getMetaResult(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 25) {
        return 'Normal';
    } else if (bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function submitHandler() {
    const height = heightRef.value;
    const weight = weightRef.value;
    const bmi = calculateBMI(height, weight);

    // Inject the result
    const result = document.getElementById('result');
    const metaResult = document.getElementById('metaResult');
    result.innerText = bmi;
    metaResult.innerText = getMetaResult(bmi);
}

function resetHandler() {
    heightRef.value = '';
    weightRef.value = '';
}