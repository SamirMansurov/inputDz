
function validateForm(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    const isPhoneValid = validatePhoneNumber(phoneNumber);
    const isEmailValid = validateEmail(email);
    const isFirstNameValid = validateName(firstName);
    const isLastNameValid = validateName(lastName);

    if (isPhoneValid && isEmailValid && isFirstNameValid && isLastNameValid) {
        alert("Все данные корректны!");
        
    } else {
        alert("Пожалуйста, проверьте введенные данные.");
    }
}

function validatePhoneNumber(phoneNumber) {
    const phonePattern = /^\+?\d{10,15}$/;
    return phonePattern.test(phoneNumber);
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validateName(name) {
    const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s-]{1,50}$/;
    return namePattern.test(name);
}
