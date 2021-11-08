const navigateTemplate = `
<div id="navigate">
    <div class="links">
        <span v-for="(link, index) in links" class="desktop">
            <a :href="link.href">{{ link.name }}</a><span class="tab" v-if="index < links.length -1">|</span>
        </span>
        <span class="mobile">
            <div class="dropdown">
                <button class="compactMenu" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li v-for="(link, index) in links"><a :href="link.href">{{ link.name }}</a></li>
                </ul>
            </div>
        </span>
    </div>
    <div class="search">
        <div id="searchBox">
            <span id="searchIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </span>
            <input type="text" id="searchInput" placeholder="Pesquisar" aria-describedby="searchIcon">
            <svg id="clearSearch" onclick="clearSearchInput()" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
        </div>
    </div>
</div>
`;

const footTemplate = `
<div id="foot">
</div>
`;

const profileTemplate = `
<div id="profile">
    <div class="profileImage">
        <img id="userImage" :src="user.image" />
    </div>
    <div class="info">
        <div>
            <h5>{{ user.name }}</h5>
            <p>{{ user.description }}</p>
        </div>
        <div>
            <h6>Redes Sociais</h6>
            <div class="socialIcons">
                <a v-for="media in user.social" :href="media.href" :title="media.name" target="_blank">
                    <svg v-if="media.name == 'LinkedIn'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    <svg v-if="media.name == 'GitHub'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>
`;

const projectsTemplate = `
<div id="projects">
    <div class="title">
        <label class="h5">Projetos <span class="badge">{{ projects.length }}</span></label>
        <label>
            <select @change="updateSelectedFilter" class="form-select" aria-label="Default select example">
                <option value="">Selecionar filtro</option>
                <option v-for="type in types" v-bind:value="type">{{ type }}</option>
            </select>
        </label>
    </div>
    <div id="projectsHolder">
        <div v-for="project in projects" class="listedProject card" @click="requestUpdateSelectedProject(project)">
            <img :src="project.images[0]" class="desktop card-img-top">
            <div class="card-body">
                <h6 class="card-title"><a href="#">{{ project.title }}</a></h6>
                <p class="mobile">{{ project.description }}</p>
                <div class="typesHolder">
                    <span v-for="type in project.types" class="badge type">{{ type }}</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const modalTemplate = `
<div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">{{ selectedproject.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div id="modal" class="modal-body">
            <p>{{ selectedproject.description }}</p>
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div v-if="selectedproject.images" class="carousel-item active">
                        <img :src="selectedproject.images[0]" class="d-block w-100">
                    </div>
                    <div v-for="(image, index) in selectedproject.images" v-if="index > 0" class="carousel-item">
                        <img :src="image" class="d-block w-100">
                    </div>
                </div>
                <button v-if="selectedproject.images && selectedproject.images.length > 1" class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button v-if="selectedproject.images && selectedproject.images.length > 1" class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="modal-footer">
            <div class="typesHolder">
                <span v-for="type in selectedproject.types" class="badge type">{{ type }}</span>
            </div>
        </div>
    </div>
</div>
`;

const experienceTemplate = `
<div id="experience">
    <div class="title">
        <label class="h5">Experiências <span class="badge">{{ experiences.length }}</span></label>
    </div>
    <div>
        <div v-for="experience in experiences" class="experienceHolder">
            <img class="companyLogo" :src="experience.companyLogo" />
            <div class="experienceInfo">
                <h6>{{ experience.title }}</h6>
                <p>{{ experience.description }}</p>
                <i>{{ experience.period }}</i>
            </div>
        </div>
    </div>
</div>
`;

const reposTemplate = `
<div id="repos">
    <div class="title">
        <label class="h5">Repositórios Públicos <span class="badge">{{ repos.length }}</span></label>
    </div>
    <div id="reposHolder">
        <div v-for="repository in repos" class="repo">
            <h6><a :href="repository.href" target="_blank">{{ repository.title }}</a></h6>
            <p>{{ repository.description }}</p>
            <i>Atualizado em: <b>{{ repository.updatedAt }}</b></i>
        </div>
    </div>
</div>
`;

const contentsTemplate = `
<div id="contents">
    <div class="title">
        <label class="h5">Conteúdos Recomendados <span class="badge">{{ contents.length }}</span></label>
    </div>
    <div id="contentsHolder">
        <div v-for="content in contents" class="listedContent card">
            <iframe class="card-img-top video" :src="content.src"></iframe>
            <div class="card-body">
                <h6 class="card-title"><a :href="content.src" target="_blank">{{ content.title }}</a></h6>
            </div>
        </div>
    </div>
</div>
`;

const COMPONENTS = {
    "navigate": Vue.component("navigate", {
        props: ['links'],
        template: navigateTemplate,
    }),
    "foot": Vue.component("foot", {
        props: ['logo'],
        template: footTemplate
    }),
    "profile": Vue.component("profile", {
        props: ['user'],
        template: profileTemplate
    }),
    "projects": Vue.component("projects", {
        props: ['projects', 'types'],
        data: function () {
            return { selected: "" }
        },
        methods: {
            requestUpdateSelectedProject: function (project) {
                updateSelectedProject(project);
            },
            updateSelectedFilter: function (event) {
                for (let i = 0; i < event.target.children.length; i++) {
                    const option = event.target.children[i];
                    if (option.selected) {
                        updateProjectFilter(option.value);
                        break;
                    }
                }
            }
        },
        template: projectsTemplate
    }),
    "modal": Vue.component("modal", {
        props: ['selectedproject'],
        template: modalTemplate
    }),
    "experience": Vue.component("experience", {
        props: ['experiences'],
        template: experienceTemplate
    }),
    "repos": Vue.component("repos", {
        props: ['repos'],
        template: reposTemplate
    }),
    "contents": Vue.component("contents", {
        props: ['contents'],
        template: contentsTemplate
    })
}