let pessoas = [];
let erros = [];


function Pessoa(nome,idade,cor){ 
    this.nome = nome;
    this.idade = idade;
    this.cor = cor
}

// Pegar os elemento de html onde iremos a trabalhar DOM
let nome = document.querySelector('#form-nome')
let idade = document.querySelector('#form-idade')
let cor = document.querySelector ('#form-Corpreferida')
let lista = document.querySelector('#lista-adicionar')
let comparacoes = document.querySelector('#descricao')

let registroPessoaVelha = document.createElement('p')
let registroPessoaJovem = document.createElement('p')
let ListaErros = document.querySelector('#erros')


// funcion para pegar os dados dos usuários, crear a nova pessoa y pasar esos objetos para un array, lista
function AdicionandoPessoas(){
    if (ValidandoCampos() != 0){   
    let nomePessoa = nome.value;
    let idadePessoa = idade.value;
    let corPreferidaPessoa = cor.value;
    let NovaPessoa = new Pessoa(nomePessoa,idadePessoa,corPreferidaPessoa)
    pessoas.push(NovaPessoa);
    // criar novos elementos com o dom para mostrar esses dados, a lista que pegamos com query selector é nosso elemento pai e vamos crear um filho para essa lista que seria como un item para ir adicionando os dados que a gente quer, adicionamos el elemtos asi:
    let NovaPessoaLista = document.createElement('li')
    NovaPessoaLista.innerHTML = `Nome: ${nomePessoa} <br> Idade: ${idadePessoa} anos <br> Cor Preferida: ${corPreferidaPessoa}`;
    NovaPessoaLista.classList.add('list-group-item')
    // Adicionar el elemento creado a la lista, al elemento pai
    lista.appendChild (NovaPessoaLista);
    form.reset();
 } else {
    ListaErros.textContent = erros.join(', ')
 }
}


// Mostrar os Registros creados, tenemos que hacer una nueva función para eso para que aparezca na tela

// Ordenar  persona mas vieja
function PessoaMaisVelha(NovaPessoa){
    NovaPessoa.sort(function(a, b) {
        return a.idade - b.idade
    });
    let MaisVelho = NovaPessoa[NovaPessoa.length - 1]; 
    return MaisVelho;
}

function MostrarPessoaMaisVelha() { 
     let pessoaMaisVelha = PessoaMaisVelha(pessoas); 
     registroPessoaVelha.textContent = `A pessoa mais velha é: ${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos e cor favorita ${pessoaMaisVelha.cor}`
     comparacoes.appendChild (registroPessoaVelha)
     return 
  }

  // Ordenar  persona mas jovem
function PessoaMaisJovem(NovaPessoa){
    NovaPessoa.sort(function(a, b) {
        return b.idade - a.idade
    });
    let MaisJovem = NovaPessoa[NovaPessoa.length - 1]; 
    return MaisJovem;
}

function MostrarPessoaMaisJovem() { 
     let pessoaMaisJovem = PessoaMaisJovem(pessoas); 
     registroPessoaJovem.textContent = `A pessoa mais Jovem é: ${pessoaMaisJovem.nome} com ${pessoaMaisJovem.idade} anos e cor favorita ${pessoaMaisJovem.cor}`
     comparacoes.appendChild (registroPessoaJovem)
     return 
  }

// Validação
function ValidandoCampos(){
    if(nome.value == ""){
        alert('precisa preencher o campo nome')
        erros.push('campo nome é obrigatorio')
        nome.focus()
        return 0
    } if (nome.value.leng <2){
        erros.push ('campo nome deve ter pelo menos 3 caracteres')
        alert('O campo nome está errado')

    } else if (idade.valua ==""){
        alert('campo idade é obrigatorio')
        erros.push('campo idade é obrigatorio')
        idade.focus()
        return 0
    }
}

document.querySelector('#btn-submit').addEventListener('click',function(evt){
    evt.preventDefault();
 } )
 document.querySelector('#btn-submit').addEventListener('click',AdicionandoPessoas)
 document.querySelector('#btn-submit').addEventListener('click',MostrarPessoaMaisVelha)
 document.querySelector('#btn-submit').addEventListener('click',MostrarPessoaMaisJovem)
 document.querySelector('#btn-submit').addEventListener('click',ValidandoCampos)
 