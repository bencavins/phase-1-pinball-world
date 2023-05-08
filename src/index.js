// get all games from db
fetch("http://localhost:3000/games")
.then(resp => resp.json())
.then(data => {
    const gameList = document.querySelector('.game-list')
    data.forEach((game) => {
        const h5 = document.createElement('h5')
        h5.textContent = `${game.name} (${game.manufacturer_name})`
        gameList.appendChild(h5)

        h5.addEventListener('click', (event) => {
            renderGame(game)
        })
    })

    renderGame(data[0])
})

function renderGame(game) {
    const img = document.querySelector('#detail-image')
    const title = document.querySelector('#detail-title')
    const highScore = document.querySelector('#detail-high-score')

    img.src = game.image
    img.alt = game.name

    title.textContent = game.name
    highScore.textContent = game.high_score
}

const form = document.querySelector('#high-score-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const newScore = Number.parseInt(document.querySelector('#score-input').value)
    document.querySelector('#detail-high-score').textContent = newScore
    form.reset()
})