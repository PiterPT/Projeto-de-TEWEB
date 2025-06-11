let lastScrollTop = 0; // Armazena a posição anterior do scroll
let barra1 = document.querySelector('#barra1'); // Seleciona o elemento uma vez
barra1.classList.add('active'); // Adiciona a classe  active a barra1
// Função para verificar a largura da tela e adicionar o evento de scroll
function handleScrollEvent() {
  const currentScrollTop = document.documentElement.scrollTop;

  if (currentScrollTop < lastScrollTop) {
    // Scroll para cima
    if (!barra1.classList.contains('active')) {
      barra1.classList.add('active'); // Adiciona a classe apenas se ainda não estiver presente
    }
  } else if (currentScrollTop > lastScrollTop) {
    // Scroll para baixo
    if (barra1.classList.contains('active')) {
      barra1.classList.remove('active'); // Remove a classe apenas se estiver presente
    }
  }

  lastScrollTop = currentScrollTop; // Atualiza a posição anterior do scroll
}



let previousSize = { width: window.innerWidth, height: window.innerHeight };

window.addEventListener('resize', () => {
  const currentSize = { width: window.innerWidth, height: window.innerHeight };

  // Verifica se houve uma alteração significativa no tamanho da janela
  if (currentSize.width !== previousSize.width || currentSize.height !== previousSize.height) {
    if (window.outerWidth === screen.width && window.outerHeight === screen.height) {
      atualizaBarra1()
    } else {
      atualizaBarra1();
    }

    // Atualiza o tamanho anterior
    previousSize = currentSize;
  }
});

// Chama a função ao carregar e ao redimensionar a janela

window.addEventListener('scroll', handleScrollEvent);
//verificar se a versão mobile ativa o eventListener "resize"

function atualizaBarra1() {
  var buttonsPromos = document.querySelectorAll(".botao-promocao");
  if (window.innerWidth > 768) {
    // Adiciona o evento de scroll apenas se a largura da tela for maior que 768px(relacionado á primeira barra do navbar)
    window.addEventListener('scroll', handleScrollEvent);

    buttonsPromos.forEach(btnPromo => {

      btnPromo.innerHTML = `Tarifa Promo`;

    });
  } else {

    buttonsPromos.forEach(btnPromo => {

      btnPromo.innerHTML = `Promo`;

    });

    // remove o evento de scroll apenas se a largura da tela for menor ou igual que 768px(relacionado á primeira barra do navbar)
    window.removeEventListener('scroll', handleScrollEvent); // Remove o evento em resoluções menores
  }

}; // Verifica novamente se a janela for redimensionada
['load', 'resize'].forEach(event => {
  window.addEventListener(event, atualizaBarra1());
});
/* NavBar Javascript */


document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function () {
    // Remove a classe de todos os itens
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('border-active'));

    // Adiciona a classe ao elemento clicado
    this.classList.add('border-active');
  });
});

//Java scrip responsavel por todo o controlo da área de pesquisa
document.querySelector(".pesquisa").addEventListener("click", function () {

  var element = document.getElementById('containerPesquisa');
  element.classList.toggle('active');
  // esconde o menu ao abrir a pesquisa 


  var body = document.getElementById('body');/* troca entre o icon de pesquisa e o icon de fechar "X" */
  var subMenu = document.getElementById('sandwichMenu');
  //verifica se o menu está aberto
  if (subMenu.classList.contains('active')) {
    subMenu.classList.remove('active');
    body.classList.remove('blur');//retira o blur para por defeito n o ter e n quebrar o ciclo de blur quando aberto e n ter blur quando fechado
  }
  body.classList.toggle('blur');

  var element2 = document.getElementById('barra2');/* esconde a barra de navegação inferior */
  element2.classList.toggle('desactive');

  var element3 = document.querySelector('#pesquisaIconOpen');/* troca entre o icon de pesquisa e o icon de fechar "X" */
  element3.classList.toggle('desactive');

  var element3 = document.querySelector('#pesquisaIconClose');/* troca entre o icon de pesquisa e o icon de fechar "X" */
  element3.classList.toggle('active');

  var body = document.getElementById('body');/* troca entre o icon de pesquisa e o icon de fechar "X" */


  //Remove outros menus abertos
  var btnMenu = document.querySelector('.hamburger');
  btnMenu.classList.remove('change');

  const scrollDisabled = body.classList.contains('blur'); // Se blur está ativo, desativa o scroll
  document.body.style.overflow = scrollDisabled ? 'hidden' : ''; // Ativa/desativa scroll baseado no estado


});



