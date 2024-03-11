const billInput = document.querySelector(".bill-input");
const noOfPeople = document.querySelector(".people-input");
const tip = Array.from(document.querySelectorAll(".tip"));
const tipAmt = document.querySelector(".tip-amt");
const tipTotal = document.querySelector(".tip-person");
const resetBtn = document.querySelector(".reset-btn");
const tipInput = document.querySelector(".tip-input");
var errorBill = document.querySelector('.error-msg-bill');
var errorPeople = document.querySelector('.error-msg-people');

let tipSelectedByUser;
let tipAmountPerPerson;
let totalAmountPerPerson;
let billAmt;
let totalPerson;
let customTip;

billInput.addEventListener("blur", () => {
  billAmt = Number(billInput.value);
  inputValidation("bill");
})

noOfPeople.addEventListener("blur", () => {
  totalPerson = Number(noOfPeople.value);
  inputValidation("person");
})

tipInput.addEventListener("blur", () => {
  customTip = Number(tipInput.value);
  selectedTip();
})

tip.map(el => {
  el.addEventListener("click",selectedTip);
})

resetBtn.addEventListener("click", resetValues);

function selectedTip(event){
  
  tip.map(el => {
    el.addEventListener("click",selectedTip);
    el.classList.remove('active-tip');
  })
  
  event.target.classList.add('active-tip');
  
  if(tipSelectedByUser !== 0 && event){
    console.log(event)
    tipSelectedByUser = Number(event.target.value);
    calculateTip(billAmt,totalPerson,tipSelectedByUser);
  }else{
    calculateTip(billAmt,totalPerson,customTip);
  }
};

function inputValidation(val){
  if(val === "bill"){
    if(billInput.value === ""){
      errorBill.innerText = "Can't be empty"
      errorBill.style.display = "flex";
      billInput.style.border = "2px solid var(--red)"
    } else if(billAmt === 0){
      errorBill.innerText = "Can't be zero"
      errorBill.style.display = "flex";
      billInput.style.border = "2px solid var(--red)"
    }else{
      errorBill.style.display = "none";
      billInput.style.border = "2px solid var(--cyan-strong)"
    }
  }else{
    if(noOfPeople.value === ""){
      errorPeople.innerText = "Can't be empty"
      errorPeople.style.display = "flex";
      noOfPeople.style.border = "2px solid var(--red)"
    } else if(totalPerson === 0){
      errorPeople.innerText = "Can't be zero"
      errorPeople.style.display = "flex";
      noOfPeople.style.border = "2px solid var(--red)"
    }else{
      errorPeople.style.display = "none";
      noOfPeople.style.border = "2px solid var(--cyan-strong)"
    }
  }
}

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