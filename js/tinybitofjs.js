const rangeSliderRotation = document.querySelector('input[name="rotation-control"]')
const rangeSliderBodyRotationX = document.querySelector('input[name="rotation-body-control-x"]')

function setCustomProp() {
    const rangeSliderRotationValue = rangeSliderRotation.value
    const rangeSliderBodyRotationXValue = rangeSliderBodyRotationX.value

    console.log(rangeSliderRotationValue);
    console.log(rangeSliderBodyRotationXValue);

    // customProperty
    document.documentElement.style.setProperty('--rotate-angle-cuboid-opdracht', `${rangeSliderRotationValue}deg`);
    document.documentElement.style.setProperty('--rotate-angle', `${rangeSliderBodyRotationXValue}deg`);
}

// Attach event listener to trigger when slider value changes
rangeSliderRotation.addEventListener('input', setCustomProp)
rangeSliderBodyRotationX.addEventListener('input', setCustomProp)