// verificar (nota)
/* função responsavel por marcar os itens selecionados na navbar*/
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function (e) {
    // Remove a classe de todos os itens
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('border-active'));

    // Define a posição do clique
    const x = e.clientX - this.getBoundingClientRect().left;

    // Posiciona o início da expansão no ponto clicado
    this.style.setProperty('--ripple-x', `${x}px`);

    // Adiciona a classe ao item clicado
    this.classList.add('border-active');
  });
});



/* script do formulário abaixo do bannner*/

// JavaScript responsável por todo o controle da área de pesquisa
document.addEventListener("DOMContentLoaded", function () {
  const botao = document.querySelector('.botao-continuar');
  const botaoEstadoVoo = document.querySelector('.botao-continuar-EV');

  botao.addEventListener("click", function () {
    // Alterna a classe 'active' em todos os elementos com a classe .formInferior
    document.querySelectorAll('.formInferior').forEach(el => el.classList.toggle('active'));

    // Verifica o estado atual baseado no atributo data-state
    if (botao.getAttribute('data-state') === 'open') {
      // Alterna para "Abrir"
      botao.innerHTML = "Continuar <span>\u25BC</span>";
      botao.setAttribute('data-state', 'closed');
    } else {
      // Alterna para "Fechar"
      botao.innerHTML = "Fechar <span>\u25B2</span>";
      botao.setAttribute('data-state', 'open');
      /* Por defeito o butão toma o estado "Open"
       no caso cai sempre ao carregar pela primeira vez no segundo grupo de condições
        assim tomando esse estado e ao clicar novamente como estará open 
        cairá na primeira e fica closed como estado */
    }
  });

  botaoEstadoVoo.addEventListener("click", function () {
    // Alterna a classe 'active' em todos os elementos com a classe .formInferior
    document.querySelectorAll('.formInferior').forEach(el => el.classList.toggle('active'));

    // Verifica o estado atual baseado no atributo data-state
    if (botaoEstadoVoo.getAttribute('data-state') === 'open') {
      // Alterna para "Abrir"
      botaoEstadoVoo.innerHTML = "Continuar <span>\u25BC</span>";
      botaoEstadoVoo.setAttribute('data-state', 'closed');
    } else {
      // Alterna para "Fechar"
      botaoEstadoVoo.innerHTML = "Fechar <span>\u25B2</span>";
      botaoEstadoVoo.setAttribute('data-state', 'open');
      /* Por defeito o butão toma o estado "Open"
       no caso cai sempre ao carregar pela primeira vez no segundo grupo de condições
        assim tomando esse estado e ao clicar novamente como estará open 
        cairá na primeira e fica closed como estado */
    }
  });
});
const milhas = document.getElementById("reservaMilhas");
const voos = document.getElementById("reservaVoo");
const estadoVoos = document.getElementById("estadoVoos");
const containerM = document.getElementById("segunda-aba");
const containerV = document.getElementById("primeira-aba");
const containerEV = document.getElementById("terceira-aba");
document.querySelector("#reservaMilhas").addEventListener("click", function () {


  // Ativa 'milhas' e desativa 'voos'
  milhas.classList.add('ativa');
  voos.classList.remove('ativa');
  estadoVoos.classList.remove('ativa');

  containerM.classList.add('active');
  containerV.classList.remove('active');
  containerEV.classList.remove('active');
  document.querySelectorAll('.formInferior').forEach(el => el.classList.remove('active'));
});

document.querySelector("#reservaVoo").addEventListener("click", function () {


  // Ativa 'voos' e desativa 'milhas'
  voos.classList.add('ativa');
  milhas.classList.remove('ativa');
  estadoVoos.classList.remove('ativa');

  containerM.classList.remove('active');
  containerEV.classList.remove('active');
  containerV.classList.add('active');
});

