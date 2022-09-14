//!Variables
const selection = document.querySelector("#selection");
const usance = document.querySelector("#usance");
const amount = document.getElementById("amount");
const calcBtn = document.querySelector(".btn");
const results = document.querySelector(".results");

let interest = 0;
let payment = 0;

calcBtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    
     if(selection.value === "" || usance.value === ""  || amount.value ===""){
        alert("Please fill the areas")
     }else{
         if (selection.value === "house-loan") {
           interest = 0.89 ;
         } else if (selection.value === "consumer-loan") {
           interest = 1.19;
         } else if (selection.value === "auto-loan") {
           interest = 1.09;
         }

         payment =
           (+amount.value * ((interest/100) * (1 + interest/100) ** +usance.value)) /
           ((1 + interest/100) ** +usance.value - 1);

         results.innerHTML = `
        <h2 class="mt-3 text-info">Credit Informations</h2>
        <table class="table table-bordered border-info  mt-4">
            <tbody>
                <tr>
                <th>Credit Amount</th>
                <td>${amount.value}$</td>
                <th>Credit Type</th>
                <td>${selection.value}</td>
                </tr>
                <tr>
                <th>Usance</th>
                <td>${usance.value}</td>
                <th>Interest Rate</th>
                <td>${interest}</td>
                </tr>
                <tr>
                <th>Total Payment</th>
                <td>${Number((payment * +usance.value).toFixed(2))}$</td>
                <th>Monthly Payment</th>
                <td>${+payment.toFixed(2)}$</td>
                </tr>
            </tbody>
        </table>
    `;
   }  
   
});
