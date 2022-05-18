

// const emptyString = []

// console.log(emptyString)


// const arrayWith5Element = [1,'asd',5,'hhh',123]
// console.log(arrayWith5Element)
// console.log(`Length of above array is ${arrayWith5Element.length}`)
// middleOfArray = Math.round(arrayWith5Element.length/2)
// lastOfArray = arrayWith5Element.length-1
// console.log(`First Item is ${arrayWith5Element[0]} and Middle Item is ${arrayWith5Element[middleOfArray]} 
// and the last Item is ${arrayWith5Element[lastOfArray]}`)




// companyNames = ['Facebook', 'Google','Microsoft','Apple','IBM','Oracle','Amazon']
// lastIndex = companyNames.length -1
// FirstCompanyString = companyNames.slice(0,lastIndex)
// companyNamesString = FirstCompanyString.toString()
// console.log(companyNamesString,"and", companyNames[lastIndex], "are big IT Companies")





// indexOfCompany = companyNames.indexOf('Oracle')

// if (indexOfCompany === -1) {
//     console.log("This company does not exists")
// } else {
//     console.log(`This company exists ${companyNames[indexOfCompany]}`)
// }

// console.log(companyNames.sort())
// console.log(companyNames.reverse())


// console.log(companyNames.slice(0,3))
// console.log(companyNames.slice(-3))


// middleIndexOfCompany = Math.round(companyNames.length/2)-1
// console.log(companyNames[middleIndexOfCompany])


// console.log(companyNames)
// companyNames.shift()
// console.log(companyNames)



// companyNames.splice(middleIndexOfCompany-1,1)
// console.log(companyNames)

// companyNames.pop()
// console.log(companyNames)

// companyNames.splice(0,)
// console.log(companyNames)



// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// new_array = text.split(/[ ,]+/)
// console.log(new_array)
// console.log(new_array.length)


// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// if (shoppingCart.includes('Meat')) {
//     console.log("Shopping Cart includes Meat")
// } else {
//     shoppingCart.unshift('Meat')
// }
// console.log(shoppingCart)



// if (shoppingCart.includes('Sugar')) {
//     console.log("Shopping Cart includes Sugar")
// } else {
//     shoppingCart.push("Sugar")
// }
// console.log(shoppingCart)


// allergic_to_honey = true
// index_of_honey = shoppingCart.indexOf("Honey")

// if (allergic_to_honey) {
//     shoppingCart.splice(index_of_honey, 1)
// }
// console.log(shoppingCart)


// index_of_tea = shoppingCart.indexOf('Tea')
// shoppingCart[index_of_tea] = 'Green Tea'
// console.log(shoppingCart)


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// ages.sort()
// console.log(`maximum of ages is ${Math.max(...ages)}`);
// console.log(`minimum of ages is ${Math.min(...ages)}`);


// var sum = 0;    
// for (let i = 0; i < ages.length; i++) {
//     sum += ages[i];
// }
// average= sum/ages.length
// console.log(`The average ages is ${average}`)
// console.log(`The ranges of max minus min is ${(Math.max(...ages)-(Math.min(...ages)))}`)
// console.log(`The value of max minus average is ${(Math.max(...ages)-(average))} and the value of min minus average is ${(Math.min(...ages)-(average))}`)