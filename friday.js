function convertCurrency(amount, sCurrency, tCurrency) {
   
    const exchangeRates = {
        USD: 1,
        RWF: 1000,
    };

    const sRate = exchangeRates[sCurrency];
    const tRate = exchangeRates[tCurrency];

    if (sRate && tRate) {
        const convertedAmount = (amount / sRate) * tRate;
        return convertedAmount.toFixed(2);
    } else {
        return "Invalid source or target currency.";
    }
}

const amount = 100;
const sCurrency = "USD";
const tCurrency = "RWF";

const result = convertCurrency(amount, sCurrency, tCurrency);
console.log(`${amount} ${sCurrency} is equal to ${result} ${tCurrency}`);
