

// first homework



/*
let first = Number(prompt('enter an  number'))

let second = Number(prompt('enter second number'))


console.log(first+second)
console.log(first-second)
console.log(first*second)
console.log(first/second)

*/

// second homework


/*
let first = prompt('enter your name')


let second = prompt('enter your lastname')

alert(`welcome ${first + ' ' + second}`)

*/

// third homework

/*
function i(){
let end = 100

let zero = 0
       for(let start = 0;start<=end;start++){
        
         zero += start
          return zero
       }
}

console.log(i())

*/

// forth homework


/*

function i(){
    let end = 100

    let zero = 0

    for(let start = 0; start<=end;start+=1){
        if(  start  % 2 === 0){
            zero += start
             console.log (zero) 
        }

        else {
            console.log(start)
        }

       
    }
}


i()

*/



// fifth homework
/*
let w = confirm('are you 13 years old or more') 


if (w===true){ 
   
  let j = Number(prompt('so be shure that you are 13 or more what hour to you sleep'))  
     if (j>11){
        alert('so  you are an teenager or more')
    }
  

   
 let i = Number(prompt('so at last how old are you'))
 if (i>19){
    alert('oh so you are an adult now')
}

if (i<13){
    alert('error ')
}
  
else if (i===13,14,15,16,17,18){
    alert('thank for information')
}


}

 






if (w===false){
    alert('so you are not an teeneger or adult')
}


*/

// sixth homework


function i(isValidCoupon,totalAmount){
    isValidCoupon = prompt('enter an code')

    totalAmount = Number(prompt('enter your total amount'))

    if(isValidCoupon === 'SALE' || 'BIGSALE' && totalAmount >=50 ){
        return true
    }

    else if (isValidCoupon === 'LILSALE' && totalAmount < 50){
        return false
    } 

    else{
        return 'error'
    }
}

alert(i())