document.querySelector("#estadoVoos").addEventListener("click", function () {


  // Ativa 'voos' e desativa 'milhas'
  estadoVoos.classList.add('ativa');
  milhas.classList.remove('ativa');
  voos.classList.remove('ativa');
  document.getElementById("primeira-aba").classList.remove('active');
  containerM.classList.remove('active');
  containerV.classList.remove('active');
  containerEV.classList.add('active');
});
/*script sub menu */
document.querySelector(".navbar-toggler").addEventListener("click", function () {

  var subMenu = document.getElementById('sandwichMenu');
  subMenu.classList.toggle('active');
  var body = document.getElementById('body');/* troca entre o icon de pesquisa e o icon de fechar "X" */
  var containerPesquisa = document.getElementById('containerPesquisa');

  //verifica se a barra de pesquisa se encotra aberda e a fecha
  if (containerPesquisa.classList.contains('active')) {
    containerPesquisa.classList.remove('active');

    body.classList.remove('blur');//retira o blur para por defeito n o ter e n quebrar o ciclo de blur quando aberto e n ter blur quando fechado
  }

  body.classList.toggle('blur');
  containerPesquisa.classList.remove('active');

  const scrollDisabled = body.classList.contains('blur'); // Se blur está ativo, desativa o scroll
  document.body.style.overflow = scrollDisabled ? 'hidden' : ''; // Ativa/desativa scroll baseado no estado

});

/*script sub menu */
document.querySelector("#loginBtn").addEventListener("click", function () {


  var subMenuLogin = document.querySelector(".subMenuLogin");
  subMenuLogin.classList.toggle("active");
  // esconde o menu ao abrir a pesquisa 

  var subMenu = document.getElementById('sandwichMenu');
  //verifica se o menu está aberto
  if (subMenu.classList.contains('active')) {
    subMenu.classList.remove('active');
    body.classList.remove('blur');//retira o blur para por defeito n o ter e n quebrar o ciclo de blur quando aberto e n ter blur quando fechado
  }


  //Remove outros menus abertos
  var btnMenu = document.querySelector('.hamburger');
  btnMenu.classList.remove('change');

});
//Verificar
// Script para submenu de idiomas

document.querySelector("#btnLinguas").addEventListener("click", function () {


  var subMenuLogin = document.querySelector(".subMenuLinguas");
  subMenuLogin.classList.toggle("active");

  document.querySelectorAll(".lingua-link").forEach(linguaLink => {
    // Adiciona um evento de clique a cada botão
    linguaLink.addEventListener("click", () => {
      // Encontra o input dentro do botão clicado
      const inputAssociado = linguaLink.querySelector(".InputLingua");
      if (inputAssociado) {
        // Aplica a classe "desactive" a todos os links, exceto os que têm os valores "pt" ou "en"


        // Define o texto do menu com o valor do input
        changeLanguage(inputAssociado.value)
        document.getElementById("linguaMenu").textContent = inputAssociado.value;
      }
    });
  });
  //script que verifica as linguas disponiveis
  document.querySelectorAll(".lingua-link").forEach(link => {
    const input = link.querySelector(".InputLingua");
    if (input && (input.value !== "Portugal-PT" && input.value !== "Portugal-EN")) {
      link.classList.add("desactive"); // Desativa o link
    } else {
      link.classList.remove("desactive"); // Garante que os links com "pt" ou "en" não são desativados
    }
  });

  // esconde o menu ao abrir a pesquisa 
  var subMenu = document.getElementById('sandwichMenu');
  //verifica se o menu está aberto
  if (subMenu.classList.contains('active')) {
    subMenu.classList.remove('active');
    body.classList.remove('blur');//retira o blur para por defeito n o ter e n quebrar o ciclo de blur quando aberto e n ter blur quando fechado
  }


  //Remove outros menus abertos
  var btnMenu = document.querySelector('.hamburger');
  btnMenu.classList.remove('change');

});
function toggleMenu() {

  var btnMenu = document.querySelector('.hamburger');
  btnMenu.classList.toggle('change');

  //fecha a pesquisa caso ela esteja aberta

  var barra2 = document.getElementById('barra2');/* esconde a barra de navegação inferior */
  barra2.classList.remove('desactive');

  var openIcon = document.querySelector('#pesquisaIconOpen');/* troca entre o icon de pesquisa e o icon de fechar "X" */
  openIcon.classList.remove('desactive');

  var closeIcon = document.querySelector('#pesquisaIconClose');/* troca entre o icon de pesquisa e o icon de fechar "X" */
  closeIcon.classList.remove('active');



}

