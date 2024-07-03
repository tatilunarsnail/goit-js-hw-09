const formData = {
    email: "", 
    message: ""
}

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedData = localStorage.getItem(localStorageKey);
const parsedData = JSON.parse(savedData);
if(parsedData) {
  form.elements.email.value = parsedData.email ?? "";
  form.elements.message.value = parsedData.message ?? "";
  formData.email = parsedData.email;
  formData.message = parsedData.message;
}


form.addEventListener("input", (evt) => {
    formData.email = evt.target.elements.email.value.trim();
    formData.message = evt.target.elements.message.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if(form.elements.email.value === "" || form.elements.message.value === "") {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    form.reset();
  });
