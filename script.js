let inputValueE1 = document.getElementById("inputValue");
let saveBtnE1 = document.getElementById("saveButton");
let resetBtnE1 = document.getElementById("resetButton");
let nameE1 = document.getElementById("name");

nameE1.textContent = "Varun";
nameE1.textContent = localStorage.getItem("name", inputValueE1.value);

let storeValue = localStorage.setItem("name", inputValueE1.value);
saveBtnE1.onclick = function(){
    nameE1.textContent  = inputValueE1.value;
    let storeValue = localStorage.setItem("name", inputValueE1.value);
};


resetBtnE1.onclick = function(){
    localStorage.removeItem("name");
    nameE1.textContent = "Varun";
};