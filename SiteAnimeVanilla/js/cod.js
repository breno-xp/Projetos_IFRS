let menu = document.querySelectorAll(".menu");
let mbox = document.querySelector(".mbox");

menu[0].addEventListener("click", menuBox);
menu[1].onclick = menuBox;

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

document.querySelector('.sub-menu').style.top = '0';
document.querySelector('.sub-menu').style.zIndex = '-1';
document.querySelector('.sub-menu').style.left = 'inherit';

let items = document.querySelectorAll('.m_item');

item0 = items[0];
item1 = items[1];
item2 = items[2];
item3 = items[3];
item4 = items[4];
item5 = items[5];
item6 = document.querySelector('.rt');
item6.setAttribute('id', 'off');

item0.onmouseover = () => {m_item_ov(item0)};
item1.onmouseover = () => {m_item_ov(item1)};
item2.onmouseover = () => {m_item_ov(item2)};
item3.onmouseover = () => {m_item_ov(item3)};
item4.onmouseover = () => {m_item_ov(item4)};
item5.onmouseover = () => {m_item_ov(item5)};
item6.onmouseover = () => {m_item_ov(item6)};
item6.onclick = () => {SubMenu()};

function m_item_ov(item){
    item.style.backgroundColor = 'rgb(100, 99, 99)';
}

function subMenu(){
    if(item6.getAttributeNode('id').nodeValue == 'off'){
        let subMenu = document.querySelector('.sub-menu');
        subMenu.style.top = '255px';
        subMenu.style.left = '0vw';
        item6.setAttribute('id', 'on');
    } else{
        let subMenu = document.querySelector('.sub-menu');
        subMenu.style.top = '0';
        subMenu.style.left = 'inherit';
        item6.setAttribute('id', 'off');
    }
}

item0.onmouseout = () => {m_item_ou(item0)};
item1.onmouseout = () => {m_item_ou(item1)};
item2.onmouseout = () => {m_item_ou(item2)};
item3.onmouseout = () => {m_item_ou(item3)};
item4.onmouseout = () => {m_item_ou(item4)};
item5.onmouseout = () => {m_item_ou(item5)};
item6.onmouseout = () => {m_item_ou(item6)};
item6.onclick = () => {subMenu()};

function m_item_ou(item){
    item.style.backgroundColor = 'rgba(189, 50, 49, 1)';
}

//-----------------------------------------------------------

name_d = '';
cpf_d = '';
password_d = '';
password2_d = '';
occupation_d = '';
state_d = '';
experience_d = '';

//-----------------------------------------------------------

let main = document.querySelector('main');
let field = document.querySelector('fieldset');
main.removeChild(document.querySelectorAll('form')[1]);

error_field = document.createElement("div");
error_field.setAttribute('id', 'error');
document.querySelector('main').appendChild(error_field);

let s_number = 1;

document.body.onload = () => {step()};

