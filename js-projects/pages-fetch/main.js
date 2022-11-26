(()=>{

    async function getDataPosts() {
        const response = await fetch('https://gorest.co.in/public/v2/posts', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer 77531ea1c8d9107918026937729b4c1800e11f7f7b2b99ce98b75a56769f8851',
                "Content-type": 'application/json'
            }
        });
        const data = await response.json()
        return data
    }

    async function getDataPost(postid) {
        const response = await fetch(`https://gorest.co.in/public/v2/posts/${postid}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer 77531ea1c8d9107918026937729b4c1800e11f7f7b2b99ce98b75a56769f8851',
                "Content-type": 'application/json'
            }
        });
        const data = await response.json()
        return data
    }

    function createHeadPage(data) {
        const headPage = document.createElement('div');
        const headTitle = document.createElement('h1');
        const subTitle = document.createElement('h2')
        const navMenu = document.createElement('nav');
        const navList = document.createElement('ul');

        data.forEach(post => {
            const navItem = document.createElement('li');
            const navLink = document.createElement('a');
            navLink.href = 'index.html?id='+post.id;
            navLink.textContent = post.title;

            navItem.append(navLink);
            navList.append(navItem);
        });

        headTitle.textContent = 'Блог';
        headTitle.style.textAlign = 'center'

        subTitle.textContent = 'Названия статей:';
        subTitle.style.textIndent = '20px';

        navMenu.append(navList);
        headPage.append(headTitle);
        headPage.append(subTitle);
        headPage.append(navMenu);

        return headPage
    }

    function createSubPage(post) {
        const subPage = document.createElement('div');
        const linkBtnBack = document.createElement('a');
        const headSubTitle = document.createElement('h1');
        const postMainText = document.createElement('p');

        linkBtnBack.href='index.html?id=1';
        linkBtnBack.textContent='Back';
        headSubTitle.textContent=post.title
        postMainText.textContent=post.body

        subPage.append(linkBtnBack)
        subPage.append(headSubTitle)
        subPage.append(postMainText)

        return subPage
    }


    async function createPostsApp(container) {
        const posts = await getDataPosts()
        const hash = window.location.search
        const hashid = hash.slice(hash.indexOf('?id=')+4)

        const thePage = (hashid == '' || hashid == 1)? createHeadPage(posts): createSubPage(await getDataPost(hashid))
        container.append(thePage)
    }

    document.addEventListener('DOMContentLoaded', ()=> {
        const container = document.querySelector('.container')
        createPostsApp(container)
    })

})()
