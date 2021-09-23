const app = new Vue({
    el: "#app",
    data: {
        navLinks: [
            { name: "Perfil", href: "#profile" },
            { name: "Projetos", href: "#projects" },
            { name: "Experiência", href: "#experience" },
            { name: "Repositórios no Github", href: "#repos" },
            { name: "Conteúdo", href: "#recommendations" },
        ],
        pucLogo: "./public/images/puc-logo.png",
        user: {
            name: "Matheus Santos",
            description: "",
            social: [
                { name: "LinkedIn", href: "" },
                { name: "GitHub", href: "" }
            ]
        }
    },
    computed: {
        complemented: {
            get: function () {
                return this.message + "!";
            }
        }
    },
    methods: {},
    components: components
});

const reverseMessage = () => {
    return app.message.split('').reverse().join('');
};