export function render(data) {
    console.log(data)
    /* 
        data.results
        h1 - .title
        a - back
        p - desc - .opening_crawl
        h2 - 'planets' 
        ul - li planets - .planets 
        h2 - 'species'
        ul - li species - .species
    */
    
    const container = document.createElement('div');
    const episodeHeader = document.createElement('h1');
    const episodeDesc = document.createElement('p');
    const planetsTitle = document.createElement('h2');
    const planetsList = document.createElement('ul');
    const speciesTitle = document.createElement('h2');
    const speciesList = document.createElement('ul');
    const linkBack = document.createElement('a');

    container.classList.add('container', 'star__container');
    episodeHeader.classList.add('star__header');
    linkBack.classList.add('star__link-back');
    planetsList.classList.add('star__list');



    linkBack.href=document.location.href.split('?')[0];

    planetsTitle.textContent = 'Planets';
    speciesTitle.textContent = 'Species';


    episodeHeader.innerHTML=`Episode ${data.episode_id}. <br>${data.title}`;
    episodeDesc.textContent=data.opening_crawl;
    linkBack.textContent = 'Back to main'

    for (const planetSrc of data.planets) {
        fetch(planetSrc).then(res => res.json())
        .then(planetData => {
            console.log(planetData)
            const planetCard = document.createElement('li');
            const title = document.createElement('h3');

            planetCard.classList.add('star__item');
            planetCard.style.borderRadius = '50%';
            // console.log(getComputedStyle(planetCard.style.width)) Потом потести

            title.textContent = planetData.name;

            planetCard.append(title)
            planetsList.append(planetCard)
        })
    }

    for (const personSrc of data.species) {
        fetch(personSrc).then(res => res.json())
        .then(personData => {
            const personCard = document.createElement('li');
            const title = document.createElement('h3');

            title.textContent=personData.name;
            personCard.append(title);
            speciesList.append(personCard);
        })
    }

    container.append(linkBack);
     container.append(episodeHeader);
     container.append(episodeDesc);
     container.append(planetsTitle);
     container.append(planetsList);
     container.append(speciesTitle);
     container.append(speciesList);
     
    return container;
}