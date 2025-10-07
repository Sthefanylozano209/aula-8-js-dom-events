//Selecionando elementos HTML
const main = document.querySelector('main');
const section = document.querySelector('#hero');
console.log(main);
console.log(section);

//criando um novo elemento html
let titulo = document.createElement('h1');
console.log(titulo);
//inseriu o elemento criado na section
section.appendChild(titulo);

let counter = 0;
//adicionando texto em um elemento
titulo.textContent = "Hello World!"
//adicionando classes ao elemento
titulo.classList.add('titulo');
//cria novo elemento
let container = document.createElement('div');
section.appendChild(container);
//Monitorando eventos no navegador
titulo.addEventListener('click', (e)=>{
    //adiciona ou remove uma classe
    titulo.classList.toggle('active');
    counter++;
    //recupera html dentro da div
    let containerValue = container.innerHTML;
    //mantem o conteudo anterior da div e concatena um novo html
    container.innerHTML = containerValue + `<p>${counter} º Texto adicionado pelo evento</p>`;
})