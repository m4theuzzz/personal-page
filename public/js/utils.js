const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');

searchInput.addEventListener('input', (event) => {
    clearSearch.style.display = event.target.value.length > 0 ? 'inline' : 'none';
});

const clearSearchInput = () => {
    searchInput.value = "";
    clearSearch.style.display = 'none';
};