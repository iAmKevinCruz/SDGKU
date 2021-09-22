function calculate(){
    //Prompt Var
    var productName=prompt(`Enter Product Name`);
    var quantity=prompt(`How many ${productName}'s do you intend to purchase? (Please enter numbers only with no spaces)`);
    var cost=prompt(`How much does a ${productName} cost at retail value? (Please enter numbers only with no spaces)`);
    //Calculation Var
    var total=Number(cost) * Number(quantity);
    var totalTaxes=total * 1.07;
    //Result
    alert(`Here are your calculations :D
        Product Name: ${productName}
        Quantity: ${quantity}
        Total Cost (including taxes): $${totalTaxes}
    `)
    console.log(`Here are your calculations :D
        Product Name: ${productName}
        Quantity: ${quantity}
        Total Cost (including taxes): $${totalTaxes}
    `);
}
