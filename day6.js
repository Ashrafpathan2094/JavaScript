const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',

    
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']



// for (let i = 10; i>=0;i--){
//     console.log(i)}


// i = 10
// while (i>=0){
//     console.log(i)
//     i--}


// i = 10
// do {
//     console.log(i)
//     i--} while (i>=0)


// n = parseInt(prompt("Enter a number"))
// for(let i = 0;i<=n;i++){
//     console.log(i)
// }

// for (i=0;i<=10;i++){
//     console.log(`${i} x ${i} = ${i*i}`)
// }

// for (i=0;i<=10;i++){
//     console.log(`${i}  ${i**2}  ${i**3}`)
// }

// for (i =0;i<=100;i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }


// for (i =0;i<=100;i++){
//     if (i%2!==0){
//         console.log(i)
//     }
// }




// sumOfEven = 0
// sumOfOdd= 0
// for (i=0;i<=100;i++){
//     if (i%2==0){
//         sumOfEven += i
//     } else{
//         sumOfOdd += i
//     }
    
// }
// console.log(`sum of even: ${sumOfEven} sum of odd ${sumOfOdd}`)


// for (i=0;i<=5;i++){
//     console.log(Math.floor(Math.random()*11))
// }


// arr = []
// do {
//     for (i=0;i<=5;i++){
//         a = Math.floor(Math.random()*10)
//         if (!arr.includes(a)){
//                 arr.push(a)
//         }
//     }
// } while (arr.length<=5)
// console.log(arr)



// var storedCharacters =
//    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// random_characters =""
// for(i=0;i<=6;i++){
//     random_characters += storedCharacters.charAt(Math.floor(Math.random()*storedCharacters.length))
// }
// console.log(random_characters)


// lengthOfRandomId= parseInt(prompt("Enter lengthOfRandomId"))
// var storedCharacters =
//    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// random_characters =""
// for(i=0;i<lengthOfRandomId;i++){
//     random_characters += storedCharacters.charAt(Math.floor(Math.random()*storedCharacters.length))
// }
// console.log(random_characters)



// arr_value=[]

// for (i=0;i<3;i++){
//     arr_value.push(Math.floor(Math.random()*1000))
// }
// val_to_string = arr_value.toString()
// console.log(`rgb(${val_to_string})`)


// countries.sort()
// new_countries = []
// for(i=0;i<11;i++){
//     new_countries.push(countries[i])
// }
// console.log(new_countries)



// country_length =[]
// for(i=0;i<11;i++){
//     country_length.push(new_countries[i].length)
// }
// console.log(country_length)





// for (i=0;i<countries.length;i++){
//     if (countries[i].includes('land'))
//     console.log(countries[i])
// }


// index_of_largest_character_country = country_length.indexOf(Math.max(...country_length))
// console.log(countries[index_of_largest_character_country])


// country_with_5_letter=[]
// for (i=0;i<countries.length;i++){
//     if (country_length[i] == 5){
//         country_with_5_letter.push(countries[i])
//     }
// }
// console.log(country_with_5_letter)



// tech_array =["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// reversed_array =[]
// for (i=0;i<tech_array.length;i++){
//     reversed_array.unshift(tech_array[i])
// }
// console.log(reversed_array)



// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   for (i=0;i<fullStack.length;i++){

//     for (j=0;j<fullStack[i].length;j++){
//         console.log(fullStack[i][j])
//     }
//   }

// copied_array = [...countries]
// console.log(`copied array ${copied_array}`)

// copy_without_ref= countries.slice(0)
// console.log(`chad array ${copy_without_ref}`)



reversed_countries = []
for (i=0;i<countries.length;i++){
        reversed_countries.unshift(countries[i].toUpperCase())
    }
console.log(reversed_countries)