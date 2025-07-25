let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btn = e.target.innerHTML;

        if (btn === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (btn === 'AC') {
            string = "";
            input.value = string;
        } else if (btn === 'DEL') {
            string = string.slice(0, -1); 
            input.value = string;
        } else {
            string += btn;
            input.value = string;
        }
    });
});
