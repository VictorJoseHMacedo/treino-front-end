


function validarLogin(value) {
    event.preventDefault();

    const nome = event.target.querySelector('#nome');
    const sobrenome = event.target.querySelector('#sobrenome');
    const email = event.target.querySelector('#email');
    const senha = event.target.querySelector('#senha');

    const erroNome = event.target.querySelector('#erro-nome');
    const erroSobrenome = event.target.querySelector('#erro-sobrenome');
    const erroEmail = event.target.querySelector('#erro-email');
    const errosenha = event.target.querySelector('#erro-senha');

    const erroMsg = "*Campo obrigatório"

    if (nome.value === '') {
        erroNome.style.visibility = 'visible'
        erroNome.style.fontFamily = 'Raleway'
        erroNome.style.fontSize = '10px'
        erroNome.style.color = 'red'
        erroNome.textContent = erroMsg
        nome.style.border = '2px solid red'
    } else {
        erroNome.style.visibility = 'hidden'
        nome.style.border = '2px solid gray'
    };

    if (sobrenome.value === '') {
        erroSobrenome.style.visibility = 'visible'
        erroSobrenome.style.fontFamily = 'Raleway'
        erroSobrenome.style.fontSize = '10px'
        erroSobrenome.style.color = 'red'
        erroSobrenome.textContent = erroMsg
        sobrenome.style.border = '2px solid red'
    } else {
        erroSobrenome.style.visibility = 'hidden'
        sobrenome.style.border = '2px solid gray'
    };

    if (email.value === '') {
        erroEmail.style.visibility = 'visible'
        erroEmail.style.fontFamily = 'Raleway'
        erroEmail.style.fontSize = '10px'
        erroEmail.style.color = 'red'
        erroEmail.textContent = erroMsg
        email.style.border = '2px solid red'
    } else {
        erroEmail.style.visibility = 'hidden'
        email.style.border = '2px solid gray'
    };

    if (senha.value === '') {
        errosenha.style.visibility = 'visible'
        errosenha.style.fontFamily = 'Raleway'
        errosenha.style.fontSize = '10px'
        errosenha.style.color = 'red'
        errosenha.textContent = erroMsg
        senha.style.border = '2px solid red'
    } else {
        errosenha.style.visibility = 'hidden'
        senha.style.border = '2px solid gray'
    };

    
}
