firstname ='Pravesh'
lastname ='Kumar'
let country ='India'
let city ='Bangalore'
age =27
isMarried=false
year =2022
console.log('=========Type of example==========')
console.log(typeof firstname)
console.log(typeof lastname)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)


console.log(typeof '10'==10)
console.log(typeof '9.8'==10)

console.log('=========Comaparison example==========')
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('====== Comparison and bitwise operator example=============')
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 > 3 && 10 > 12))
console.log('=========Date example ==========')
const now=new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())