// Animações
AOS.init();

// Dom
const logo = document.querySelector(".logo");
const menu = document.querySelector(".navbar");
const menuLinha = document.querySelector(".menu_linha");
const links = document.querySelector(".ul_links");
const linkAtivo = document.querySelector(".links_menu");
const container_inicio = document.querySelector("#Inicio");
const container_sobreMim = document.querySelector("#SobreMim");
const container_habilidades = document.querySelector("#Habilidades");
const container_projetos = document.querySelector("#Projetos");
const container_contato = document.querySelector("#Contato");
const modalTitle = document.querySelector(".titulo_dialog");
const modalText = document.querySelector(".p_dialog");
const containerModal = document.querySelector(".containerModal");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".closeModal");
const openModalButtons = document.querySelectorAll(".openModal");
const Years = document.querySelector(".years");

// Abrir e fechar menu
menuLinha.addEventListener("click", () => {
    menuLinha.classList.toggle("active");
    menu.classList.toggle("active");
});

// Fechar o menu ao clicar nos links
links.addEventListener("click", () => {
    menuLinha.classList.toggle("active");
    menu.classList.toggle("active");
});

// Recarregar a página ao clicar na logo
logo.addEventListener("click", () => {
    location.reload();
});

// Função para ativar o link que corresponde seção visível
const Ativar_Link = () => {
    const sections = [
        container_inicio,
        container_sobreMim,
        container_habilidades,
        container_projetos,
        container_contato,
    ];
    const navLinks = document.querySelectorAll(".ul_links a");
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach((link) => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
};

document.addEventListener("scroll", Ativar_Link);

const modalContent = [
  {
    title: 'HTML5',
    description:
      'HTML5 é a linguagem de marcação padrão usada para criar e estruturar páginas web.',
  },
  {
    title: 'CSS3',
    description:
      'CSS3 é usado para estilizar páginas web, permitindo criar layouts atraentes e responsivos.',
  },
  {
    title: 'JavaScript',
    description:
      'JavaScript é uma linguagem de programação que permite adicionar interatividade às páginas web.',
  },
  {
    title: 'SASS',
    description:
      'SASS (Syntactically Awesome Stylesheets) é uma extensão do CSS que permite usar variáveis, mixins e aninhamento para facilitar a escrita e manutenção do código.',
  },
  {
    title: 'Tailwind CSS',
    description:
      'Tailwind é uma biblioteca de utilitários CSS que permite criar designs rápidos e consistentes diretamente no HTML ou JSX.',
  },
  {
    title: 'React',
    description:
      'React é uma biblioteca JavaScript para criar interfaces de usuário reativas e escaláveis.',
  },
  {
    title: 'TypeScript',
    description:
      'TypeScript é uma linguagem que estende o JavaScript, adicionando suporte a tipagem estática para melhorar a confiabilidade e escalabilidade do código.',
  },

  {
    title: 'Next.js',
    description:
      'Next.js é um framework React que oferece renderização no servidor, geração de sites estáticos e muito mais para criar aplicações modernas e rápidas.',
  },
  {
    title: 'Jest',
    description:
      'Jest é um framework de testes JavaScript focado em simplicidade, usado para testar aplicações React, Node.js e outros projetos JavaScript.',
  },

  {
    title: 'Figma',
    description:
      'Figma é uma ferramenta de design colaborativo baseada na web, usada para criar interfaces, protótipos e sistemas de design.',
  },

  {
    title: 'Git',
    description:
      'O Git é um sistema de controle de versão distribuído, usado para gerenciar o código-fonte de projetos de software.',
  },
];

// Função para abrir o modal com dados do índice
function openModal(index) {
    const { title, description } = modalContent[index];
    modalTitle.textContent = title;
    modalText.textContent = description;
    modal.classList.add("active");
}

// Adiciona eventos aos botões
openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const index = button.getAttribute("data-index");
        openModal(index);
    });
});

// Fecha o modal
closeModalButton.addEventListener("click", () => {
    modal.classList.remove("active");
});

//Variaveis e Funções pro POST
const form = document.getElementById("form_dados");
const modal2 = document.querySelector(".modal2");
const modalTitle2 = document.querySelector(".titulo_dialog2");
const closeModalButton2 = document.querySelector(".closeModal2");

const DesaparecerModal = () =>
    setTimeout(() => {
        modal2.classList.remove("active");
    }, 3000);

const DeleteValueInputs = () => {
    document.getElementById("nome_form").value = "";
    document.getElementById("email_form").value = "";
    document.getElementById("text_form").value = "";
};

closeModalButton2.addEventListener("click", () => {
    modal2.classList.remove("active");
});

//POST de email
emailjs.init("API KEY");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const from_name = document.getElementById("nome_form").value;
    const from_email = document.getElementById("email_form").value;
    const message = document.getElementById("text_form").value;

    if (from_name === "" || from_email === "" || message === "") {
        modalTitle2.innerHTML = "Preencha Todos os campos!";
        modal2.classList.add("active");
        DesaparecerModal();
        return;
    }

    modalTitle2.innerHTML = "Sua mensagem foi enviada!!!";

    DeleteValueInputs();

    modal2.classList.add("active");

    const formData = {
        from_name,
        from_email,
        message,
    };

    emailjs.send("SERVICES", "TEMPLATE", formData).then(
        (response) => {
            console.log("E-mail enviado com sucesso!", response);
        },
        (error) => {
            console.error("Erro ao enviar o e-mail:", error);
        }
    );

    DesaparecerModal();
});

//Atualizar ano
Years.innerHTML = new Date().getFullYear();
