

const formEl = document.querySelector(".login-form")

function onSubmit(event) {
  event.preventDefault();
  const userEmail = event.currentTarget.elements.email.value.trim();
  const userPassword = event.currentTarget.elements.password.value.trim()


  if (!userEmail || !userPassword) return alert('Усі поля обов`язкові для заповнення')
  const newUser = {
    id: uid(),
    email: userEmail,
    password: userPassword,
  }
  console.log(newUser);
  formEl.reset();
}

formEl.addEventListener('submit', onSubmit);

function uid() {
  return Math.random().toString(36).substr(2, 9)
}