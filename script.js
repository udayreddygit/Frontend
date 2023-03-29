
convertFrom = document.getElementById('u1');
convertTo = document.getElementById('u2');
valueInput = document.getElementById('ip1');
result = document.getElementById('result');
function generate() {
    if(convertFrom.value == 'Celsius') {
        convertTo.innerHTML = '<label class="mr-sm-2" for="inlineFormCustomSelect">Convert To(Units)</label><option value="NONE">Select One</option> <select id="u2" class="form-control"><option value="Fahrenheit">Fahrenheit</option> <option value="Kelvin">Kelvin</option> </select>'
    } else if(convertFrom.value == 'Fahrenheit') {
        convertTo.innerHTML = '<label class="mr-sm-2" for="inlineFormCustomSelect">Convert To(Units)</label><option value="NONE">Select One</option> <select id="u2" class="form-control"> <option value="Celsius">Celsius</option> <option value="Kelvin">Kelvin</option> </select>'
    } else if(convertFrom.value == 'Kelvin') {
        convertTo.innerHTML = '<label class="mr-sm-2" for="inlineFormCustomSelect">Convert To(Units)</label><option value="NONE">Select One</option> <select id="u2" class="form-control"> <option value="Celsius">Celsius</option> <option value="Fahrenheit">Fahrenheit</option></select>'
    }
    if(convertFrom.value != 'NONE')
        valueInput.placeholder = ('Enter the value in ' + convertFrom.value);
    else
        valueInput.placeholder = 'Enter the value'
}
function convert() {
    if(convertTo.value == 'NONE' || convertFrom.value == 'NONE') {
      alert('Please select valid options for the unit dropdowns');
      return;
    }
    if(convertFrom.value == convertTo.value) {
        alert('Invalid');
        return;
    }
    fv = parseFloat(valueInput.value);
    convertedVal = 0;
    if(convertFrom.value == 'Celsius') {
        if(convertTo.value == 'Fahrenheit') {
            convertedVal = (fv * 1.8) + 32;
            
        } else if(convertTo.value == 'Kelvin') {
            convertedVal = (fv + 273.15);
        }
    } else if(convertFrom.value == 'Fahrenheit') {
        if(convertTo.value == 'Celsius') {
            convertedVal = fv;
            convertedVal -= 32;
            convertedVal *= 5;
            convertedVal /= 9;
        } else if(convertTo.value == 'Kelvin') {
            convertedVal = fv;
            convertedVal -= 32;
            convertedVal *= 5;
            convertedVal /= 9;
            convertedVal += 273.15;
        }
    } else if(convertFrom.value == 'Kelvin') {
        if(convertTo.value == 'Celsius') {
            convertedVal = fv;
            convertedVal -= 273.15;
        } else if(convertTo.value == 'Fahrenheit') {
            convertedVal = fv;
            convertedVal -= 273.15;
            convertedVal = (convertedVal * 1.8) + 32;
        }
    }
    result.innerHTML = (convertedVal) + ' ';
    if(convertTo.value == 'Celsius') {
      result.innerHTML += '°C';
    } else if(convertTo.value == 'Fahrenheit') {
      result.innerHTML += '°F';
    } else {
      result.innerHTML += 'K';
    }
}