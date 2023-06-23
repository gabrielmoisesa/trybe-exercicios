import "./style.css"
import validator from "validator";

const inputText = document.getElementById('inputText');
const submitBtn = document.querySelector('button');
const optSelected = document.querySelector('#option')
const result = document.getElementById('result');

submitBtn.addEventListener('click', () => {
    event.preventDefault();
    const validators = {
        cpf: validator.isTaxID(inputText.value, 'pt-BR'),
        email: validator.isEmail(inputText.value),
        url: validator.isURL(inputText.value),
        lowercase: validator.isLowercase(inputText.value),
        number: validator.isMobilePhone(inputText.value, "pt-BR")
    };
    result.innerHTML = `A validação retornou ${validators[optSelected.value]}`;
});