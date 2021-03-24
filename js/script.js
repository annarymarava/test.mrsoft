const entry = document.getElementById('entry-field');
const register = document.getElementById('register');
const btnLength = document.getElementById('btn-filter-length');
const btnString = document.getElementById('btn-filter-string');
const dataOutput = document.getElementById('data-output');
const errorMessage = document.getElementById('error-message');


let dataObj = null;
fetch('https://cors-anywhere.herokuapp.com/http://www.mrsoft.by/data.json')
.then(response => response.json())
.then(data => {
    dataObj = data;
})
.catch(error => console.error("Ошибка получение погоды. Причина: " + error));


btnLength.addEventListener('click', function() {
    dataOutput.innerHTML = '';
    if(Number.isInteger(Number(entry.value))) {
        errorMessage.classList.remove('show');
        dataObj.data.forEach(element => {
            if (element.length > entry.value) {
                let string = document.createElement('p');
                string.innerHTML = element;
                dataOutput.append(string);
            } 
        });
    } else {
        errorMessage.classList.add('show');
    }
});

btnString.addEventListener('click', function() {
    dataOutput.innerHTML = '';
    if (register.checked) {
        dataObj.data.forEach(element => {
            if (element.includes(entry.value)) {
                let string = document.createElement('p');
                string.innerHTML = element;
                dataOutput.append(string);
            } 
        });
    } else {
        dataObj.data.forEach(element => {
            if (element.toLowerCase().includes(entry.value.toLowerCase())) {
                let string = document.createElement('p');
                string.innerHTML = element;
                dataOutput.append(string);
            } 
        });
    }
});