(()=> {
  document.addEventListener("DOMContentLoaded", ()=> {
    const loader = document.querySelector('.loader');
    window.innerWidth >= window.innerHeight ?
      loader.style.width = '50vh' : loader.style.width = '50vw'
    loader.style.height = loader.style.width;
  })
})();
