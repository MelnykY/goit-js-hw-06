const formBtnElement = document.querySelector(".login-form");

const actionSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill out all fields");
  }
  const form = {
    email: email.value,
    password: password.value,
  };
  console.log(form);

  event.currentTarget.reset();
};

formBtnElement.addEventListener("submit", actionSubmit);
