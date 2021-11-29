const app = new Vue({
    el: "#app",
    data: {
        navLinks: NAV_LINKS,
        pucLogo: "./public/images/puc-logo.png",
        user: USER,
        allProjects: ALL_PROJECTS,
        projectsFilterTypes: PROJECT_TYPES,
        apliedFilter: "",
        selectedProject: {},
        experiences: EXPERIENCES,
        repositories: REPOSITORIES,
        contents: CONTENT_RECOMMENDATIONS,
        searchValue: "",
        searchResults: []
    },
    computed: {
        toRenderProjects: {
            get: function () {
                if (this.apliedFilter.length == 0) {
                    return this.allProjects;
                }

                return this.applyFiltersToProjects(this.allProjects, this.apliedFilter);
            }
        }
    },
    watch: {
        searchValue: function (value) {
            fetchGitHubApi(value);
        }
    },
    methods: {
        applyFiltersToProjects: function (allProjects, filter) {
            return allProjects.filter(project => {
                if (project.types.indexOf(filter) > -1) {
                    return project;
                }
            });
        }
    },
    components: COMPONENTS
});