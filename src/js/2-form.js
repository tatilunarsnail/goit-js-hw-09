const formData = {
    email: "", 
    message: ""
}

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedData = localStorage.getItem(localStorageKey);
const parsedData = JSON.parse(savedData);
form.elements.email.value = parsedData.email ?? "";
form.elements.message.value = parsedData.message ?? "";


form.addEventListener("input", (evt) => {
    formData.email = evt.target.elements.email.value;
    formData.message = evt.target.elements.message.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });

form.addEventListener("submit", (evt) => {
    if(formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }

    evt.preventDefault();
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    form.reset();
  });
