lovestring="Love is the best thing in this world. Some found their love and some are still looking for their love."
pattern= /love/gi
arr=lovestring.match(pattern);
console.log(arr.length);

becauseString='You cannot end a sentence with because because because is a conjunction'
beacusepatter=/because/gi
arr1=becauseString.match(beacusepatter);
console.log(arr1.length);


sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
sentence = sentence.replace(/%/g,'').replace(/@/g,'').replace(/&/g,'').replace(/\$/g,'').replace(/#/g,'').replace(/\?/g,'').replace(/!/g,'').replace(/;/g,'').replace(/,/g,'');
console.log(sentence);

findnumbers='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
arr=findnumbers.match(/\d+/g);
var totalSalary = 0;
for (var i = 0; i < arr.length; i++) {
totalSalary += parseInt(arr[i]) }
console.log(totalSalary);