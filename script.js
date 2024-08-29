document.addEventListener("DOMContentLoaded", function() {
    // Função para formatar o campo de orçamento em Reais (R$)
    function formatCurrency(input) {
        let value = input.value;
        value = value.replace(/\D/g, ""); // Remove qualquer caractere não numérico
        value = (value / 100).toFixed(2) + ""; // Divide por 100 e adiciona duas casas decimais
        value = value.replace(".", ","); // Substitui o ponto por vírgula
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // Adiciona pontos para milhares
        input.value = "R$ " + value; // Adiciona o símbolo de Real
    }

    // Adicionar evento de formatação ao campo de orçamento
    const budgetInput = document.getElementById("budget");
    if (budgetInput) {
        budgetInput.addEventListener("input", function() {
            formatCurrency(budgetInput);
        });
    }

    // Controle do menu de navegação móvel (hamburger menu)
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            navMenu.classList.toggle("show");
        });
    }

    // Suave rolagem para as âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Fecha o menu ao clicar em um link (em dispositivos móveis)
            if (window.innerWidth <= 768) {
                navMenu.classList.remove("show");
            }
        });
    });

    // Lazy loading para imagens (se houver)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });

    // Validação simples do formulário (opcional)
    const form = document.getElementById("leadForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            if (!name || !email) {
                alert("Por favor, preencha os campos obrigatórios.");
                event.preventDefault();
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById('intro');

    // Defina o tempo de exibição da introdução (em milissegundos)
    setTimeout(() => {
        intro.classList.add('fade-out');
    }, 3000); // Exibe a introdução por 3 segundos antes de desaparecer
});

// Script para controlar o Modal LGPD
document.querySelector('.lgpd-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('lgpd-modal').style.display = 'flex';
});

document.getElementById('close-lgpd-modal').addEventListener('click', function () {
    document.getElementById('lgpd-modal').style.display = 'none';
});