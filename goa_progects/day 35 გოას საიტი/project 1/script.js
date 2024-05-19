


let pluse = document.getElementById('pluse')

let reset = document.getElementById('reset')


let minus = document.getElementById('minus')

let counter = document.getElementById('counter')

let count = 0

let count1 = 0
// first
pluse.addEventListener('click', function(){
  count+=1
  counter.textContent = count
   
})



reset.addEventListener('click', function(){
    

    counter.textContent = count
     count = 0
    
})



minus.addEventListener('click', function(){
    count--
    counter.textContent = count
})



// second


let pluse1 = document.getElementById('p1')

let reset1 = document.getElementById('p2')

let minus1 = document.getElementById('p3')

let count2 = 1

pluse1.addEventListener('click', function(){
     count2*=2
     counter.textContent = count2
} )


reset1.addEventListener('click', function(){
    counter.textContent = count2
    count2 = 1
})



minus1.addEventListener('click', function(){
     count2/=2
     counter.textContent = count2
})