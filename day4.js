// age = parseInt(prompt("Enter your age:"))

// if (age >= 18) {
//     console.log(`You are old enough to drive.`)
// } else {
//     console.log(`You are left with ${18-age} years to drive.
//     `)
// }





// yourAge = parseInt(prompt("Enter your age:"))
// myAge = 24

// if (yourAge>myAge) {
//     console.log(`Your are ${yourAge-myAge} years older than me`)
// }
// else if (yourAge<myAge) {
//     console.log(`You are ${myAge-yourAge} years younger than me`)
// }
// else {
//     console.log(`We are of same age, ${myAge}`)
// }


// number = parseInt(prompt("Enter Number:"))

// if (number%2==0) {
//     console.log(`${number} is an even number`)
// }
// else {
//     console.log(`${number} is odd number`)
// }


// scores = parseInt(prompt("Enter your score:"))

// if ((scores>=80) && (scores<= 100)) {
//     console.log(`Your Grade is A ${scores}`)
// }

// else if ((scores>=70) && (scores<= 79)) {
//     console.log(`Your Grade is B ${scores}`)
// }

// else if ((scores>=60) && (scores<= 69)) {
//     console.log(`Your Grade is C ${scores}`)
// }

// else if ((scores>=50) && (scores<= 59)) {
//     console.log(`Your Grade is D ${scores}`)
// }

// else if ((scores>=0) && (scores<= 49)) {
//     console.log(`Your Grade is F ${scores}`)
// }

// else {
//     console.log(`Please Enter a valid Grade ${scores}`)
// }

// day = prompt("What day is today?")
// lowerCaseDay = day.toLowerCase()
// days = "monday,tuesday,wednesday,thursday,friday"


// if (lowerCaseDay == 'saturday' || lowerCaseDay == 'sunday') 
// {

//     console.log(`${day} is a weekend`)
// }
// else if (((lowerCaseDay == 'monday' || lowerCaseDay == 'tuesday') || (lowerCaseDay == 'wednesday' || lowerCaseDay == 'thursday'))
//         || (lowerCaseDay == 'friday'))

//  {

//     console.log(`${day} is weekdays`)
// }


// else {
//     console.log(`${day} is not a proper week day` )
// }



// let monthUserInput = prompt('Enter a Month')
// let month = monthUserInput.toLowerCase()
// let yearUserInput = prompt('Enter a Year')
// let year = yearUserInput.toLowerCase()

// switch (month) {
//   case 'january':
//     console.log('January has 31 days')
//     break

//   case 'february':
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//       console.log(year + ' is a leap year');
//   } else {
//       console.log(year + ' is not a leap year');
//   }

//     console.log('February has 28 days')
//     break

//   case 'march':
//     console.log('March has 31 days')
//     break

//   case 'april':
//     console.log('April has 30 days')
//     break

//   case 'may':
//     console.log('May has 31 days')
//     break

//   case 'june':
//     console.log('June has 30 days')
//     break

//   case 'july':
//     console.log('July has 31 days')
//     break

// case 'august':
//     console.log('August has 30 days')
//     break

// case 'september':
//     console.log('September has 31 days')
//     break

// case 'octobor':
// console.log('Octobor has 30 days')
// break

// case 'november':
//     console.log('November has 31 days')
//     break
    
// case 'december':
//     console.log('December has 30 days')
//     break

//   default:
//     console.log('Enter a proper month.')
// }