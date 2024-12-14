document.addEventListener("DOMContentLoaded", function() {
    const animatedText = document.querySelector('.animated-text');
    const text = animatedText.textContent; // Get the text content
    let spanText = ''; // Initialize a variable to hold the wrapped text
  
    // Loop through each character and wrap it in a <span> tag with a custom CSS variable for delay
    for (let i = 0; i < text.length; i++) {
      spanText += `<span style="--i:${i}">${text[i]}</span>`;
    }
  
    // Set the inner HTML of the animated text to the wrapped text
    animatedText.innerHTML = spanText;
  });
  
  