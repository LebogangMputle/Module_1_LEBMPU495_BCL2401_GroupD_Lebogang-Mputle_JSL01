 // Get input value from an HTML element with id "petInput"
  function validateSyntax() {
    let input = document.getElementById("petInput").value;
    let result = ""; // Placeholder for validation result
  
    // Check if input starts with 'pet_' and followed by (d+ which is the numeric symbol) then alphabetic characters ranging from a-z in small and capital letters.
    if (/^pet_\d+[a-zA-Z]+$/.test(input)) {
      result = "Valid Syntax 🟢"; //if the correct input is inserted, this is the resulting message with a green dot emoji.
    } else {
      result = "Invalid Syntax 🔴";  //or else the incorrect input is inserted, this is the resulting message with a red dot emoji.
    }
  
    // Display validation result on HTML element with id "result"
    document.getElementById("result").innerText = result;
  }