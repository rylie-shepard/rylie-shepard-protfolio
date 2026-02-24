function updateUrgency() {
    const newvalue = document.querySelector('.js-urgency').value;
    document.querySelector('.js-urgency-value').value = newvalue;
}

document.querySelector('.js-urgency').addEventListener('change', updateUrgency);