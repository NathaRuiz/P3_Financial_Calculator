const operand1_element = document.querySelector("#operand_1");
const operand2_element = document.querySelector("#operand_2");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click",() =>{
        const button_click = button.textContent;
        
        if(button.id === "btn_clear" ){
            operand1_element.textContent = "0";
            operand2_element.textContent ="0";
            return;
        }

        if(button.id === "btn_delete" ){
            if(operand1_element.textContent.length === 1 || operand2_element.textContent === "Error!!"){
                operand1_element.textContent = "0";
            }
            else{
                operand1_element.textContent =  operand1_element.textContent.slice(0, -1);
            }
            return;
        }

        if(button.id === "btn_sqrt"){
            
        }

        if(button.id === "btn_equal"){
            try{
                operand2_element.textContent =  eval(operand1_element.textContent);
            }
            catch{
                operand2_element.textContent = "Error!!";
            }
            
            return;
        }

        if(operand1_element.textContent === "0" || operand2_element.textContent === "Error!!" ){
            operand1_element.textContent = button_click;
            operand2_element.textContent = "0";
        }
        else{
            operand1_element.textContent += button_click;
        }
    })
})
