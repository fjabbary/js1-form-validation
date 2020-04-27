const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(inputEl, msg) {
    const formControl = inputEl.parentElement
    formControl.className = 'form-control error'
    formControl.querySelector('small').innerText = msg
}

function showSuccess(inputEl) {
    const formControl = inputEl.parentElement
    formControl.className = 'form-control success'
}

function isValidEmail(emailAdress) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailAdress).toLowerCase());
}

function validateInput(arr) {
    arr.forEach(item => {
        if (item.value === '') {
            showError(item, `${getInputName(item)} is required`)
        } else {
            showSuccess(item)
        }
    })
}

function getInputName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, input.id + ' must be at least ' + min + ' characters')
    } else if (input.value.length > max) {
        showError(input, input.id + ' must be less than ' + max + ' characters')
    }
}

function comparePassword(inp1, inp2) {
    if (inp1.value !== inp2.value) {
        showError(inp2, 'Password do not match')
    }
}

//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    validateInput([username, email, password, password2])
    checkLength(username, 3, 20);
    checkLength(password, 6, 20);

    comparePassword(password, password2)
})