/* Script de pesquisa de voos */

document.querySelector(".btn-pesquisaVoos").addEventListener("click", function () {
  var tipoViagem = document.getElementById("tipo-viagem");
  var partida = document.getElementById("partida");
  var destino = document.getElementById("chegada");
  var container = document.getElementById("resultado");
  var estadoVoo = "";
  // Captura o valor do input
  var data = document.getElementById("data").value;
  var numVoo = 0;
  var content = "";

  if (!data) {
    alert("Por favor, insira uma data!");
    return;
  } else {
    container.classList.add("active")
  }

  // Converte a string para um objeto Date
  var dataObj = new Date(data);

  // extrai os componentes e quebra em dia,mes e ano
  var dia = dataObj.getDate(); // Dia
  var mes = dataObj.getMonth() + 1; // Mês (0-11, então somamos 1)
  var ano = dataObj.getFullYear(); // Ano
  if (tipoViagem.value != "ida") {
    if (mes % 2 == 0) {
      estadoVoo = "No horário";
    } else {
      estadoVoo = "Chegou";
    }
  } else {
    if (dia % 2 == 0) {
      estadoVoo = "No horário";
    } else {
      estadoVoo = "Atrasado";
    }
  }
  if (partida.value != "Lisboa") {
    dataObj.setHours(12); // Define as horas como 10;
    dataObj.setMinutes(10); // Define os minutos como 45
    /* var segundos = dataObj.setSeconds(0);*/ // este campo define os segundos
  } else {
    dataObj.setHours(10); // Define as horas como 10;
    dataObj.setMinutes(5); // Define os minutos como 45
    /* var segundos = dataObj.setSeconds(0);*/ // este campo define os segundos
  }


  var horas = dataObj.getTime() + 8

  // Somar 8 horas (em milissegundos)
  var horasParaSomar = 8;//valores da diferença de horas entre os resultados da pesquisa


  var timestampComHoras = horas  // 8 horas em milissegundos

  // Converte o novo timestamp para um objeto Date
  var novaDataObj = new Date(timestampComHoras);

  // Exibe a hora formatada
  var horaFormatada = novaDataObj.toLocaleTimeString(); // Hora no formato local


  var j = 1;

  for (let i = 0; i < 2; i++) {


    content += `<div class="seccaoVoos caixa-promocao" class="resultadoVoo">
         <div class="detalhes-promocao">
                <p class="destino-promocao">TP `+ j + `</p>
            </div>
            <div class="detalhes-promocao">
                <p class="destino-promocao">`+ dia + `/` + mes + `/` + ano + `</p>
            </div>
             <div class="detalhes-promocao">
                <p class="destino-promocao">`+ horaFormatada + `</p>
            </div>
            <div class="detalhes-promocao">
                <p class="destino-promocao">`+ partida.value + `</p>
            </div>
            <div class="detalhes-promocao">
                <p class="destino-promocao">`+ destino.value + `</p>
            </div>

            <div class="detalhes-promocao">
                <p class="info-promocao">`+ tipoViagem.value + `</p>
            </div>
              <div class="detalhes-promocao">
                <p class="info-promocao">`+ estadoVoo + `</p>
            </div>
           
        </div>
        `;
    timestampComHoras = horas + (horasParaSomar * 60 * 60 * 1000);  // 8 horas em milissegundos
    // Converte o novo timestamp para um objeto Date
    novaDataObj = new Date(timestampComHoras);

    // Exibe a hora formatada
    horaFormatada = novaDataObj.toLocaleTimeString(); // Hora no formato local
    j++;
  }
  // Exibindo o resultado
  // o simbolo crase (`) é usado para evitar problemas de sistax entre aspas ("") ou plicas ('') ent ele facilitame juntar esse codigo sem ter problemas de erros.
  document.getElementById("resultado").innerHTML = `
        <div class="header-container">
         <div class="header-pesquisa">
                <p class="destino-promocao">Número do Voo</p>
            </div>
            <div class="header-pesquisa">
                <p class="destino-promocao"> Dia</p>
            </div>
             <div class="header-pesquisa">
                <p class="destino-promocao">Hora de partida</p>
            </div>
            <div class="header-pesquisa">
                <p class="destino-promocao">Local de Partida</p>
            </div>
            <div class="header-pesquisa">
                <p class="destino-promocao"> Destino</p>
            </div>
            <div class="header-pesquisa">
                <p class="destino-promocao">Tipo</p>
            </div>
             <div class="header-pesquisa">
                <p class="destino-promocao"> Estado </p>
            </div>
         
        </div>
        
 
`+ content;
});

