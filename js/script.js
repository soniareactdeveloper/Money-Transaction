let login                     = document.querySelector('#login')
let home                      = document.querySelector('#home')
let error                     = document.querySelector('.error')
let accountInput              = document.querySelector('.accountInput')
let pinInput                  = document.querySelector('.pinInput')
let logBtn                    = document.querySelector('.logBtn')
let forgot                    = document.querySelector('.forgot')
let forget                    = document.querySelector('#forget')
let resetBtn                  = document.querySelector('.resetBtn')
let balanceInput              = document.querySelector('.balanceInput')
let homeIcon                  = document.querySelector('.homeIcon')
let history                   = document.querySelector('#history')
let historyBtn                = document.querySelector('.historyBtn ')
let features                  = document.querySelector('.features')
let addMoney                  = document.querySelector('.addMoney')
let addMoneyContent           = document.querySelector('.addMoneyContent')
let addMoneyInput             = document.querySelector('.addMoneyInput')
let addMoneyBtn               = document.querySelector('.addMoneyBtn')
let addGoBack                 = document.querySelector('.addGoBack')
let moneyError                = document.querySelector('.moneyError')
let recharge                  = document.querySelector('.recharge')
let RechargeError             = document.querySelector('.Rechargeerror')
let RError                    = document.querySelector('.Rerror')
let rechargeContent           = document.querySelector('.rechargeContent')
let rechargeInput             = document.querySelector('.rechargeInput')
let rechargeAmount            = document.querySelector('.rechargeAmount')
let rechargeBtn               = document.querySelector('.rechargeBtn')
let rechargeGoBack            = document.querySelector('.rechargeGoBack')
let cashOut                   = document.querySelector('.cashOut')
let cashOuterror              = document.querySelector('.cashOuterror')
let cashOutContent            = document.querySelector('.cashOutContent')
let cashOutInput              = document.querySelector('.cashOutInput')
let cashOutAmount             = document.querySelector('.cashOutAmount')
let cashOutBtn                = document.querySelector('.cashOutBtn')
let cashGoBack                = document.querySelector('.cashGoBack')
let sendMoney                 = document.querySelector('.sendMoney')
let sendError                 = document.querySelector('.sendError')
let sendMoneyContent          = document.querySelector('.sendMoneyContent')
let sendMoneyInput            = document.querySelector('.sendMoneyInput')
let sendMoneyAmount           = document.querySelector('.sendMoneyAmount')
let sendMoneyBtn              = document.querySelector('.sendMoneyBtn')
let sendGoBack                = document.querySelector('.sendGoBack')
let payBill                   = document.querySelector('.payBill')
let billError                 = document.querySelector('.billError')
let payBillContent            = document.querySelector('.payBillContent')
let payBillInput              = document.querySelector('.payBillInput')
let payBillAmount             = document.querySelector('.payBillAmount')
let payBillBtn                = document.querySelector('.payBillBtn')
let payGoBack                 = document.querySelector('.payGoBack')
let payment                   = document.querySelector('.payment')
let paymentError              = document.querySelector('.paymentError')
let paymentContent            = document.querySelector('.paymentContent')
let paymentInput              = document.querySelector('.paymentInput')
let paymentAmount             = document.querySelector('.paymentAmount')
let paymentBtn                = document.querySelector('.paymentBtn')
let paymentGoBack             = document.querySelector('.paymentGoBack')
let saving                    = document.querySelector('.saving')
let savingError               = document.querySelector('.savingError')
let savingContent             = document.querySelector('.savingContent')
let savingAmount              = document.querySelector('.savingAmount')
let savingBtn                 = document.querySelector('.savingBtn')
let savingGoBack              = document.querySelector('.savingGoBack')
let loan                      = document.querySelector('.loan')
let loanContent               = document.querySelector('.loanContent')
let loanBtn                   = document.querySelector('.loanBtn')
let transactionList           = document.querySelector('.transactionList');
let currentBalance            = 0; 


// logIn part start
logBtn.addEventListener('click', ()=>{
  if(accountInput.value == ''){
    error.innerHTML = "enter account number"

  }else if (accountInput.value !== "12345678") {
    error.innerHTML        = "Wrong,Try again!";
    accountInput.value     = '';

  }else {
    if(pinInput.value == ''){
      error.innerHTML = "enter cashoo pin"

    }else if (pinInput.value !== "2222") {
      error.innerHTML        = "Wrong pin,Try again!";
      pinInput.value         = '';

    }else {
      login.style = "display:none;" 
      home.style  = "display:flex;"
    }
  }
})


// forget password part 
forgot.addEventListener('click', ()=>{
  login.style = "display:none;" 
  forget.style = "display:flex;"

  resetBtn.addEventListener('click', ()=>{
    login.style = "display:flex;" 
    forget.style = "display:none;"
  })
})


