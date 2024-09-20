document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    // const addMoney = document.getElementById('input-add-money');
    // const addMoneyNumber = parseFloat(addMoney);

//    getInputFieldValuebyId();
// const addMoney = getInputFieldValuebyId();
// console.log('add money value', addMoney)

const addMoney = getInputFieldValuebyId('input-add-money');
const pinNumber = getInputFieldValuebyId('input-pin-number');
console.log('add mopney & pin number',addMoney,pinNumber)

});