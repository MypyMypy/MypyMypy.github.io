export function render(data) {
    const container = document.createElement('div');
    const starHeader = document.createElement('h1')
    const starList = document.createElement('ul');

    container.classList.add('container', 'star__container');
    starHeader.classList.add('star__header');
    starList.classList.add('star__list');
    
    starHeader.textContent='Star Wars'

    container.append(starHeader)
    container.append(starList)

    for (const episode of data.results.sort((a,b)=> {return a.episode_id - b.episode_id})) {
        const episodeCard = document.createElement('li');
        const title = document.createElement('h3')
        const number = document.createElement('span')
        const link = document.createElement('a')

        episodeCard.classList.add('star__item');
        title.classList.add('star__episiod-name');
        number.classList.add('star__episiod-number');
        link.classList.add('star__link')
       
        episodeCard.style.backgroundImage = `url("./img/star-wars-${episode.episode_id}.png")`;
        title.textContent = `${episode.title}`
        number.textContent = `${episode.episode_id}`

        let realId = 0;

        if (episode.episode_id<=3) {
            realId=episode.episode_id+3;
        } else {
            realId=episode.episode_id-3;
        }

        link.href = `?episodeId=${realId}`
        
        episodeCard.append(title)
        episodeCard.append(number)
        episodeCard.append(link)
        
        starList.append(episodeCard)
    }

    return container;
}