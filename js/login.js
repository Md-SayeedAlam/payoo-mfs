document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()
       
   
       const phoneNumber = document.getElementById('phone-number').value
       const newPhone = parseFloat(phoneNumber);
   
       const pinNumber = document.getElementById('pin-number').value
       const newPin = parseFloat(pinNumber);
   if(newPhone === 5 && newPin === 1234){
       console.log('you are logged in')
       window.location.href='./home.html'
   }
   else{
       alert('Wrong phone number or pin')
   }
   })
   
   