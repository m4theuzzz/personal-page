const myModal = new bootstrap.Modal(document.getElementById('appModal'), {
    keyboard: false
})

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