// codigo que relaciona o menu á posição do butão login
// Obtém o botão e o submenu
const loginBtn = document.getElementById('loginBtn');
const subMenuLogin = document.querySelector('.subMenuLogin');

// Função para posicionar o submenu abaixo do botão
function positionSubMenu() {
  const btnRect = loginBtn.getBoundingClientRect(); // Obtém a posição do botão na viewport

  // Calcula as coordenadas para posicionar o submenu
  subMenuLogin.style.top = `${btnRect.bottom + window.scrollY}px`; // Alinha o submenu logo abaixo do botão
  if (window.innerWidth <= 768) {/* linha responsavel por verificar a dimensão do viewport(ecrã/janela) */
    subMenuLogin.style.left = `${btnRect.left + window.scrollX - (btnRect.left) / 5}px`; // Alinha à esquerda do botão
  } else {
    subMenuLogin.style.left = `${btnRect.left + window.scrollX}px`; // Alinha à esquerda do botão

  }
  subMenuLogin.style.display = 'block'; // Mostra a caixa
}

// Alterna a exibição do submenu
function toggleSubMenu() {
  if (subMenuLogin.style.display === 'block') {
    subMenuLogin.style.display = 'none';
  } else {
    positionSubMenu();
  }
}


// Esconde o submenu se o usuário clicar fora
function hideSubMenu(event) {
  // Verifica se o clique foi fora do submenu ou do botão
  if (!subMenuLogin.contains(event.target) && event.target !== loginBtn) {
    subMenuLogin.style.display = 'none';
  }
}

// Event listener para alternar a visibilidade do submenu ao clicar no botão
loginBtn.addEventListener('click', (event) => {
  // Impede a propagação do evento de clique para o document
  event.stopPropagation();
  toggleSubMenu();
});

// Event listener para fechar o submenu ao clicar fora
document.addEventListener('click', hideSubMenu);

// Seleciona todos os botões com a classe ".btn-SeccaoVoos"
document.querySelectorAll(".btn-SeccaoVoos").forEach(btnSeccaoVoos => {

  // Adiciona um evento de clique a cada botão
  btnSeccaoVoos.addEventListener("click", () => {
    // Remove a classe "clicado" de todos os botões
    document.querySelectorAll(".btn-SeccaoVoos").forEach(btn => {
      btn.classList.remove("clicado");
    });

    // Adiciona a classe "clicado" ao botão clicado
    btnSeccaoVoos.classList.add("clicado");
  });
});

