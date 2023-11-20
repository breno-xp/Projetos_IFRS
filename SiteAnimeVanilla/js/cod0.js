let menu = document.querySelectorAll(".menu");
let mbox = document.querySelector(".mbox");

menu[0].addEventListener("click", menuBox);
menu[1].onclick = menuBox;

// Can't use class to identify all elements with a specif class, just the first one to appear

function menuBox(){
    if (menu[0].getAttributeNode("id").nodeValue == 'off'){
    mbox.style.left="0vw";
    mbox.style.backgroundColor="rgb(189, 50, 50)";
    menu[0].setAttribute('class', 'hamburger open-hamb');
    menu[0].setAttribute('id', 'on');
} else{
    mbox.style.left="-100vw";
    mbox.style.backgroundColor="#000000";
    menu[0].setAttribute('class', 'hamburger');
    menu[0].setAttribute('id', 'off');
}

}

let main = document.querySelector('main');
let field = document.querySelector('fieldset');
main.removeChild(document.querySelectorAll('form')[1]);

step = 1;
document.body.onload = step1;

function step1(){
    let boxes = field.querySelectorAll('.box');

    for(i = 0; i < boxes.length; i++){
        field.removeChild(boxes[i]);
    }

    error_field0 = document.createElement("div");
    error_field0.setAttribute('id', 'error')
    document.querySelector('main').appendChild(error_field0);

    for(i = 0; i < 4; i++){
        /*When adding elements with a variable, declare it inside the loop*/
        let box = document.createElement('div');
        box.setAttribute('class', 'box')
        let label = document.createElement('label');
        label.setAttribute('for', 'item' + i);
        let input = document.createElement('input');
        input.setAttribute('id', 'item' + i);

        field.appendChild(box);

        let box_sel = field.querySelectorAll('.box')[i];

        box_sel.appendChild(label);
        box_sel.appendChild(input);

        switch(i){
            case 0:
                let text = document.createTextNode('Nome:');
                box_sel.querySelector('label').appendChild(text);
                box_sel.querySelector('input').setAttribute('type', 'text');
                box_sel.querySelector('input').setAttribute('name', 'nome');
                break;
            case 1:
                let text1 = document.createTextNode('CPF:');
                box_sel.querySelector('label').appendChild(text1);
                box_sel.querySelector('input').setAttribute('type', 'number');
                box_sel.querySelector('input').setAttribute('name', 'CPF');
                break;
            case 2:
                let text2 = document.createTextNode('Senha:');
                box_sel.querySelector('label').appendChild(text2);
                box_sel.querySelector('input').setAttribute('type', 'password');
                box_sel.querySelector('input').setAttribute('name', 'password');
                break;
            case 3:
                let text3 = document.createTextNode('Confirme a senha:');
                box_sel.querySelector('label').appendChild(text3);
                box_sel.querySelector('input').setAttribute('type', 'password');
                box_sel.querySelector('input').setAttribute('name', 'password2');
                break;
        }

    }
    let button = document.createElement('input');
    button.setAttribute('id', 'button');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Enviar');
    //button.appendChild(document.createTextNode('Enviar'));
    field.appendChild(button);

    /*let button_sel = document.querySelector('#button');
    button_sel.addEventListener('submit', (e) => {verify(e)});
    
    The form is the one who must have the eventListener
    */

    
}

function step2(){
    let boxes = field.querySelectorAll('.box');
    alert('step2');
    
    field.innerHTML = '';
    //better way to clean the fieldset up

    for(i=0; i<3; i++){


        if (i == 1){

        }else{
            let box = document.createElement('div');
            box.setAttribute('class', 'box')
            let label = document.createElement('label');
            label.setAttribute('for', 'item' + i);
            let input = document.createElement('input');
            input.setAttribute('id', 'item' + i);
        
            field.appendChild(box);

            box_sel = field.querySelectorAll('.box')[i];
        
            box_sel.appendChild(label);
            box_sel.appendChild(input); 
            
            if(i == 0){
                let text0 = document.createTextNode('Profissão:');
                box_sel.querySelector('label').appendChild(text0);
                box_sel.querySelector('input').setAttribute('type', 'text');
                box_sel.querySelector('input').setAttribute('name', 'occupation');
            }else{
                let text1 = document.createTextNode('Anos de experiência:');
                box_sel.querySelector('label').appendChild(text1);
                box_sel.querySelector('input').setAttribute('type', 'number');
                box_sel.querySelector('input').setAttribute('name', 'experience');
            }
        }

    }

}

document.querySelector('#form').addEventListener('submit', (e) => {verify(e)});

// the 'e' is used just in these guys

    function verify(e){
        let verifier = 0;
        pv = 1;
        const error_field = document.querySelector('#error');
        vPassword();
        vPassword2(pv);
        vCpf();
        vName();
// alert and console.log for some reason mess things up

        if (verifier != 0) {
            e.preventDefault();
        } else{
            alert("aeee");
            e.preventDefault();
            error_field.innerHTML = '';
            if (step == 1){
                alert('step1 identified');
                step2();
            }
        }

// the functions that will be used in the verify thing must become its method.

        function vName(){
            let name = document.querySelector('#item0');
            
            if(name.value == ''){
                name.value = '';
                name.setAttribute('placeholder', 'Você não digitou nada !');
                name.style.border = '2px solid rgb(255, 0, 0)';
                name.focus();

                let span = document.createElement('div');
                let error = document.createTextNode("Nome precisa ser revisado.");
                span.appendChild(error);
                error_field.appendChild(span);
// Apparently I can't use shortcuts some times... Put it inside the function !
                
                verifier++;
            }else{
                name.removeAttribute('placeholder');
                name.style.border = '0px';
            }
        }

        function vCpf(){
            let cpf = document.querySelector('#item1');
            let me = 'me';

            if(cpf.value.length < 11 || cpf.value.length > 11){
                cpf.value = '';
                cpf.setAttribute('placeholder', 'Você precisa digitar 11 números !');
                cpf.style.border = '2px solid rgb(255, 0, 0)';
                cpf.focus();

                let span = document.createElement('div');
                let error = document.createTextNode("CPF precisa ser revisado.");
                span.appendChild(error);
                error_field.appendChild(span);

                verifier++;
            }else{
                cpf.removeAttribute('placeholder');
                cpf.style.border = '0px';
            }
        }

        function vPassword(){
            let password = document.querySelector('#item2');

            if(password.value.length < 8 || password.value.length > 8){
                password.value = '';
                password.setAttribute('placeholder', 'Você precisa digitar 8 caracteres !');
                password.style.border = '2px solid rgb(255, 0, 0)';
                password.focus();

                let span = document.createElement('div');
                let error = document.createTextNode("Senha precisa ser revisada.");
                span.appendChild(error);
                error_field.appendChild(span);

                verifier++;
            } else{
                password.removeAttribute('placeholder');
                password.style.border = '0px';
                pv = password.value;
            }
        }

        function vPassword2(pv){
            let password2 = document.querySelector('#item3');

            if(pv == password2.value){
                password2.removeAttribute('placeholder');
                password2.style.border = '0px';
            }else{
                password2.value = '';
                password2.setAttribute('placeholder', 'As senhas não coincidem !');
                password2.style.border = '2px solid rgb(255, 0, 0)';
                password2.focus();

                let span = document.createElement('div');
                let error = document.createTextNode("Confimação de senha precisa ser revisada.");
                span.appendChild(error);
                error_field.appendChild(span);

                verifier++;
            }

    }

}