const NAV_LINKS = [
    { name: "Perfil", href: "#profile" },
    { name: "Projetos", href: "#projects" },
    { name: "Experiência", href: "#experience" },
    { name: "Repositórios", href: "#repos" },
    { name: "Recomendações", href: "#contents" },
];

const USER = {
    name: "Matheus Santos",
    description: "Desenvolvedor Web Full Stack, com proficiência em Node, JavaScript e PHP e possuo experiência com muitas outras linguagens que circundam o desenvolvimento Web. Curso Engenharia de Software e possuo experiência profissional na área.",
    image: "./public/images/profile-image.jpg",
    social: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/matheus-vsantos/" },
        { name: "GitHub", href: "https://github.com/m4theuzzz" }
    ]
};

const ALL_PROJECTS = [
    {
        title: "4YouSee Event Trigger",
        images: ["./public/images/trigger/event-trigger-1.png", "./public/images/trigger/event-trigger-2.png", "./public/images/trigger/event-trigger-3.png", "./public/images/trigger/event-trigger-4.png"],
        description: "Uma aplicação em Node com deploy em Electron e banco de dados simulado com JSON, a qual é feita para integrar com o Player e o Manager da 4YouSee, a fim de coordenar fluxos e execuções imediatas das midias desejadas. Está em uso hoje no 4YouSee Arenas, coordenando todas as telas do estádio do Dragão em Portugal, outros estádios já demonstraram interesse pelo produto.",
        types: ["NodeJS", "Electron", "API", "Desktop", "ElectronDB", "4YouSee"]
    },
    {
        title: "4YouSee Integração com Postos de Combustível",
        images: ["./public/images/postos/postos-1.png", "./public/images/postos/postos-2.png", "./public/images/postos/postos-3.png"],
        description: "Uma aplicação em Node com deploy em Electron, a qual é feita para integrar sistemas de postos de gasolina com o Player 4YouSee. Esta aplicação possui integração completa com o sistema horustec, interceptando seu protocolo TCP e o traduzindo, sendo capaz de mandar ordens e coletar e interpretar suas respostas, alimentando o Player com as informações em tempo real.",
        types: ["NodeJS", "Electron", "API", "Desktop", "WebSocket", "TCP", "ElectronDB", "4YouSee"]
    },
    {
        title: "4YouSee Hooks",
        images: ["./public/images/hooks/placeholder.svg"],
        description: "Uma aplicação em Node hospedada em servidor a qual gerencia requisições de serviços externos a fim de filtrar, tratar e transmitir com segurança, de forma encriptada e com tokens de acesso, dados que o cliente deseja que sejam exibidos no Player 4YouSee no momento em que estas requisições externas sejam disparadas.",
        types: ["NodeJS", "API", "WebSocket", "4YouSee"]
    },
    {
        title: "4YouSee TV Corporativa",
        images: ["./public/images/flix/flix-1.jpeg"],
        description: "Uma aplicação feita para rodar dentro do player 4YouSee, que organiza conteúdos configurados em um sistema navegável, onde o usuário pode escolher o que e quando tocar, quando quiser, interrompento uma mídia e retomando a execução do player normalmente após o término do uso desta funcionalidade.",
        types: ["API", "VueJS", "4YouSee"]
    },
    {
        title: "4YouSee novoSGA",
        images: ["./public/images/wsl-logo.png"],
        description: "Foi desenvolvido um webapp que integra o 4YouSee Player com o sistema novoSGA, de gerenciamento de chamada de senhas, reproduzindo a senha chamada pelo sistema do governo no player desejado. Para o funcionamento, foi desenvolvido um aplicativo intermediário em python. Como o sistema do novoSGA é designado a linux, para a instalação plena no windows foi utilizado o WSL.",
        types: ["API", "WSL", "Python", "WebSocket", "4YouSee"]
    },
    {
        title: "Character Sheet",
        images: ["./public/images/sheet/sheet-1.png", "./public/images/sheet/sheet-2.png", "./public/images/sheet/sheet-3.png", "./public/images/sheet/sheet-4.png", "./public/images/sheet/sheet-5.png", "./public/images/sheet/sheet-6.png"],
        description: "Uma aplicação Node com deploy em Electron e banco de dados simulado com JSON, a qual auxilia na criação e gerenciamento da ficha de um personagem de RPG de Mesa, baseada no sistema de Dungeons & Dragons.",
        types: ["NodeJS", "Electron", "API", "Desktop", "ElectronDB", "VueJS", "GitHub"]
    },
    {
        title: "Personal Page",
        images: ["./public/images/page/page-1.png", "./public/images/page/page-2.png", "./public/images/page/page-3.png", "./public/images/page/page-4.png"],
        description: "Uma aplicação WEB feita para a matéria de Desenvolvimento de Interfaces Web da PUC Minas.",
        types: ["VueJS", "GitHub", "PUC"]
    }
];

