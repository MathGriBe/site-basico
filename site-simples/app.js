// Boa prática no JavaScript utilizar o ';' no final de cada script, porém pode ser omitido (não ultilizar);
'use strict'

// document.querySelector obtêm a rederência do botão;
// switcher = manipulador de eventos, na 'cont' a seguir ele se referência que o manipulador vai manipular o botão referenciado como '.btn';
const switcher = document.querySelector('.btn');

// manipulador (switcher) vai fazer/adicionar um evento a lista quando clicado;
switcher.addEventListener('click', function() {

    // toggle e um elemento para alternar o elemento para outra classe, no caso 'dark-theme';
    document.body.classList.toggle('dark-theme')

    // variavel que pegará o nome da classe no body do HTML;
    var className = document.body.className;

    // 'if' = condicional, no caso se o nome da classe for igual literalmente ao termo escrito será feito uma ação;
    if(className == "light-theme") {
        // Muda o Texto
        this.textContent = "Dark";
    }
    // 'else' = caso não caia em nenhuma condicional será feito tal ação;
    else {
        this.textContent = "Light"
    }

    // 'console.log' é uma instrução que não aparecerá na tela do site, apenas na ferramenta (console) | (Comando para acessar o console =Crtl + Shift + I)
    console.log('currebt class name: ' + className);
});