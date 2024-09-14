// 1

let set =  new Set([1,2,2,3])

console.log(set)

// 2

function calculateSum(){
    return 2 * 2
}

calculateSum()


// 3
// first way
let prompt1 = Number(prompt('what is ur garde'))
function  gardeStudent(){
    if(prompt1>=90){
        alert('A')
    }

    else if(prompt1>=80){
        alert('B')
    }

    else if(prompt1>=70){
        alert('C')
    }

    else if(prompt1>=60){
        alert('D')
    }

    else{
        alert('F')
    }
} 
gardeStudent()

// second way

/*
function  gardeStudent(grade){
  grade = 100

  if(grade>=90){
    alert('A')
}

else if(grade>=80){
    alert('B')
}

else if(grade>=70){
    alert('C')
}

else if(grade>=60){
    alert('D')
}

else{
    alert('F')
}

}

*/