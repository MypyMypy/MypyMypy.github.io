(() => {

  const APP_DELAY_MS = 500
  function sleep(delayMs = APP_DELAY_MS) {
    return new Promise(resolve => setTimeout(resolve, delayMs))
  }

  function createAppStartBlock() {
    const appStartBlock = document.createElement('div')
    const appTitle = document.createElement('h2');
    const appInput = document.createElement('input')
    const appBtn = document.createElement('button')

    appTitle.textContent = 'Найди пару'
    appInput.placeholder = 'Введите количество пар'
    appInput.type = 'number'
    appBtn.textContent = 'Начать игру'

    appBtn.disabled = true
    appInput.addEventListener('input', () => {
      if (appInput.value == '') {
        appBtn.disabled = true
      } else {
        appBtn.disabled = false
      }
    })

    appStartBlock.classList.add('app__start-block')
    appTitle.classList.add('app__main-header')
    appInput.classList.add('app__input')
    appBtn.classList.add('btn-reset', 'app__btn')

    appStartBlock.append(appTitle)
    appStartBlock.append(appInput)
    appStartBlock.append(appBtn)

    return {
      appStartBlock,
      appInput,
      appBtn
    }
  }

  function createAppCard(index) {
    const appCardBlock = document.createElement('div')
    const appCardNumber = document.createElement('span')

    appCardBlock.classList.add('play-block__card')
    appCardNumber.classList.add('play-block__number')

    appCardNumber.textContent = index

    appCardBlock.append(appCardNumber)

    return appCardBlock;
  }

  function createAppPlayBlock(cardsNumber) {
    const appPlayBlock = document.createElement('div')
    const appCardsList = []

    appPlayBlock.classList.add('play-block', 'play-block--disabled')

    for (let i = 0; i != cardsNumber; i++) {
      const appCardFirst = createAppCard(i + 1)
      const appCardSecond = createAppCard(i + 1)
      appCardsList.push(appCardFirst)
      appCardsList.push(appCardSecond)
    }

    for (let i = 0, l = appCardsList.length; i < l; i++) {
      randomNumber = Math.round(Math.random() * l)
      const card = appCardsList[i]
      const deleteCard = appCardsList[randomNumber]
      appCardsList.slice(randomNumber, 1, card)
      appCardsList.push(deleteCard)
    }

    appCardsList.forEach(card => {
      appPlayBlock.append(card)
    });

    return {
      appPlayBlock,
      appCardsList
    }
  }

  function clickAppCards(cardsList) {
    cardsList.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.add('play-block__card--active')
        const countActive = document.getElementsByClassName('play-block__card--active').length

        const selectedCards = document.getElementsByClassName('play-block__card--active')
        console.log(countActive)
        if (countActive == 2) {
          if (selectedCards[0].textContent == selectedCards[1].textContent) {
            selectedCards[0].classList.add('play-block__card--done')
            selectedCards[1].classList.add('play-block__card--done')
          } else {
            selectedCards[0].classList.add('play-block__card--wrong')
            selectedCards[1].classList.add('play-block__card--wrong')
          }
          sleep().then(() => {
            cardsList.forEach(card => {
              card.classList.remove('play-block__card--active')
              card.classList.remove('play-block__card--wrong')
            })
          })
        }
      })
    });
  }

  function gameStart(startBlock, playBlock) {
    startBlock.classList.add('app__start-block--close')
    sleep().then(() => {
      playBlock.classList.remove('play-block--disabled')
    })
  }

  function gameOver(startBlock, playBlock) {
    if (document.getElementsByClassName('play-block__card').length == document.getElementsByClassName('play-block__card--done').length) {
      playBlock.classList.add('play-block--disabled')
      sleep().then(() => {
        startBlock.classList.remove('app__start-block--close')
      })
    }
  }


  function createApp(app) {
    const appStartBlock = createAppStartBlock()
    app.append(appStartBlock.appStartBlock)

    appStartBlock.appBtn.addEventListener('click', () => {
      const cardsCount = appStartBlock.appInput.value
      appStartBlock.appInput.value = ''
      const appPlayBlock = createAppPlayBlock(cardsCount)
      const appCardsList = appPlayBlock.appCardsList

      app.append(appPlayBlock.appPlayBlock)

      clickAppCards(appCardsList)

      gameStart(appStartBlock.appStartBlock, appPlayBlock.appPlayBlock)

      appCardsList.forEach(card => {
        card.addEventListener('click', () => {
          gameOver(appStartBlock.appStartBlock, appPlayBlock.appPlayBlock)
        })
      });
    })


  }

  document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app')
    createApp(app)
  })
})()