// Função para carregar as traduções
function loadTranslations(language) {
  console.log(`Tentando carregar as traduções para o idioma: ${language}`); // Depuração para saber qual idioma está sendo carregado

  fetch('langs.json')
    .then(response => {
      if (!response.ok) {
        console.error("Erro ao carregar o arquivo langs.json:", response.status);
        return;
      }
      return response.json();
    })
    .then(data => {
      if (!data[language]) {
        console.error("Idioma não encontrado:", language);
        return;
      }

      console.log("Traduções carregadas:", data[language]); // Verifique se as traduções são carregadas corretamente

      const translations = data[language];

      // Traduções dos textos principais
      if (translations.promo_title) {
        const promoTitle = document.querySelector('.titulo-promocoes');
        if (promoTitle) {
          console.log("Traduzindo o título das promoções:", translations.promo_title);
          promoTitle.textContent = translations.promo_title;
        } else {
          console.warn("Elemento '.titulo-promocoes' não encontrado.");
        }
      }

      if (translations.explore_offers) {
        const verMais = document.querySelector('#verMais');
        if (verMais) {
          console.log("Traduzindo o botão 'explore_offers':", translations.explore_offers);
          verMais.textContent = translations.explore_offers;
        } else {
          console.warn("Elemento '#verMais' não encontrado.");
        }
      }

      if (translations.promo_alert) {
        const promoAlert = document.querySelector('#promo-alert');
        if (promoAlert) {
          console.log("Traduzindo o alerta de promoções:", translations.promo_alert);
          promoAlert.textContent = translations.promo_alert;
        } else {
          console.warn("Elemento '#promo-alert' não encontrado.");
        }
      }

      // Tradução de artigos
      const articles = translations.articles;
      if (articles) {
        console.log("Traduzindo artigos:", articles);

        const art1Title = document.querySelector('#art1 h4');
        if (art1Title) {
          console.log("Traduzindo artigo 1 título:", articles.art1_title);
          art1Title.textContent = articles.art1_title;
        } else {
          console.warn("Elemento '#art1 h4' não encontrado.");
        }

        const art1Desc = document.querySelector('#art1 p');
        if (art1Desc) {
          console.log("Traduzindo artigo 1 descrição:", articles.art1_desc);
          art1Desc.textContent = articles.art1_desc;
        } else {
          console.warn("Elemento '#art1 p' não encontrado.");
        }

        const art2Title = document.querySelector('#art2 h4');
        if (art2Title) {
          console.log("Traduzindo artigo 2 título:", articles.art2_title);
          art2Title.textContent = articles.art2_title;
        } else {
          console.warn("Elemento '#art2 h4' não encontrado.");
        }

        const art2Desc = document.querySelector('#art2 p');
        if (art2Desc) {
          console.log("Traduzindo artigo 2 descrição:", articles.art2_desc);
          art2Desc.textContent = articles.art2_desc;
        } else {
          console.warn("Elemento '#art2 p' não encontrado.");
        }

        const art3Title = document.querySelector('#art3 h4');
        if (art3Title) {
          console.log("Traduzindo artigo 3 título:", articles.art3_title);
          art3Title.textContent = articles.art3_title;
        } else {
          console.warn("Elemento '#art3 h4' não encontrado.");
        }

        const art3Desc = document.querySelector('#art3 p');
        if (art3Desc) {
          console.log("Traduzindo artigo 3 descrição:", articles.art3_desc);
          art3Desc.textContent = articles.art3_desc;
        } else {
          console.warn("Elemento '#art3 p' não encontrado.");
        }

        const art4Title = document.querySelector('#art4 h4');
        if (art4Title) {
          console.log("Traduzindo artigo 4 título:", articles.art4_title);
          art4Title.textContent = articles.art4_title;
        } else {
          console.warn("Elemento '#art4 h4' não encontrado.");
        }

        const art4Desc = document.querySelector('#art4 p');
        if (art4Desc) {
          console.log("Traduzindo artigo 4 descrição:", articles.art4_desc);
          art4Desc.textContent = articles.art4_desc;
        } else {
          console.warn("Elemento '#art4 p' não encontrado.");
        }
      }
      // Tradução do seccao voos
      const voos = translations.page;
      if (voos) {
        console.log("Traduzindo o artigos:", voos);

        Object.keys(voos).forEach((key) => {
          const element = document.querySelector(`[id="${key}"]`);
          if (element) {
            // Verifica se o elemento é um input ou outro com o atributo placeholder
            if (element.hasAttribute('placeholder')) {
              // Se o elemento for um input ou um campo com placeholder
              element.setAttribute('placeholder', voos[key]);
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
              // Caso o elemento seja um input ou textarea (caso não tenha placeholder)
              element.value = voos[key]; // Para inputs e textareas, altere o valor
            } else {
              // Caso contrário, altera o conteúdo de texto do elemento
              element.textContent = voos[key];
            }
          } else {
            console.warn(`Elemento com id="${key}" não encontrado.`);
          }

          const classElement = document.querySelector(`[class="${key}"]`);
          if (classElement) {
            // Verifica se o elemento é um input ou outro com o atributo placeholder
            if (classElement.hasAttribute('placeholder')) {
              // Se o elemento for um input ou um campo com placeholder
              classElement.setAttribute('placeholder', voos[key]);
            } else if (classElement.tagName === 'INPUT' || classElement.tagName === 'TEXTAREA') {
              // Caso o elemento seja um input ou textarea (caso não tenha placeholder)
              classElement.value = voos[key]; // Para inputs e textareas, altere o valor
            } else {
              // Caso contrário, altera o conteúdo de texto do elemento
              classElement.textContent = voos[key];
            }
          } else {
            console.warn(`Elemento com ="${key}" não encontrado.`);
          }
          

        });

      }
      // Tradução do footer
      const artigos = translations.artigos;
      if (artigos) {
        console.log("Traduzindo o artigos:", artigos);

        Object.keys(artigos).forEach((key) => {
          const element = document.querySelector(`#container3 [id="${key}"]`);
          if (element) {
            console.log(`Traduzindo artigos: ${key} - ${artigos[key]}`);
            element.textContent = artigos[key];
          } else {
            console.warn(`Elemento com id="${key}" não encontrado.`);
          }
        });

      }

      // Tradução do footer
      const footer = translations.footer;
      if (footer) {
        console.log("Traduzindo o footer:", footer);

        Object.keys(footer).forEach((key) => {
          const element = document.querySelector(`.footer-column h4[id="${key}"]`);
          if (element) {
            console.log(`Traduzindo footer: ${key} - ${footer[key]}`);
            element.textContent = footer[key];
          } else {
            console.warn(`Elemento com data-translate="${key}" não encontrado.`);
          }
        });
        Object.keys(footer).forEach((key) => {
          const element = document.querySelector(`.footer-column a[id="${key}"]`);
          if (element) {
            console.log(`Traduzindo footer: ${key} - ${footer[key]}`);
            element.textContent = footer[key];
          } else {
            console.warn(`Elemento com data-translate="${key}" não encontrado.`);
          }
        });
      }

    })
    .catch((error) => {
      console.error("Erro ao carregar as traduções:", error);
    });
}

