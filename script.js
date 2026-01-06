// --- 1. BANCO DE DADOS (DATA) ---

const slides = [
    {
        titulo: "Economia Imediata",
        descricao: "Ao instalar painéis SolarVolt, você reduz sua conta de luz em até 95% já no primeiro mês. O sistema se paga com a própria economia.",
        imagem: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80"
    },
    {
        titulo: "Energia Limpa",
        descricao: "Contribua para um planeta mais sustentável. A energia solar é renovável, silenciosa e não emite gases poluentes durante a geração.",
        imagem: "assets/natureza-painel-solar.webp"
    },
    {
        titulo: "Valorização do Imóvel",
        descricao: "Casas com tecnologia solar são vendidas mais rápido e por valores até 10% maiores, sendo vistas como investimentos inteligentes.",
        imagem: "assets/casa-solar.jpg"
    }
];

const depoimentos = [
    {
        nome: "Ricardo Silva",
        texto: "Minha conta caiu de R$ 450 para R$ 200. O atendimento da SolarVolt foi impecável do início ao fim!",
        tipo: "Residencial",
        foto: "https://randomuser.me/api/portraits/men/32.jpg",
        estrelas: "⭐⭐⭐⭐⭐"
    },
    {
        nome: "Mariana Costa",
        texto: "Instalamos na nossa loja e o retorno está sendo incrível. O sistema de monitoramento é nota 10.",
        tipo: "Comercial",
        foto: "https://randomuser.me/api/portraits/women/44.jpg",
        estrelas: "⭐⭐⭐⭐⭐"
    },
    {
        nome: "Roberto Pontes",
        texto: "Empresa séria e transparente. Todo o processo de homologação com a concessionária foi feito por eles.",
        tipo: "Residencial",
        foto: "https://randomuser.me/api/portraits/men/85.jpg",
        estrelas: "⭐⭐⭐⭐⭐"
    }
];

// --- 2. VARIÁVEIS DE CONTROLE DE ESTADO ---

let slideAtual = 0;
const containerSlider = document.getElementById('slider-solar');

// --- 3. FUNÇÕES DE CONTEÚDO (MÉTODOS) ---

function mostrarSlide() {
    if (!containerSlider) return; // Segurança caso o elemento não exista

    const data = slides[slideAtual];
    
    containerSlider.innerHTML = `
        <div class="slide-item">
            <div class="slide-texto">
                <h2>${data.titulo}</h2>
                <p>${data.descricao}</p>
            </div>
            <div class="slide-imagem">
                <img src="${data.imagem}" alt="${data.titulo}">
            </div>
        </div>
    `;

    slideAtual = (slideAtual + 1) % slides.length;
}

function carregarDepoimentos() {
    const grid = document.getElementById('grid-depoimentos');
    if (!grid) return;

    grid.innerHTML = depoimentos.map(item => `
        <div class="card-depoimento">
            <div class="estrelas">${item.estrelas}</div>
            <p class="texto-depoimento">"${item.texto}"</p>
            <div class="autor-depoimento">
                <img src="${item.foto}" alt="${item.nome}" class="foto-cliente">
                <div class="autor-info">
                    <h4>${item.nome}</h4>
                    <span>Cliente ${item.tipo}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// --- 4. FUNÇÕES DE INTERAÇÃO E SISTEMA ---

// LÓGICA DO BOTÃO INICIAR
function ligarSite() {
    const btn = document.getElementById('power-btn');
    const screen = document.getElementById('welcome-screen');
    const text = document.getElementById('power-text');

    // Animação visual do botão
    btn.classList.add('active');
    btn.style.transform = "scale(0.9)";
    text.innerText = "BEM VINDO";
    text.style.color = "var(--azul-eletrico)";

    // Transição de entrada no site
    setTimeout(() => {
        screen.classList.add('fade-out');
        console.log("SolarVolt Ligada!");
        
        // Inicia o carrossel apenas após o site "ligar"
        mostrarSlide();
        setInterval(mostrarSlide, 7000);
    }, 1200);
}
// FIM DA LÓGICA DO BOTÃO INICIAR

// FUNÇÃO DO SIMULADOR DE ECONOMIA

function animarValor(id, valorFinal) {
    const elemento = document.getElementById(id);
    let valorAtual = 0;
    const duracao = 1500; // 1.5 segundos
    const incremento = valorFinal / (duracao / 16); // Aproximadamente 60fps

    const timer = setInterval(() => {
        valorAtual += incremento;
        if (valorAtual >= valorFinal) {
            elemento.innerText = valorFinal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
            clearInterval(timer);
        } else {
            elemento.innerText = valorAtual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        }
    }, 16);
}

function calcularEconomia() {
    const valorConta = parseFloat(document.getElementById('conta-luz').value);
    const resultadoDiv = document.getElementById('resultado');
    
    if (isNaN(valorConta) || valorConta <= 0) {
        alert("Por favor, insira um valor válido para a conta de luz.");
        return;
    }

    // Lógica de economia (95%)
    const economiaMensal = valorConta * 0.95;
    const economiaAnual = economiaMensal * 12;
    const economia25Anos = economiaAnual * 25;

    // Mostra o container de resultados
    resultadoDiv.classList.remove('hidden');

    // Dispara a animação dos números
    animarValor('economia-anual', economiaAnual);
    animarValor('economia-total', economia25Anos);
}
// FIM DA FUNÇÃO DO SIMULADOR DE ECONOMIA

//FUNÇÃO HAMBURGUER
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.menu-hamburger');
    
    // Liga/Desliga a classe 'active' para deslizar o menu
    navLinks.classList.toggle('active');
    
    // Opcional: Animação do ícone hambúrguer virando um 'X'
    hamburger.classList.toggle('toggle-icon');
}
//FIM DA FUNÇÃO HAMBURGUER

// --- 5. INICIALIZAÇÃO (BOOT) ---

// Carregamos os depoimentos imediatamente (em background)
carregarDepoimentos();