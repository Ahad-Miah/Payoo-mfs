document.getElementById('transactions').addEventListener('click',function(){
    console.log("transactionsss....");
    const form = document.getElementById('cash-out-form');
    form.classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transaction-container').classList.remove("hidden");
})