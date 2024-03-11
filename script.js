/*function validateSyntax() {
    let input = document.getElementById("petInput").value;
    let result = ""; // Placeholder for validation result
  
    // Check if input starts with 'pet' and followed by alphanumeric characters
    if (/^pet\d+[a-zA-Z]+$/.test(input)) {
      result = "Valid Syntax";
    } else {
      result = "Invalid Syntax";
    }
  
    document.getElementById("result").innerText = result;
  }*/

  function validateSyntax() {
    let input = document.getElementById("petInput").value;
    let result = ""; // Placeholder for validation result
  
    // Check if input starts with 'pet' and followed by alphanumeric characters
    if (/^pet_\d+[a-zA-Z]+$/.test(input)) {
      result = "Valid Syntax 🟢";
    } else {
      result = "Invalid Syntax 🔴";
    }
  
    document.getElementById("result").innerText = result;
  }