const myModal = new bootstrap.Modal(document.getElementById('appModal'), {
    keyboard: false
});

const dropdown = new bootstrap.Dropdown(document.getElementById('dropdownMenuLink'));

const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const doneTypingInterval = 750;

let typingTimer;
let searchValue = "";

searchInput.addEventListener('input', (event) => {
    clearSearch.style.display = event.target.value.length > 0 ? 'inline' : 'none';
    searchValue = event.target.value;
});

searchInput.addEventListener('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

searchInput.addEventListener('keydown', function () {
    clearTimeout(typingTimer);
});

const clearSearchInput = () => {
    searchInput.value = "";
    app.searchValue = "";
    clearSearch.style.display = 'none';
    dropdown.hide();
};

const doneTyping = () => {
    app.searchValue = searchValue;
}

const updateSelectedProject = (project) => {
    app.selectedProject = project;

    myModal.toggle();
}

const updateProjectFilter = (type) => {
    app.apliedFilter = type;
}

const clearChildren = (element) => {
    for (let i = element.children.length - 1; i >= 0; i--) {
        element.removeChild(element.children[i]);
    }
}

const fetchGitHubApi = async (value) => {
    if (!value || value == "") {
        dropdown.hide();
        return;
    }

    const dropdownList = document.getElementById('dropdownList');

    clearChildren(dropdownList);

    let loading = document.createElement('li');

    loading.innerHTML = `<img id="loadingGif" src="./public/images/loading-gif.gif" />`;

    dropdownList.appendChild(loading);

    dropdown.show();

    try {
        const query = `https://api.github.com/search/repositories?q=${value}+user:${USER.login}`;
        const response = await fetch(query, {
            headers: {
                "accept": "application/vnd.github.v3.text-match+json",
                "Authorization": `token ${API_TOKEN}`
            }
        });

        const json = await response.json();

        const foundRepos = json.items.reduce((repos, item) => {
            REPOSITORIES.forEach(repo => {
                if (item.id == repo.id) {
                    repos.push(repo);
                }
            });
            return repos;
        }, []);

        clearChildren(dropdownList);

        foundRepos.forEach(repo => {
            let li = document.createElement('li');

            li.innerHTML = `
                <a href="${repo.href}" target="_blank" class="repoFromSearch">
                    <h7><b>${repo.title}</b></h7>
                    <p>${repo.description}</p>
                    <i>Atualizado em: <b>${repo.updatedAt}</b></i>
                </a>
            `;

            dropdownList.appendChild(li);
        });

        if (foundRepos.length == 0) {
            let li = document.createElement('li');

            li.innerHTML = `Nenhum repositório correspondente foi encontrado`;

            dropdownList.appendChild(li);
        }

        app.searchResults = foundRepos;

    } catch (error) {
        if (error) {
            let li = document.createElement('li');

            li.innerHTML = `Houve um erro ao buscar os repositórios`;

            dropdownList.appendChild(li);
        }
    }
};