const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    room: {
        small: 200,
        large: 300,
    },
    apartment: {
        small: 400,
        large: 800
    },
    house: {
        small: 1200,
        large: 2400,
    }
}

// You can change below however you want

const taxAsDecimal = parseInt(tax["913"]) / 100;
const startingAfterTax = salary * (1 - taxAsDecimal)
const rentAmount = rent[lodging][size]
const balance = startingAfterTax - expenses.transport - expenses.food - rentAmount
console.log(balance.toFixed(2))


