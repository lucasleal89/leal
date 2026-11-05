// Ordena 2 números sem sort
function ordenarDois(arr) {
  let [a, b] = arr;
  return a > b ? [b, a] : [a, b];
}

// Ordena 3 números sem sort
function ordenarTres(arr) {
  let [a, b, c] = arr;
  if (a > b) [a, b] = [b, a];
  if (a > c) [a, c] = [c, a];
  if (b > c) [b, c] = [c, b];
  return [a, b, c];
}

function testarOrdenacao() {
  console.log("2 Números (5, 2):", ordenarDois([5, 2]));
  console.log("3 Números (9, 1, 4):", ordenarTres([9, 1, 4]));
  console.log("Bubble Sort ([8, 3, 1, 7, 2]):", bubbleSort([8, 3, 1, 7, 2]));
  alert("Resultados de ordenação impressos no Console (F12)!");
}

// Inverter array digitado pelo usuário (fixo em 3 números)
function inverterArrayUsuario() {
  const quant = parseInt(prompt("Quantos elementos deseja inserir?")) || 3;
  let vetor = [];
  for (let i = 0; i < quant; i++) {
    vetor.push(prompt(`Digite o ${i + 1}º elemento:`));
  }
  
  let vetorInvertido = [];
  for (let i = vetor.length - 1; i >= 0; i--) {
    vetorInvertido.push(vetor[i]);
  }

  alert(`Original: ${vetor.join(", ")}\nInvertido: ${vetorInvertido.join(", ")}`);
}

// Bubble Sort para qualquer tamanho
function bubbleSort(arr) {
  let cop = [...arr];
  let n = cop.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (cop[j] > cop[j + 1]) {
        let temp = cop[j];
        cop[j] = cop[j + 1];
        cop[j + 1] = temp;
      }
    }
  }
  return cop;
}

// Retorna todos os índices de um valor
function buscarTodosIndices(vetor, busca) {
  let indices = [];
  vetor.forEach((elem, index) => {
    if (elem === busca) indices.push(index);
  });
  return indices;
}

function testarBuscaIndices() {
  const dados = [10, 20, 30, 20, 40, 20, 50];
  const res = buscarTodosIndices(dados, 20);
  alert(`Array: [${dados}]\nO número 20 aparece nos índices: ${res.join(", ")}`);
}

// Sequência de Fibonacci usando elementos do array
function gerarFibonacci() {
  const n = parseInt(prompt("Digite um número inteiro positivo para termos de Fibonacci:")) || 5;
  if (n <= 0) return;
  
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  alert(`Fibonacci (${n} termos): ${fib.slice(0, n).join(", ")}`);
}

// Fatorial acumulado via array
function gerarFatorial() {
  const n = parseInt(prompt("Digite um número para calcular os fatoriais até ele:")) || 4;
  let fat = [1]; // Fatorial de 0! = 1 por padrão matemático (ou 0 conforme contexto da questão)
  for (let i = 1; i <= n; i++) {
    fat[i] = i * fat[i - 1];
  }
  alert(`Fatoriais até ${n}: ${fat.join(", ")}`);
}

// Jogo da Velha simples usando Matriz 3x3
let matrizVelha = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let jogadorAtual = 'X';

function renderizarTabuleiro() {
  const tab = document.getElementById('tabuleiro');
  tab.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cel = document.createElement('div');
      cel.className = 'celula';
      cel.innerText = matrizVelha[i][j];
      cel.onclick = () => jogadaVelha(i, j);
      tab.appendChild(cel);
    }
  }
}

function jogadaVelha(linha, coluna) {
  if (matrizVelha[linha][coluna] === '') {
    matrizVelha[linha][coluna] = jogadorAtual;
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
    document.getElementById('status-velha').innerText = `Vez do Jogador: ${jogadorAtual}`;
    renderizarTabuleiro();
  }
}

function reiniciarJogoVelha() {
  matrizVelha = [['','',''], ['','',''], ['','','']];
  jogadorAtual = 'X';
  document.getElementById('status-velha').innerText = `Vez do Jogador: ${jogadorAtual}`;
  renderizarTabuleiro();
}

