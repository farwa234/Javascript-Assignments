// -----------------Chapter no 38 to 42 Start-------------------

//Q1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.?

// let value =(num,power)=>{
// let calculate = num**power;
// return calculate
// }
// let a = Number(prompt("Enter a Number?"))
// let b = Number(prompt("Enter Power?"))
// let check = value(a,b)
// document.write(`${a} <sup> ${b} </sup> ${check} <br/>`)

//Q.2Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.?

// let userYear = prompt("Enter a year ?")
// switch(userYear){
//     case "2012":
//         alert("leap year")
//         break;
//      case "2016":
//          alert("leap year")
//          break;
//      case "2020":
//          alert("leap year")
//          break;
//      default:
//         alert("Not a leap year")
// }

//Q.3If the lengths of the sides of a triangle are denoted by a, b, and c,
//  then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2?

// const area = (x,y,z)=>{
//   let S =sides(x,y,z)
//   let area = S*(S - a)*(S - b)*(S - c) 
//   return area;
// }
// const sides = ()=>{
//     let findS = (a + b + c) / 2
//     return findS
// }

// let a = Number(prompt("Enter length a "))
// let b = Number(prompt("Enter length b "))
// let c = Number(prompt("Enter length c "))
// let result = area(a,b,c)
// document.write(`The area of triangle is ${result}`);

//Q 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions?

// const mainFunction = () =>{
// let sub1 = Number(prompt("Enter the first subject no ?"))
// let sub2 = Number(prompt("Enter the second subject no?"))
// let sub3 = Number(prompt("Enter the third subject no ?"))
// let total = Number(prompt("Enter the total marks?"))
// let aver = average(sub1,sub2,sub3)
// let percen = percentage(sub1,sub2,sub3,total)
// document.write(`<h2>Average is : </h2> ${aver} <br/>`)
// document.write(`<h2> Percentage is : </h2> ${percen} <br/>`)
// }

// let average = (a,b,c) =>{
// let  checkAver = (a + b + c) / 3;
//      checkAver=checkAver.toFixed(2)
//      return checkAver
// }
// let percentage= (a,b,c,total)=>{
//      let resultPer = ((a + b + c) / total) * 100;
//    resultPer= resultPer.toFixed(2);
//     return resultPer;
// }

// mainFunction();


//Q.5 You have learned the function indexOf. Code your own custom function that will perform the same functionality. 
// You can code for single character as of now.?

// const index = (str,char)=>{
//     let no ;
//     for(let i =0;i <str.length ;i++){
//         if(str[i]=== char){
//              no = i
//             break;
//         }
//     }
//     return no 
// }
// let str = "hello world"
// let indexOf = prompt("Write character to find?")
// let result = index(str,indexOf)
// document.write(`The index ${indexOf} and is ${result} <br/>`)


// Q6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.?

// let userInput= prompt("Enter sentences to delete vowels in them")
// const removedVowels= (sentence)=>{
//     let remove= " "
//     for(let i =0; i < sentence.length ;i++){
//     if(sentence[i]==='a'|| sentence[i]=== "A"||sentence[i]==="e"||sentence[i]==="E"||sentence[i]==="i"||sentence[i]==="I"||sentence[i]==="o"||sentence[i]==="O"||sentence[i]==="u"||sentence[i]==="U"){
//       continue
//     }
//     else{
//         remove += sentence[i]
//     }
//     }

//     return remove;
// }
// let result= removedVowels(userInput)
// document.write(`Before : ${userInput} <br/>`);
// document.write(`After : ${result} <br/>`);


//Q 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence?


// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// let countVowelPair =(text)=>{
//     let count = 0
//     text=text.toLowerCase()
//      for(let i =0;i < text.length -1; i++){
//         let choose = text[i]
//         let nextCh = text[i+1]
//         switch (choose){
//             case  "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 switch (nextCh) {
//                     case 'a':
//                     case 'e':
//                     case 'i':
//                     case 'o':
//                     case 'u':
//                     count++;
//                     break
//         }
//         break
//      }
// }
//       return count
// }
// let sentence = "Pleases read this application and give me gratuity";
// let result =  countVowelPair(sentence)
// document.write(`"Number of successive vowels:",${result}`);


//Q 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.?


// let toMeters = (km)=>{
//     return  km*1000
// }

// let toFeet = (km)=>{
//   return km *3280.84
// }

// let toInches=(km)=>{
//     return km *39370.1
// }

// let toCentimeters = (km)=>{
//     return km *100000
// }
// let km = Number(prompt("Enter distance between two cities (in kilometers):"))
// document.write(`Distance is meters ${toMeters(km)} <br/>`)
// document.write(`Distance is feet ${toFeet(km)} <br> `)
// document.write(`Distance is inches ${toInches(km)} <br/> `)
// document.write(`Distance is centimeters ${toCentimeters(km)}<br/> `)


// Q9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.?


// let  workingHours = Number(prompt("Enter ypour Working hours :"))
// let overTime , overTimePay
// let overTimeHourPay = 12

// if(workingHours > 40){
//  overTime = workingHours - 40 
//  overTimePay = overTime *overTimeHourPay 
//  alert(`Your overtime pay cost is: ${overTimePay}  rupees`)
// }
// else{
//    alert("You need to work more to get overtime") 
// }


// Q 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.?


// let amount = Number(prompt("Enter amount to Withdraw ?"))
// let hundred = Number (amount /100)
// let fifty = Number((amount %100)/50)
// let ten =Number(((amount %100)%50)/10)

// document.write(`Enter Amount ${amount} <br/>`)
// document.write(`You will have ${hundred} hundreds notes ${fifty} fifty notes ${ten} ten notes <br/>`);






// ============Chapter no 38 to 42 is End ==================