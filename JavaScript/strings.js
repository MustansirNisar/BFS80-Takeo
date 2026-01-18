// let fName = "Sarbesh";
 console.log(fName.length)  //Returns the number of characters in a string including white spaces
 console.log(fName[2])
 console.log(fName[3])

//tuUpperCase() and toLowerCase....convert the string to upper or lower case
 let city = "Srinagar"
 city.toUpperCase()
 console.log(city)
 let newCity = city.toUpperCase();
 console.log(newCity)
 console.log(city.toUpperCase());
 console.log(city.toLowerCase());

 trim()...removes the whitespaces from both ends
 let text = "  Something   "
 console.log(text)
 console.log(text.trim())

//slice(start, end)....extracts a protion of the string
 let text = "Something"
 console.log(text.slice(0,4))
 console.log(text.slice(-4,-2))
 console.log(text.slice(3))

// concat()....joins two or more strings
 let str1 = "JavaScript"
 let str2 = "React"
 console.log(str1.concat(" ",str2))

// replace()....returns a new string with the first occrence of a substring replaced by a new value
 let text = "I like cars as cars are very comfortable"
 console.log(text.replace("cars", "bikes"))
 console.log(text.replaceAll("cars", "bikes"))

//indexof()...returns the position of the first occurence of a substring
 let text = "JavaScript"
 console.log(text.indexOf("a"))
 console.log(text.indexOf("aSc"))

// charAt().....returns a char at a specific index
// let text = "JavaScript"
// console.log(text.charAt(3))

// Template Literals
// let fName = "Sarbesh"
// console.log(`Hello ${fName}`)
// let a = 5;
// let b = 10;
// console.log(`The sum of ${a} and ${b} is ${a+b}`)

// let poem = "Roses are red,\n Violets are blue"
let poem = `Roses are red,
violets are blue.`
console.log(poem)






