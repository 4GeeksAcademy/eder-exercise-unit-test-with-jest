// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

console.log(oneEuroIs.JPY);

const fromDollarToYen = (dollars) => {
    let result = (parseFloat(dollars) * oneEuroIs.JPY) / oneEuroIs.USD
    return parseFloat(result.toFixed(3));


}

const fromEuroToDollar = (euros) => {
    let result = parseFloat(euros) * oneEuroIs.USD 
    return parseFloat(result.toFixed(3));
}

const fromYenToPound = (yens) => {
    let result = (parseFloat(yens) * oneEuroIs.GBP) / oneEuroIs.JPY
    return parseFloat(result.toFixed(3));
}


// Just a console log for ourselves

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};