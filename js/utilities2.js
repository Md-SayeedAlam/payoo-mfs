function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
}
function getTextFieldById (id){
    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue)
    return textNumber;
}

function showSectionById(id){
    document.getElementById('show-add-money').classList.add('hidden');
    document.getElementById('cash-out').classList.add('hidden');
    document.getElementById('transactions').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}