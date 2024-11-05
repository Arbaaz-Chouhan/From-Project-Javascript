const form = document.getElementById("my-form");
const customIframe = document.getElementById("custom-iframe");
const save = document.getElementById("save");

// form fields
const formName = document.getElementById("form-name");
const formAge = document.getElementById("form-age");
const formAdress = document.getElementById("form-address");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        userName: formName.value,
        userAge: formAge.value,
        userAdress: formAdress.value,
    }

    addEntris(data);
    console.log(data);
    formName.value = "";
    formAge.value = "";
    formAdress.value = "";
})


function addEntris(data) {
    const tr = cureantElement('tr');
    const userName = cureantElement('td');
    const userAge = cureantElement('td');
    const userAdress = cureantElement('td');

    userName.innerText = data.userName;
    userAge.innerText = data.userAge;
    userAdress.innerText = data.userAdress;

    tr.append(userName, userAge, userAdress);
    const table = customIframe.children[0];
    table.append(tr);

    //  data = {}


}

function cureantElement(name) {
    const ele = document.createElement(name);
    return ele;
}