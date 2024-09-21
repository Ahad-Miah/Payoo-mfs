document.getElementById('cash-out').addEventListener('click',function(){
    const form = document.getElementById('cash-out-form');
    form.classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transaction-container').classList.add("hidden");
})


document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();

    const money = document.getElementById('amount-out').value;
    // console.log(money);
    const pin = document.getElementById('pin-out').value;
    const total = document.getElementById('total-balance').innerText;
    // console.log(total);
    if(pin ==="1234"){
        if( total >= money){
            const totalAmount =parseInt(total) -parseInt(money);
            document.getElementById('total-balance').innerText =totalAmount;
            const p = document.createElement('p');
            p.classList.add("text-center");
            p.innerText = `Withdraw ${money}  New balance ${totalAmount}
            `;
            document.getElementById('transaction-container').appendChild(p);
            document.getElementById('transaction-text').classList.add("hidden");
             
    
        }
        else{
            alert("Insufficient Balance");
        }
        
    }
    else {
        alert("Invalid pin");
    }
    

})