function choiceResourses(episodId) {
    if (episodId) {
        renderPage(
            './render-episode-page.js',
            `https://swapi.dev/api/films/${episodId}`,
            './styles/sub-page.css'
        );
    } else {
        renderPage(
            './render-head-page.js',
            'https://swapi.dev/api/films/',
            './styles/main-page.css'
        );
    }
}

const cssPromises = {};
function loadResourse(src) {
    if (src.endsWith('.js')) {
        return import(src);
    };
    if (src.endsWith('.css')) {
        if (!cssPromises[src]) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = src;
            cssPromises[src] = new Promise(resolve => {
                link.addEventListener('load', ()=> resolve());
            });
            document.head.append(link);
        }
        return cssPromises[src];
    }
    return fetch(src).then(res => res.json());
}

function renderPage(moduleName, apiUrl, css) {
    Promise.all([moduleName, apiUrl, css]
    .map(src => loadResourse(src)))
    .then(([pageModule, data])=> {
        appContainer.innerHTML = '';
        appContainer.append(pageModule.render(data))
    })
}

const appContainer = document.getElementById('app');
let searchParams = new URLSearchParams(location.search);
let episodId = searchParams.get('episodeId')

choiceResourses(episodId)



