document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    let result;

    if (unitSelect === 'C') {
        // Convert Celsius to Fahrenheit
        result = (tempInput * 9/5) + 32;
        document.getElementById('result').innerText = `${tempInput} °C is ${result.toFixed(2)} °F`;
    } else {
        // Convert Fahrenheit to Celsius
        result = (tempInput - 32) * 5/9;
        document.getElementById('result').innerText = `${tempInput} °F is ${result.toFixed(2)} °C`;
    }
});