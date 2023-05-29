// დავალება 1

const modalBtn = document.querySelector(".modal-btn"),
      modal = document.querySelector(".modal"),
      backGround = document.querySelector(".dark-back"),
      closeBtn = document.querySelector(".close-btn")


modalBtn.addEventListener("click", ()=>{
    modal.style.display = "block"
    backGround.style.display = "block"
})

closeBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    modal.style.display = "none"
    backGround.style.display = "none"
})


// დავალება 2

const colorInput = document.querySelector("#color"),
      submitBtn = document.querySelector(".submit_btn")


submitBtn.addEventListener("click", ()=>{
    if ( !colorInput.value ){
        alert('გთხოვთ შეიყვანოთ ფერი')
    }
    else if (colorInput.value == 'red'){
        document.body.style.backgroundColor = 'red'    
    }
    else if (colorInput.value == 'blue'){
        document.body.style.backgroundColor = 'blue'    
    }
    else if (colorInput.value == 'green'){
        document.body.style.backgroundColor = 'green'    
    }
    else if (colorInput.value == 'black'){
        document.body.style.backgroundColor = 'black'    
    }
    else if (colorInput.value == 'white'){
        document.body.style.backgroundColor = 'white'    
    }
    else{
        alert('გთხოვთ შეიყვანოთ აქედან ერთ-ერთი ფერი: red, blue, green, black, white')
    }
})



// დავალება 3

const numberInput = document.querySelector("#number"),
      averageBtn = document.querySelector(".number_btn"),
      answerField = document.querySelector(".pasuxi")

let sum = 0


averageBtn.addEventListener('click', ()=>{
    if (!numberInput.value){
        alert('გთხოვთ შეიყვანოთ რიცხვები')
    }
    else if (!numberInput.value.includes(':')){
        alert('გთხოვთ სწორად შეიყვანოთ რიცხვები')
    }
    else{
        let arr = numberInput.value.split(':')
        arr.map((num) => sum += parseInt(num))
        let result = sum/arr.length
        answerField.innerHTML = ` რიცხვების საშუალო : ${result}`
        console.log(result)
        sum = 0
    }
})