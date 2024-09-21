document.getElementById('add-money').addEventListener('click',function(){
    const form = document.getElementById('add-money-form');
    form.classList.remove('hidden');
})

document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();

    const money = document.getElementById('amount').value;
    console.log(money);
    const pin = document.getElementById('pin').value;
    const total = document.getElementById('total-balance').innerText;
    console.log(total);
    if(pin ==="1234"){
        const totalAmount = parseInt(money) + parseInt(total);
        document.getElementById('total-balance').innerText =totalAmount;

    }
    else {
        alert("Invalid pin");
    }
    

})