const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'Front-end web developer'
let idx = 1
let speed = 200 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    // when the index is greater than the length we will reset the index and start again
    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)

}

speedEl.addEventListener('input', (e) => speed = 200 / e.target.value)