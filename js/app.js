// If you want to convert the Unicode value into a character, use the fromCharCode() method.


function charCode(){
  let strings = document.getElementById("string").value; 
  let key = document.getElementById("key").value;
  let codes = [];

  for (let i = 0; i < strings.length; i++) {
    codes.push(strings[i].charCodeAt(0) - key);
  }

  let result='';

  for (let i = 0; i < codes.length; i++) {
    result +=  (String.fromCharCode(codes[i]) );
    document.getElementById("result").value = result;
  }
  console.log('result', result);  
  console.log('codes', codes);
}

charCode();



function encode(){
  let strings2 = document.getElementById("string2").value; 
  let key = parseInt(document.getElementById("key2").value);
  let codes = [];

  for (let i = 0; i < strings2.length; i++) {
    codes.push(strings2[i].charCodeAt(0) + key);  
  }
  
  let result='';
  
  for (let i = 0; i < codes.length; i++) {
    result = result + (String.fromCharCode(codes[i]) );
  }
  document.getElementById("result2").value = result;
  console.log('result', result);  
  console.log('codes2', codes);
}

encode();



function hack(){
  let strings = document.getElementById('result').value;
  let key = parseInt();
  let hackedCodes = [];

  for (key = 1; key < 10; key++){
    for (let i = 0; i < strings.length; i++) {
      hackedCodes.push(strings[i].charCodeAt(0) + key);
    }
  }

  console.log('hackedCodes', hackedCodes);

  let hackedResult='';

  for (let i = 0; i < hackedCodes.length; i++) {
   hackedResult +=  (String.fromCharCode(hackedCodes[i]) );
  }


  // for (let j = 0; j <= strings.length; j++){
  
  // }  
  console.log('hackedResult:', hackedResult); 
}

hack();

  // ENCODE
  // let codesForEncode = [];
  // for (let i = 0; i < hackedResult.length; i++) {
  //   for (key = 0; key < 10; key++){
  //     codesForEncode.push(hackedResult[i].charCodeAt(0) + key);  
  //   }
  // }
  
  // let encodeResult='';
  
  // for (let i = 0; i <codesForEncode.length; i++) {
  //   encodeResult += (String.fromCharCode(codesForEncode[i]) );
  // }


  // console.log('encodeResult:', encodeResult);  
  // console.log('codesForEncode:', codesForEncode);