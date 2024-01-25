let joke = document.querySelector('.joke')
let btn = document.querySelector('.btn')

let url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,explicit'

let getJoke = async() => {
    let response = await fetch(url)
    let jkData = await response.json()
    let rndJoke 

    if (jkData.type === 'single') {
        rndJoke = jkData.joke
    } else if (jkData.type === 'twopart') {
        rndJoke = `${jkData.setup}\n${jkData.delivery}`
    }
    joke.textContent = rndJoke
    // console.log(jkData);

}

btn.addEventListener('click',getJoke)

getJoke()
 