// Log the transaction to the history
function moneyHistory(type, amount) {
  // create element
  let listItem = document.createElement('li');

  // create append child
  transactionList.appendChild(listItem);

  // add content 
  listItem.textContent = `${type}: $${amount.toFixed(2)}`;
  listItem.style       = "margin-top: 20px; color:#141E46; font-size:24px;"

}


// add money content 
addMoney.addEventListener('click', ()=>{
  features.style        = "display:none;"
  addMoneyContent.style = "display:block;"

    // addGoBack
    addGoBack.addEventListener('click', ()=>{
      features.style           = "display:flex;"
      addMoneyContent.style    = "display:none;";
    })

    // add money part start
    addMoneyBtn.addEventListener('click' , ()=>{
      let addAmount = parseFloat(addMoneyInput.value);

      if (isNaN(addAmount) || addAmount <= 0) {
        moneyError.innerHTML = "Enter a valid amount";

      } else {
        currentBalance          += addAmount;
        balanceInput.innerHTML   = currentBalance.toFixed(2);
        addMoneyInput.value      = ''; 
        moneyError.innerHTML     = '';
        moneyHistory('Add Money', addAmount);
        features.style           = "visibility:visible;"
        addMoneyContent.style    = "display:none;";
      }
    })
})


// recharge part start here 
recharge.addEventListener('click', ()=>{
  login.style           = "display:none;"
  features.style        = "display:none;"
  rechargeContent.style = "display:block"

  //rechargeGoBack
  rechargeGoBack.addEventListener('click', ()=>{
     features.style           = "display:flex;"
     rechargeContent.style    = "display:none;";
  })

  // recharger function start
  rechargeBtn.addEventListener('click', ()=>{
    let rechargeQuantity = parseFloat(rechargeAmount.value)

    if(rechargeInput.value == ''){
      RechargeError.innerHTML = "Enter Phone Number";
   
    }else if(rechargeInput.value.length > 11){
      RechargeError.innerHTML = "Enter a valid Phone Number";

    } else {
      if(isNaN( rechargeQuantity) ||  rechargeQuantity <= 0){
        RechargeError.innerHTML = "Enter a valid amount";

      }else {
        if(currentBalance < rechargeQuantity){
          RechargeError.innerHTML = "Insufficient balance";

        }else {
          currentBalance          -= rechargeQuantity;
          balanceInput.innerHTML   = currentBalance.toFixed(2);
          moneyHistory('Recharge', rechargeQuantity);
          rechargeAmount.value     = ''; 
          RechargeError.innerHTML  = '';
          features.style           = "visibility:visible;"
          rechargeContent.style    = "display:none;"
        }
      }
    }
  })
})


// cash out part 
cashOut.addEventListener('click', ()=>{
  features.style        = "display:none;"
  cashOutContent.style  = "display:flex;"

 //cashGoBack
  cashGoBack.addEventListener('click', ()=>{
    features.style           = "display:flex;"
    cashOutContent.style     = "display:none;";
  })

 //cash out function
 cashOutBtn.addEventListener('click', ()=>{
    let cashOutQuantity = parseFloat(cashOutAmount.value)

    if(cashOutInput.value == ''){
      cashOuterror.innerHTML = "Enter Phone Number";

    }else if (cashOutInput.value.length > 11){
      cashOuterror.innerHTML = "Enter a valid Phone Number";

    }else {

      if(isNaN(cashOutQuantity) ||  cashOutQuantity <= 0){
        cashOuterror.innerHTML = "Enter a valid Amount";

      }else {
        if(currentBalance < cashOutQuantity){
          cashOuterror.innerHTML = "Insufficient balance";
  
        }else {
          currentBalance          -= cashOutQuantity;
          balanceInput.innerHTML   = currentBalance.toFixed(2);
          moneyHistory('cashOut', cashOutQuantity);
          cashOutAmount.value      = ''; 
          cashOuterror.innerHTML   = '';
          features.style           = "visibility:visible;"
          cashOutContent.style     = "display:none;";
        }
      }
    }
  })
})


// send money part 
sendMoney.addEventListener('click', ()=>{
  features.style          = "display:none;"
  sendMoneyContent.style  = "display:flex;"


   // sendGoBack
   sendGoBack.addEventListener('click', ()=>{
      features.style           = "display:flex;"
      sendMoneyContent.style   = "display:none;";
   })

    // send money function start 
    sendMoneyBtn.addEventListener('click', ()=>{
      let sendMoneyQuantity = parseFloat(sendMoneyAmount.value)

      if(sendMoneyInput.value == ''){
        sendError.innerHTML = "Enter Phone Number";
  
      }else if (sendMoneyInput.value.length > 11) {
        sendError.innerHTML = "Enter a valid Phone Number";

      }else {

        if(isNaN(sendMoneyQuantity) ||  sendMoneyQuantity <= 0){
          sendError.innerHTML = "Enter a valid Amount";

        }else {
          if(currentBalance < sendMoneyQuantity){
            sendError.innerHTML = "Insufficient balance";
    
          }else {
            currentBalance          -= sendMoneyQuantity;
            balanceInput.innerHTML   = currentBalance.toFixed(2);
            moneyHistory('Send Money', sendMoneyQuantity);
            sendMoneyAmount.value    = ''; 
            sendError.innerHTML      = '';
            features.style           = "visibility:visible;"
            sendMoneyContent.style   = "display:none;";
          }
        }
      }
    })
})


