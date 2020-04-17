changeColor = (className) => {
    let body = document.querySelector('body');
    body.className = '';
    body.classList.add(className);
  }