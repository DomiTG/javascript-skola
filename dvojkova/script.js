document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");
    const numberInput = document.getElementById("numberInput");
    const result = document.getElementById("result");
    convertButton.addEventListener("click", function() {
      const inputNumber = Number(numberInput.value);
      if (!isNaN(inputNumber)) {
        const binaryNumber = inputNumber.toString(2);
        result.textContent = `Dvojková reprezentace čísla ${inputNumber} je: ${binaryNumber}`;
      } else {
        result.textContent = "Neplatné číslo. Zadejte platné číslo.";
      }
    });
  });