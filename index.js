let count = 0
let saveTxt = "Previous Entries: "
let countBtn = document.getElementById("count-btn")
let countEl = document.getElementById("count-el")
let saveMsg = document.getElementById("save-msg")

saveMsg.textContent = saveTxt;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    saveTxt = saveTxt + count + " " + "- ";
    saveMsg.textContent = saveTxt;
    count = 0;
}