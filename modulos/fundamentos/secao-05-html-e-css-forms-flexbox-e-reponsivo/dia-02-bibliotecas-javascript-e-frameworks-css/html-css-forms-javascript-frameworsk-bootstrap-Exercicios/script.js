const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

const agreementBtn = document.querySelector('#agreement');
agreementBtn.addEventListener('click', () => {
  if (agreementBtn.value === 'on') {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