function step(){

    field.innerHTML = '';

    if(s_number == 1){
        document.querySelector('.text-center').innerHTML = 'Criar conta profissional';

        for(i = 0; i < 4; i++){
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
    }

    if(s_number == 2){
        for(i = 0; i < 3; i++){
            if (i == 1){
                label = document.createElement('label');
                label.setAttribute('id', 'r_label');
                label_t = document.createTextNode('Estado onde trabalha:');
                label.appendChild(label_t);

                field.appendChild(label);
                field.appendChild(document.createElement('hr'));

                    for(ii = 0; ii < 3; ii++){
                        selector = document.createElement('div');
                        selector.setAttribute('class', 'selector');
                        field.appendChild(selector);

                        selector = field.lastChild;

                        label = document.createElement('label');
                        label.setAttribute('class', 'form-check-label');
                        label.setAttribute('for', 'radio' + ii);
                        selector.appendChild(label);

                        radio = document.createElement('input');
                        radio.setAttribute('type', 'radio');
                        radio.setAttribute('class', 'form-check-input');
                        radio.setAttribute('id', 'radio' + ii);
                        radio.setAttribute('name', 'optradio');
                        radio.setAttribute('value', 'option' + ii);
                        selector.appendChild(radio);

                        radio_t = document.createElement('span');
                        radio_t.setAttribute('class', 'wcomp');
                        switch(ii){
                            case 0:
                                radio_t_v = document.createTextNode('RS');
                                break;
                            case 1:
                                radio_t_v = document.createTextNode('SC');
                                break;
                            case 2:
                                radio_t_v = document.createTextNode('PR');
                                break;
                        }
                        radio_t.style.fontFamily = 'Raleway';
                        radio_t.style.fontWeight = 'bold';
                        radio_t.appendChild(radio_t_v);
                        selector.appendChild(radio_t);
                    }
            }else{
                let box = document.createElement('div');
                box.setAttribute('class', 'box')
                let label = document.createElement('label');
                label.setAttribute('for', 'item' + i);
                let input = document.createElement('input');
                input.setAttribute('id', 'item' + i);
            
                field.appendChild(box);
    
                box_sel = field.lastChild;
            
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

    if (s_number == 3){
        document.querySelector('.text-center').innerHTML = 'Confirme seus dados';
        for(i = 0; i < 6; i++){
            let box = document.createElement('div');
            box.setAttribute('class', 'box top')
            let label = document.createElement('label');
            label.setAttribute('class', 'label2');
            let span = document.createElement('span');
            span.setAttribute('class', 'confirm');

            field.appendChild(box);

            let box_sel = field.querySelectorAll('.box')[i];

            box_sel.appendChild(label);
            box_sel.appendChild(span);

            switch(i){
                case 0:
                    text = document.createTextNode('Nome:');
                    box_sel.querySelector('label').appendChild(text);
                    span_t = document.createTextNode(name_d);
                    box_sel.querySelector('span').appendChild(span_t);
                    break;
                case 1:
                    text = document.createTextNode('CPF:');
                    box_sel.querySelector('label').appendChild(text);
                    span_t = document.createTextNode(cpf_d);
                    box_sel.querySelector('span').appendChild(span_t);
                    break;
                case 2:
                    text = document.createTextNode('Senha:');
                    box_sel.querySelector('label').appendChild(text);
                    span_t = document.createTextNode(password_d);
                    box_sel.querySelector('span').appendChild(span_t);
                    break;
                case 3:
                    text = document.createTextNode('Profissão:');
                    box_sel.querySelector('label').appendChild(text);
                    span_t = document.createTextNode(occupation_d);
                    box_sel.querySelector('span').appendChild(span_t);
                    break;
                case 4:
                    text = document.createTextNode('Estado onde trabalha:');
                    box_sel.querySelector('label').appendChild(text);
                    span_t = document.createTextNode(state_d);
                    box_sel.querySelector('span').appendChild(span_t);
                    break;
                case 5:
                    text = document.createTextNode('Anos de experiência');
                    box_sel.querySelector('label').appendChild(text);
                    span_t = document.createTextNode(experience_d);
                    box_sel.querySelector('span').appendChild(span_t);
                    break;
            }
        }
    }

    let button = document.createElement('input');
    button.setAttribute('class', 'button');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Enviar');
    field.appendChild(button);

    if(s_number == 3){
        again0 = document.createElement('button');
        again0.innerHTML = 'Tentar novamente';
        again0.setAttribute('class', 'button');
        again0.setAttribute('id', 'button');
        again0.style.backgroundColor = 'lightcoral'
        field.style.display = 'block';

        field.appendChild(again0);

        again0 = document.querySelector('#button');

        again0.onmouseover = () => {
            again0.style.backgroundColor = 'red';
        }

        again0.onmouseout = () => {
            again0.style.backgroundColor = 'lightcoral';
        }
        again0.addEventListener('click', (e) => {
            s_number = 1;
            step(s_number);
        });
    }

}

document.querySelector('#form').addEventListener('submit', (e) => {verify(e)});

function verify(e){
    let verifier = 0;
    pv = 'a';
    let error_field = document.querySelector('#error');
    error_field.innerHTML = '';

    if(s_number == 1){
        vPassword();
        vPassword2(pv);
        vCpf();
        vText();
    }

    if(s_number == 2){
        vExperience();
        vRadio();
        vText();
    }

    if(s_number == 3){
        document.querySelector('.text-center').innerHTML = '⭐ ⭐ ⭐';
        field.innerHTML = '';
        let gif = document.createElement('iframe');
        gif.setAttribute('src', 'https://giphy.com/embed/g9582DNuQppxC');
        gif.setAttribute('height', '200px');
        gif.setAttribute('width', '350px');
        document.querySelector('main').lastChild.appendChild(gif);
        document.querySelector('main').lastChild.style.border = '0';
        field.appendChild(document.createTextNode('Fim das operações 🎉'));
        field.style.textAlign = 'center';
        field.style.color = 'white';
        field.style.textWeight = 'bold';
        field.style.fontSize = '2rem';
        field.style.fontFamily = 'Raleway';
        verifier = 1;
    }

    if (verifier != 0) {
        e.preventDefault();

    } else{
        e.preventDefault();
        s_number++;
        step(s_number);
    }

    function vText(){
        let name = document.querySelector('#item0');
        
        if(name.value == ''){
            name.value = '';
            name.setAttribute('placeholder', 'Você não digitou nada !');
            name.style.border = '2px solid rgb(255, 0, 0)';
            name.focus();

            let span = document.createElement('div');
            if (s_number == 1)
                error = document.createTextNode("Nome precisa ser revisado.");    
            else
                error = document.createTextNode("Profissão precisa ser revisada.");    
            span.appendChild(error);
            error_field.appendChild(span);
            
            verifier++;
        }else{
            name.removeAttribute('placeholder');
            name.style.border = '0px';
            if(s_number == 1)
                name_d = name.value;
            else
                occupation_d = name.value;
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
            cpf_d = cpf.value;
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
            password_d = password.value;
        }
    }

    function vPassword2(pv){
        let password2 = document.querySelector('#item3');

        if(pv == password2.value){
            password2.removeAttribute('placeholder');
            password2.style.border = '0px';
            password2_d = password2.value;
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

    function vExperience(){
        experience = document.querySelector('#item2');

        if(experience.value >= 0 && experience.value <= 50 && experience.value != ''){
            experience.removeAttribute('placeholder');
            experience.style.border = '0px';
            experience_d = experience.value;
        } else{
            experience.value = '';
            experience.setAttribute('placeholder', 'Insira um valor entre 0 e 50.');
            experience.style.border = '2px solid rgb(255, 0, 0)';
            experience.focus();

            let span = document.createElement('div');
            let error = document.createTextNode("Anos de experiência precisa ser revisado.");
            span.appendChild(error);
            error_field.appendChild(span);

            verifier++;
        }
    }

    function vRadio(){
        radio0 = document.querySelector('#radio0');
        radio1 = document.querySelector('#radio1');
        radio2 = document.querySelector('#radio2');

        let r_label = field.querySelector('#r_label');

        if(radio0.checked == true || radio1.checked == true || radio2.checked == true){
            r_label.style.textDecoration = 'none';
            r_label.style.color = 'white';

            if(radio0.checked == true)
                state_d = 'RS';
            if(radio1.checked == true)
                state_d = 'SC';
            if(radio2.checked == true)
                state_d = 'PR';

        } else{
            r_label.style.textDecoration = 'underline';
            r_label.style.color = 'darkred';

            let span = document.createElement('div');
            let error = document.createTextNode("Estado onde trabalha precisa ser revisado.");
            span.appendChild(error);
            error_field.appendChild(span);

            verifier++;
        }
    }
}