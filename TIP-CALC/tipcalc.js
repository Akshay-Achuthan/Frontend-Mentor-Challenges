const billInput = document.querySelector(".bill-input");
const noOfPeople = document.querySelector(".people-input");
const tip = Array.from(document.querySelectorAll(".tip"));
const tipAmt = document.querySelector(".tip-amt");
const tipTotal = document.querySelector(".tip-person");
const resetBtn = document.querySelector(".reset-btn");

let tipSelectedByUser;
let tipAmountPerPerson;
let totalAmountPerPerson;
let billAmt;
let totalPerson;

billInput.addEventListener("input", () => {
  billAmt = Number(billInput.value);
})

noOfPeople.addEventListener("input", () => {
  totalPerson = Number(noOfPeople.value);
})

tip.map(el => {
  el.addEventListener("click",selectedTip);
})

resetBtn.addEventListener("click", resetValues);

function selectedTip(event){
  tipSelectedByUser = Number(event.target.value);
  calculateTip(billAmt,totalPerson,tipSelectedByUser);
};

function calculateTip(billAmt,nop,tip){
  // console.log(billAmt,nop,tip);

  // per person tip amount calc
  tipAmountPerPerson = (((billAmt * tip ) / 100) / nop);
  tipAmt.innerText = "$" + tipAmountPerPerson.toFixed(2);
  
  // per person total amount calc
  totalAmountPerPerson = (billAmt/nop) + tipAmountPerPerson;
  tipTotal.innerText = "$" + totalAmountPerPerson.toFixed(2);
}

function resetValues(){
  billInput.value = "";
  noOfPeople.value="";
  tipAmt.innerText="$0.00";
  tipTotal.innerText="$0.00";
}