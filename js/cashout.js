document.getElementById('btn-cash-out').addEventListener('click',function(event){
event.preventDefault();
const cashOut = getInputFieldValueById('input-cash-out');
const cashOutPin = getInputFieldValueById('input-cash-out-pin')
if(isNaN(cashOut)){
    alert('Failed to cash out');
    return;
}

if(cashOutPin === 1234){
  const balance = getTextFieldById('account-balance');
  if(cashOut>balance){
    alert('You do not have enough money to cashout')
    return;
  }
  const newBalance = balance - cashOut;
  document.getElementById('account-balance').innerText = newBalance;

  const div = document.createElement('div');
  div.classList.add('bg-yellow-300');
  div.innerHTML = `
  <h4 class="text-2xl font-bold">Cash Out</h4>
  <p> ${cashOut} withdraw. New Balance ${newBalance} </p>
  `

  document.getElementById('transaction-container').appendChild(div);
}
else{
    alert('no money for you..DGM')
}

})