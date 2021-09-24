const NAV_LINKS = [
    { name: "Perfil", href: "#profile" },
    { name: "Projetos", href: "#projects" },
    { name: "Experiência", href: "#experience" },
    { name: "Portifólio", href: "#repos" },
    { name: "Conteúdo", href: "#recommendations" },
];

const USER = {
    name: "Matheus Santos",
    description: "Desenvolvedor Web Full Stack, com proficiência em Node e JavaScript e possuo experiência com muitas outras linguagens que circundam o desenvolvimento Web. Curso Engenharia de Software e possuo experiência profissional na área.",
    image: "./public/images/user-placeholder.svg",
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
        types: ["WEB", "NodeJS", "Electron", "API", "Desktop", "JSON", "Database", "4YouSee"]
    },
    {
        title: "4YouSee Integração com Postos de Combustível",
        images: ["./public/images/postos/postos-1.png", "./public/images/postos/postos-2.png", "./public/images/postos/postos-3.png"],
        description: "Uma aplicação em Node com deploy em Electron, a qual é feita para integrar sistemas de postos de gasolina com o Player 4YouSee. Esta aplicação possui integração completa com o sistema horustec, interceptando seu protocolo TCP e o traduzindo, sendo capaz de mandar ordens e coletar e interpretar suas respostas, alimentando o Player com as informações em tempo real.",
        types: ["WEB", "NodeJS", "Electron", "API", "Desktop", "WebSocket", "TCP", "Database", "4YouSee"]
    },
    {
        title: "4YouSee Hooks",
        images: ["./public/images/hooks/placeholder.svg"],
        description: "Uma aplicação em Node hospedada em servidor a qual gerencia requisições de serviços externos a fim de filtrar, tratar e transmitir com segurança, de forma encriptada e com tokens de acesso, dados que o cliente deseja que sejam exibidos no Player 4YouSee no momento em que estas requisições externas sejam disparadas.",
        types: ["WEB", "NodeJS", "API", "WebSocket", "4YouSee"]
    },
    {
        title: "Character Sheet",
        images: ["./public/images/sheet/sheet-1.png", "./public/images/sheet/sheet-2.png", "./public/images/sheet/sheet-3.png", "./public/images/sheet/sheet-4.png", "./public/images/sheet/sheet-5.png", "./public/images/sheet/sheet-6.png"],
        description: "Uma aplicação Node com deploy em Electron e banco de dados simulado com JSON, a qual auxilia na criação e gerenciamento da ficha de um personagem de RPG de Mesa, baseada no sistema de Dungeons & Dragons.",
        types: ["WEB", "NodeJS", "Electron", "API", "Desktop", "JSON", "Database", "GitHub"]
    }
];

const PROJECT_TYPES = ["WEB", "NodeJS", "Electron", "API", "Desktop", "JSON", "Database", "WebSocket", "TCP", "4YouSee", "GitHub"];

const EXPERIENCES = [
    {
        title: "Analista Desenvolvedor Junior",
        description: "Atuo principalmente com sistemas de integração com outras plataformas, mas como o time de desenvolvimento não é muito grande, trabalho com todas as áreas de desenvolvimento da empresa e atuo com demandas vindas do suporte.",
        period: "11/2020 até o momento",
        companyLogo: "./public/images/4uc-logo.png"
    },
    {
        title: "Estagiário de Desenvolvimento",
        description: "Era responsável pela criação de WebApps demandados por clientes para a execução no Player da empresa, além disso, atuava resolvendo demandas do suporte.",
        period: "09/2019 a 11/2020",
        companyLogo: "./public/images/4uc-logo.png"
    }
];