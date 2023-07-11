// Up Counter
function incrementCounter(blockId) {
    const counterElement = document
      .getElementById(blockId)
      .querySelector('.counter');
    let counterValue = parseInt(counterElement.value);
    counterValue++;
    counterElement.value = counterValue;
    saveCounter(blockId, counterValue);
  };
  
  // Save counter is localStorage
  function saveCounter(blockId, counterValue) {
    localStorage.setItem(blockId, counterValue);
  };
  
  // Give up in counter from localStorage
  function getCounter(blockId) {
    let counterValue = localStorage.getItem(blockId);
    if (counterValue === null) {
      counterValue = 0;
    } else {
      counterValue = parseInt(counterValue);
    }
    return counterValue;
  };
  
  // Setup counter
  function setCounter() {
    const blockId = prompt('Введіть id блоку:');
    const counterValue = parseInt(prompt('Введіть значення лічильника:'));
    const counterElement = document
      .getElementById(blockId)
      ?.querySelector('.counter');
    if (counterElement) {
      counterElement.value = counterValue;
      saveCounter(blockId, counterValue);
    } else {
      alert('Блок з таким id не знайдений.');
    }
  };
  
  // Reset counter
  function clearCounters() {
    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach((counterElement) => {
      const blockId = counterElement.parentNode.id;
      counterElement.value = 0;
      saveCounter(blockId, 0);
    });
  };
  
  // Setup button event
  function setupEventHandlers() {
    const block1Button = document.getElementById('block1').querySelector('.click-button');
    const block2Button = document.getElementById('block2').querySelector('.click-button');
    const clearButton = document.getElementById('clear-button');
    const setButton = document.getElementById('set-button');
  
    block1Button.addEventListener('click', function() {
      incrementCounter('block1');
    });
  
    block2Button.addEventListener('click', function() {
      incrementCounter('block2');
    });
  
    clearButton.addEventListener('click', clearCounters);
    setButton.addEventListener('click', setCounter);
  };
  
  // Start counter from main page
  function start() {
    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach((counterElement) => {
      const blockId = counterElement.parentNode.id;
      const counterValue = getCounter(blockId);
      counterElement.value = counterValue;
    });
  };
  
  
  setupEventHandlers();
  
 
  start();