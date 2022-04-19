console.log("helloworld");
let challenge ='30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,2));
console.log(challenge.substring(0,2));
console.log(challenge.slice(3,30));
console.log(challenge.includes('Script'));
console.log(challenge.split(' '));

company='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(company.split(','));
console.log(challenge.replace('JavaScript','Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(15));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let because='You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf('because'));
console.log(because.lastIndexOf('because'));
console.log(because.search('because'));
let pattern =/a/gi;
console.log(challenge.match(pattern));

let string1 ='30 Days Of ';
let string2 ='Javascript';
console.log(string1.concat(string2));
console.log(challenge.repeat(2));