//Pay bill part
payBill.addEventListener('click', ()=>{
  features.style          = "display:none;"
  payBillContent.style    = "display:flex;"

  
  //payGoBack
  payGoBack.addEventListener('click', ()=>{
     features.style           = "display:flex;"
     payBillContent.style     = "display:none;";
  })

  // pay bill function start 
  payBillBtn.addEventListener('click', ()=>{
    let payBillQuantity = parseFloat(payBillAmount.value)

    if(payBillInput.value == ''){
      billError.innerHTML = "Enter Phone Number";
  
    }else if (payBillInput.value.length > 11){
      billError.innerHTML = "Enter a Valid Phone Number";
    }
    else {
       if(isNaN(payBillQuantity) ||  payBillQuantity <= 0){
        billError.innerHTML = "Enter a valid Amount";

       }else {
        if(currentBalance <  payBillQuantity){
          billError.innerHTML = "Insufficient balance";
    
         }else {
          currentBalance          -= payBillQuantity;
          balanceInput.innerHTML   = currentBalance.toFixed(2);
          moneyHistory('pay', payBillQuantity);
          payBillInput.value       = ''; 
          billError.innerHTML      = '';
          features.style           = "visibility:visible;"
          payBillContent.style     = "display:none;";
         }
       }
    }
  })
})


// payment part 
payment.addEventListener('click', ()=>{
  features.style          = "display:none;"
  paymentContent.style    = "display:flex;"


  //paymentGoBack
  paymentGoBack.addEventListener('click', ()=>{
    features.style           = "display:flex;"
    paymentContent.style     = "display:none;";
  })

  // pay bill function start 
  paymentBtn.addEventListener('click', ()=>{
    let paymentQuantity = parseFloat(paymentAmount.value)

    if(paymentInput.value == ''){
      paymentError.innerHTML = "Enter Phone Number";
  
    }else if (paymentInput.value.length > 11){
      paymentError.innerHTML = "Enter a valid Phone Number";
    }else {
       if(isNaN(paymentQuantity) ||  paymentQuantity <= 0){
        paymentError.innerHTML = "Enter a valid Amount";

       }else {
        if(currentBalance <  paymentQuantity){
          paymentError.innerHTML = "Insufficient balance";
    
         }else {
          currentBalance          -= paymentQuantity;
          balanceInput.innerHTML   = currentBalance.toFixed(2);
          moneyHistory('payment', paymentQuantity);
          paymentInput.value       = ''; 
          paymentError.innerHTML   = '';
          features.style           = "visibility:visible;"
          paymentContent.style     = "display:none;";
         }
      }
    }
  })
})


// saving part 
saving.addEventListener('click', ()=>{
  features.style          = "display:none;"
  savingContent.style     = "display:flex;"
  

  // savingGoBack
  savingGoBack.addEventListener('click', ()=>{
     features.style           = "display:flex;"
     savingContent.style      = "display:none;";
  })

  // saving function
  savingBtn.addEventListener('click', ()=>{
    let savingQuantity = parseFloat(savingAmount.value)

  if(isNaN(savingQuantity) ||  savingQuantity  <= 0){
    savingError.innerHTML = 'Enter a valid Amount'

  }else {
    if(currentBalance <  savingQuantity){
      savingError.innerHTML = "Insufficient balance";

     }else {
      currentBalance          -= savingQuantity;
      balanceInput.innerHTML   = currentBalance.toFixed(2);
      moneyHistory('save', savingQuantity);
      savingError.innerHTML    = '';
      features.style           = "visibility:visible;"
      savingContent.style      = "display:none;";
     }
  }
  })
})


// loan part 
loan.addEventListener('click', ()=>{
  features.style          = "display:none;"
  loanContent.style       = "display:flex;"

  loanBtn.addEventListener('click', ()=>{
    features.style          = "display:flex;"
    loanContent.style       = "display:none;"
  })
})



// history part 
homeIcon.addEventListener('click', ()=>{
  history.style = "display:block;"

  historyBtn.addEventListener('click', ()=>{
    history.style = "display:none;"
  })
})



// slider part start 
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
});