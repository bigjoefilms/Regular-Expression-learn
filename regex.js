 // Explantaion 

//  This is a Regextest for a Visa creditcard
//  This code checks for the matches listed
//  Digits of Visacard must start with '4' at the begining
//  It must be 16 digit in total
//  It has a pattern --------> '4000 0000 0000 0000'
//  Any number within [0-9] can replace the zero as shown in eg. above

const validVisacard =/^[4]\d[0-9]{2}\s\d[0-9]{3}\s\d[0-9]{3}\s\d[0-9]{3}$/.test("4111 1111 1111 1111")
console.log(validVisacard)

  // Explantaion 
 
//  This is a Regextest for a Master creditcard
//  This code checks for the matches listed
//  Digits of Mastercard must start with '4' at the begining
//  It must be 16 digit in total
//  It has a pattern --------> '5000 0000 0000 0000'
//  Any number within [0-9] can replace the zero as shown in eg. above

const validMastercard =/^[5]\d[0-9]{2}\s\d[0-9]{3}\s\d[0-9]{3}\s\d[0-9]{3}$/.test("5111 1111 1111 1111")
console.log(validMastercard)