const PROJECT_TYPES = ["NodeJS", "Electron", "API", "Desktop", "ElectronDB", "WebSocket", "TCP", "4YouSee", "GitHub", "Python", "WSL", "VueJS", "PUC"];

const EXPERIENCES = [
    {
        title: "Analista Desenvolvedor",
        description: "Atuo principalmente com sistemas de integração com outras plataformas, também trabalho com todas as áreas de desenvolvimento da empresa, usando PHP, Node.js, Angular, Vue.js e outros frameworks e atuo com demandas urgêntes vindas do suporte.",
        period: "De 11/2020 até o momento",
        companyLogo: "./public/images/4uc-logo.png"
    },
    {
        title: "Estagiário de Desenvolvimento",
        description: "Era responsável pela criação de WebApps demandados por clientes para a execução no Player da empresa, além disso, atuava resolvendo demandas do suporte.",
        period: "De 09/2019 a 11/2020",
        companyLogo: "./public/images/4uc-logo.png"
    },
    {
        title: "Projetista de Automação",
        description: "Fui responsável pela automação do sistema de sensoriamento de radiação em um Iniciação Científica para o Departamento de Engenharia Nuclear da UFMG.",
        period: "De 03/2018 a 07/2018",
        companyLogo: "./public/images/UFMG-logo.png"
    }
];

const REPOSITORIES = [
    {
        title: "Character Sheet",
        description: "Uma aplicação Node com deploy em Electron e banco de dados simulado com JSON, a qual auxilia na criação e gerenciamento da ficha de um personagem de RPG de Mesa, baseada no sistema de Dungeons & Dragons.",
        updatedAt: "30/08/2021",
        href: "https://github.com/m4theuzzz/character-sheet"
    },
    {
        title: "Personal Page",
        description: "Uma aplicação WEB feita para a matéria de Desenvolvimento de Interfaces Web da PUC Minas.",
        updatedAt: "08/11/2021",
        href: "https://github.com/m4theuzzz/personal-page"
    }
];

const CONTENT_RECOMMENDATIONS = [
    {
        title: "Fim de Ano 4YouSee",
        src: "https://www.youtube.com/embed/9LvxIDSLPGM"
    },
    {
        title: "DOOH",
        src: "https://www.youtube.com/embed/MSzsTJo-XJY"
    },
    {
        title: "Curso de HTML5",
        src: "https://www.youtube.com/embed/epDCjksKMok"
    },
    {
        title: "Curso de JS",
        src: "https://www.youtube.com/embed/BXqUH86F-kA"
    },
    {
        title: "Curso de CSS3",
        src: "https://www.youtube.com/embed/FRhM6sMOTfg"
    },
    {
        title: "Curso de Node",
        src: "https://www.youtube.com/embed/LLqq6FemMNQ"
    },
    {
        title: "Curso de PHP",
        src: "https://www.youtube.com/embed/F7KzJ7e6EAc"
    }
];