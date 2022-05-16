//contato.js
function validaForm(){
    var nome = document.querySelectorAll('#nome')[0];
    var erro = document.querySelectorAll('#erro')[0];
    var email = document.querySelectorAll('#email')[0];
    var mensagem = document.querySelectorAll('#mensagem')[0];



    if (nome.value==''){
        erro.innerHTML = 'Preencha o nome';
        
        nome.focus();
        return false;
    }

    if (email.value==''){
        erro.innerHTML = 'Preencha o email';
        email.focus();
        return false;
    }
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/;
    if (!(regexEmail.test(email.value))) {
        erro.innerHTML='Email invalido'
        email.focus();
        return false
    }
    if (mensagem.value==''){
        erro.innerHTML = 'Preencha o campo de mensagem';
        
        mensagem.focus();
        return false;
    }
    return true;
}