// Soma, Média e Primos
function calcularSoma(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function calcularMedia(arr) {
  return arr.length ? calcularSoma(arr) / arr.length : 0;
}

function ehPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function filtrarPrimos(arr) {
  return arr.filter(ehPrimo);
}

function testarEstatisticas() {
  const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  alert(`Números: ${numeros.join(", ")}\n` +
        `Soma: ${calcularSoma(numeros)}\n` +
        `Média: ${calcularMedia(numeros)}\n` +
        `Primos: ${filtrarPrimos(numeros).join(", ")}`);
}

// Frutas em ordem decrescente
function ordenarFrutas() {
  const frutas = ["mamão", "uva", "melancia", "banana"];
  const res = [...frutas].sort().reverse();
  console.log("Frutas decrescente:", res);
  alert("Frutas em ordem decrescente: " + res.join(", "));
}

// Preencher select de estados ordenado
function carregarEstados() {
  const estados = ["GO", "MG", "SP", "RJ", "AM", "PA"];
  const ordenados = [...estados].sort();
  const select = document.getElementById('select-estados');
  if (select) {
    select.innerHTML = '';
    ordenados.forEach(est => {
      const opt = document.createElement('option');
      opt.value = est;
      opt.textContent = est;
      select.appendChild(opt);
    });
  }
}

// Agenda Matriz 5x2
function montarAgenda() {
  let agenda = [
    ["Segunda", ""],
    ["Terça", ""],
    ["Quarta", ""],
    ["Quinta", ""],
    ["Sexta", ""]
  ];

  for (let i = 0; i < 5; i++) {
    agenda[i][1] = prompt(`Informe o compromisso para ${agenda[i][0]}:`) || "Livre";
  }

  let html = "<ul>";
  agenda.forEach(item => {
    html += `<li><strong>${item[0]}:</strong> ${item[1]}</li>`;
  });
  html += "</ul>";

  document.getElementById('saida-agenda').innerHTML = html;
}


/* ===================================================
   2. SEÇÃO DE DOM
   =================================================== */

// Gerador de cor aleatória
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Criar quadrado com evento de hover
const btnCriarQuadrado = document.getElementById('btn-criar-quadrado');
if (btnCriarQuadrado) {
  btnCriarQuadrado.onclick = function() {
    const quad = document.createElement('div');
    quad.className = 'box';
    quad.onmouseover = function() {
      quad.style.backgroundColor = getRandomColor();
    };
    document.getElementById('container-quadrados').appendChild(quad);
  };
}

// Lista Dinâmica de Nomes
let nomes = ["Diego", "Gabriel", "Lucas"];

function renderizarNomes() {
  const ul = document.getElementById('lista-nomes');
  if (!ul) return;
  ul.innerHTML = '';
  nomes.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    ul.appendChild(li);
  });
}

function adicionarNome() {
  const input = document.getElementById('input-nome');
  const valor = input.value.trim();
  if (valor !== "") {
    nomes.push(valor);
    input.value = "";
    renderizarNomes();
  }
}


/* ===================================================
   3. SEÇÃO DE DOM E FORMULÁRIOS
   =================================================== */

// Mudar Cor de Fundo da Página
function mudarCorFundo(cor) {
  document.body.style.backgroundColor = cor;
}

// Alternar exibição do parágrafo
function alternarParagrafo() {
  const p = document.getElementById('texto-toggle');
  p.style.display = (p.style.display === 'none') ? 'block' : 'none';
}

// Validação de formulário de login
function validarLogin(event) {
  event.preventDefault();
  const l = document.getElementById('login').value.trim();
  const s = document.getElementById('senha').value;
  const cs = document.getElementById('confirma-senha').value;

  if (!l || !s || !cs) {
    alert("Preencha todos os campos!");
    return false;
  }
  if (s !== cs) {
    alert("As senhas não coincidem!");
    return false;
  }
  if (s.length < 6 || s.length > 10) {
    alert("A senha deve ter entre 6 e 10 caracteres!");
    return false;
  }

  alert("Cadastro realizado com sucesso!");
  return true;
}

// Palíndromo
function verificarPalindromo() {
  const pal = document.getElementById('palavra-palindromo').value.trim().toLowerCase();
  if (!pal) return;
  const invertida = pal.split('').reverse().join('');
  const res = document.getElementById('res-palindromo');

  if (pal === invertida) {
    res.innerText = `"${pal}" é um palíndromo!`;
  } else {
    res.innerText = `"${pal}" NÃO é um palíndromo!`;
  }
}

