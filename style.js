// parseFloat() ek function hai jo kisi bhi string ko number mein convert karta hai. Agar string mein decimal numbers hain, toh yeh unhe bhi number mein convert kar deta hai.



function addNumbers() {
    // Get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    
    // Check if the inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        document.getElementById('result').textContent = result;
    } else {
        alert('Please enter valid numbers!');
    }
}




