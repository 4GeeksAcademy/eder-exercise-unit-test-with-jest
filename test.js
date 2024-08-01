test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test('1.07 Dollar is equivalent to 156.5 Yen', () => {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    //Use the function as expected
    const yens = fromDollarToYen(20);

    // If 20 dollar should be (20 * 156.5)/1.06
    const expected = (20 * 156.5) / 1.06

    //Unit test comparison
    expect(fromDollarToYen(20)).toBe(2925.234);
})

test('156.5 Yen is equivalent to 0.87 Pounds', () => {

    //Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    //Use the function as expected
    const pounds = fromYenToPound(50);

    // if 50 Yens should be ( 50 * 0.87) / 156.5
    const expected = (50 * 0.87) * 156.5

    //Unit test comparison 
    expect(fromYenToPound(50)).toBe(0.278);


})