// Inverter 5 inputs de nomes
function inverterCamposNomes() {
  const inputs = Array.from(document.querySelectorAll('.nome-inv'));
  const valores = inputs.map(inp => inp.value);
  valores.reverse();
  inputs.forEach((inp, idx) => {
    inp.value = valores[idx];
  });
}

// Ativar/Desativar campos CPF e CNPJ no Cadastro de Cliente
function atualizarTipoPessoa() {
  const isPF = document.querySelector('input[name="tipoPessoa"]:checked').value === 'PF';
  
  const cpf = document.getElementById('cpf');
  const cnpj = document.getElementById('cnpj');
  const nascimento = document.getElementById('nascimento');

  cpf.disabled = !isPF;
  nascimento.disabled = !isPF;
  cnpj.disabled = isPF;

  if (isPF) {
    cnpj.value = '';
  } else {
    cpf.value = '';
    nascimento.value = '';
  }
}

// Restrições de entrada apenas numérica para CEP, CPF e Nascimento
function aplicarMascaraApenasNumeros() {
  ['cpf', 'nascimento', 'cep'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
      });
    }
  });
}

// Intercalar 2 palavras em um campo desabilitado
function intercalarCampos() {
  const p1 = document.getElementById('p1').value;
  const p2 = document.getElementById('p2').value;
  let resultado = '';
  const maxLen = Math.max(p1.length, p2.length);

  for (let i = 0; i < maxLen; i++) {
    if (i < p1.length) resultado += p1[i];
    if (i < p2.length) resultado += p2[i];
  }

  document.getElementById('resultado-intercalado').value = resultado;
}

// Mostrar tabela com estatísticas de 3 números
function calcularEstatisticasTabela() {
  const n1 = parseFloat(document.getElementById('num1').value) || 0;
  const n2 = parseFloat(document.getElementById('num2').value) || 0;
  const n3 = parseFloat(document.getElementById('num3').value) || 0;

  const nums = [n1, n2, n3];
  const soma = n1 + n2 + n3;
  const media = soma / 3;
  const prod = n1 * n2 * n3;
  const maior = Math.max(...nums);
  const menor = Math.min(...nums);

  const html = `
    <table>
      <tr><th>Números</th><th>Soma</th><th>Média</th><th>Produto</th><th>Maior</th><th>Menor</th></tr>
      <tr>
        <td>${nums.join(', ')}</td>
        <td>${soma}</td>
        <td>${media.toFixed(2)}</td>
        <td>${prod}</td>
        <td>${maior}</td>
        <td>${menor}</td>
      </tr>
    </table>
  `;
  document.getElementById('tabela-estatisticas').innerHTML = html;
}

// Destacar busca no texto
function pesquisarEDestacar() {
  const termo = document.getElementById('termo-busca').value.trim();
  const divTexto = document.getElementById('texto-destaque');
  const msg = document.getElementById('msg-busca');
  
  // Limpar formatação anterior mantendo o texto puro
  const textoOriginal = "Desenvolver aplicações web requer bastante prática em JavaScript. O DOM nos permite manipular elementos HTML, enquanto os arrays ajudam a organizar os dados. Praticar lógica com JavaScript é essencial para evoluir como desenvolvedor.";

  if (!termo) {
    divTexto.innerHTML = textoOriginal;
    msg.innerText = "";
    return;
  }

  const regex = new RegExp(`(${termo})`, 'gi');
  const ocorrencias = (textoOriginal.match(regex) || []).length;

  if (ocorrencias > 0) {
    divTexto.innerHTML = textoOriginal.replace(regex, `<span class="highlight">$1</span>`);
    msg.innerText = `Foram encontradas ${ocorrencias} ocorrências.`;
    msg.style.color = "green";
  } else {
    divTexto.innerHTML = textoOriginal;
    msg.innerText = "A busca não retornou nenhum resultado.";
    msg.style.color = "red";
  }
}

// Ampliar Imagem na Galeria
function ampliarImagem(src) {
  const container = document.getElementById('area-ampliada');
  container.innerHTML = `<img src="${src}" alt="Ampliada">`;
}

// Inicializações ao carregar a página
window.onload = function() {
  carregarEstados();
  renderizarNomes();
  renderizarTabuleiro();
  aplicarMascaraApenasNumeros();
};