// Função para alterar o idioma
function changeLanguage(language) {
  console.log(`Alterando idioma para: ${language}`); // Depuração para ver qual idioma foi escolhido
  loadTranslations(language);
}

// Chamada inicial para carregar as traduções no idioma desejado

window.addEventListener("load", changeLanguage('Portugal-PT'))

var itensSeccaoVoos = document.querySelectorAll(".seccaoVoos");
var contador = 0;
var defaultContador = 4;
var defaultTop = 2;
itensSeccaoVoos.forEach((bloco, index) => {

  if (index === 0) {
    // Este é o primeiro elemento
    bloco.classList.add("active");

  } else {
    contador++;
    // Não é o primeiro elemento
    if (contador <= 2) {
      bloco.classList.add("defaultTop-" + defaultTop);
      defaultTop++
    } else {
      bloco.classList.add("default-" + defaultContador);
      defaultContador++
    }
  }


});
function limpaSeccaoVoos() {
  var itensSeccaoVoos = document.querySelectorAll(".seccaoVoos");
  itensSeccaoVoos.forEach(bloco => {
    if (bloco.classList.contains('active')) {
      bloco.classList.remove('active');
    }
    for (let i = 1; i < 8; i++) {
      if (bloco.classList.contains('defaultTop-' + i)) {
        bloco.classList.remove('defaultTop-' + i);
      }

      if (bloco.classList.contains('default-' + i)) {
        bloco.classList.remove('default-' + i);
      }

      if (bloco.classList.contains('active')) {
        bloco.classList.remove('active');
      }
    }
  });
}
itensSeccaoVoos.forEach((bloco) => {
  bloco.addEventListener('click', function () {
    limpaSeccaoVoos(); // Limpa todas as classes dinâmicas
    bloco.classList.add("active"); // Marca o item clicado como ativo

    var id = bloco.id; // Obtém o ID do elemento clicado
    var segundoCaractere = parseInt(id.charAt(1), 10); // Converte o segundo caractere do ID em número

    if (isNaN(segundoCaractere)) {
      console.error("O segundo caractere do ID não é um número:", segundoCaractere);
      return;
    }

    let i = 1;

    // Itera sobre os itens e aplica as classes apropriadas
    itensSeccaoVoos.forEach((item, index) => {
      if (index + 1 !== segundoCaractere) {
        // Aplica classes baseadas na posição
        i++
        if (i <= 3) {
          item.classList.add("defaultTop-" + i);

        } else {
          item.classList.add("default-" + i);

        }
      } else {
        // Marca o item correspondente como ativo
        item.classList.add("active");
      }
    });
  });
});


