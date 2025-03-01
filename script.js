let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll
('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button=> {
    button.addEventListener('Click',(e) =>{
        if(e.target.innerHTML == '='){
            String = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC')
            string = "";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})