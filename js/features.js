document.getElementById('show-add-money-form').addEventListener('click',function(){
// const showCashOut = document.getElementById('cash-out')
// const showAddMoney = document.getElementById('show-add-money')
// showCashOut.classList.add('hidden')
// showAddMoney.classList.remove('hidden')

showSectionById('show-add-money');


})
document.getElementById('show-cash-out-form').addEventListener('click',function(){


showSectionById('cash-out');


})
document.getElementById('show-transection-form').addEventListener('click',function(){


showSectionById('transactions');


})