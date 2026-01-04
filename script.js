//SEÇÃO CARROSSEL VANTAGENS
// Banco de dados da apresentação
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

let slideAtual = 0;
const container = document.getElementById('slider-solar');

function mostrarSlide() {
    const data = slides[slideAtual];
    
    // Injeta o conteúdo dinamicamente
    container.innerHTML = `
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

    // Próximo slide
    slideAtual = (slideAtual + 1) % slides.length;
}

// Inicia a apresentação
mostrarSlide();
setInterval(mostrarSlide, 7000);
//FIM DA SEÇÃO CARROSSEL VANTAGENS

//SEÇÃO DEPOIMENTOS
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

function carregarDepoimentos() {
    const grid = document.getElementById('grid-depoimentos');
    
    // Injeção dinâmica com template strings
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

carregarDepoimentos();
//FIM DA SEÇÃO DEPOIMENTOS