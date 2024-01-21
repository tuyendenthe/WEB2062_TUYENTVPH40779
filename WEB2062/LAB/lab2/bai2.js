function convertAndDisplay() {
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');
    const outputDiv = document.getElementById('output');
  
    lines.forEach(line => {
      const words = line.split('_');
      const camelCaseWords = words.map((word, index) => index === 0 ? word.toLowerCase() : capitalize(word));
  
      const camelCaseText = camelCaseWords.join('');
      const tickMarks = '✅'.repeat(camelCaseWords.length);
      
      outputDiv.innerHTML += `${camelCaseText} ${tickMarks}<br>`;
    });
  }
  
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  