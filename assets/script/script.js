const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const assunto = document.querySelector('#assunto')
const mapa = document.querySelector('#maps')
let contador = document.querySelector('#contador')
contador.innerHTML = '0 / 100'

// ?variaveis de validação
let nomeOk = false
let emailOk = false
let assuntoOk = false

function subirTela(){
  window.scrollTo(0,0)
}

function darkMode(){
  
}

function validarNome() {
  const txtNome = document.querySelector('#txtNome')

  if (nome.value.length >= 3) {
    txtNome.style.color = '#26733a';
    txtNome.innerHTML = 'Nome válido ✔';
    nomeOk = true;
  } else {
    txtNome.style.color = '#732626';
    txtNome.innerHTML = 'Nome inválido - Insira pelo menos 3 caracteres ❌';
  }
}

function validarEmail() {
  let txtEmail = document.querySelector('#txtEmail');

  // if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
  //   txtEmail.innerHTML = 'E-mail inválido - preciso de um @ e de um . ❌';
  //   txtEmail.style.color = '#732626';
  // } else {
  //   txtEmail.innerHTML = 'E-mail válido ✔';
  //   txtEmail.style.color = '#26733a';
  //   emailOk = true;
  // }

  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(email.value.match(regex)){
    txtEmail.innerHTML = 'E-mail válido ✔';
    txtEmail.style.color = '#26733a';
    emailOk = true;
  } else {
    txtEmail.innerHTML = 'E-mail inválido - preciso de um @ e de um . ❌';
    txtEmail.style.color = '#732626';
  }
}

function validarAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto');

    contador.innerHTML = `${assunto.value.length} / 100`

  if (assunto.value.length > 100) {
    txtAssunto.innerHTML =
      'Texto é muito grande, digite no máximo 100 caracteres ❌';
    txtAssunto.style.color = '#732626';
    txtAssunto.style.display = 'block';
  } else {
    txtAssunto.style.display = 'none';
    assuntoOk = true;
  }
}

function enviar() {
  if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!');
  } else {
    alert('Preencha o formulário corretamente antes de enviar...');
  }
}