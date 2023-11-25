import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false

    document.documentElement.classList.remove('running')
    
    sounds.buttonPressAudio.play()
    timer.updateDisplay()
}

export function plus(){
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    minutes = minutes >= 60? minutes = 0 : minutes = minutes + 5
    timer.updateDisplay(minutes,seconds)
}

export function minus(){
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    minutes = (minutes - 5) < 0? minutes = 0 : minutes = minutes - 5  
    timer.updateDisplay(minutes,seconds)
}
export function forestMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        el.forest.classList.add('active')
        sounds.bgAudioForest.play()
        return
    }

    sounds.bgAudioForest.pause()
    el.forest.classList.remove('active')
}

export function rainMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        el.rain.classList.add('active')
        sounds.bgAudioRain.play()
        return
    }

    sounds.bgAudioRain.pause()
    el.rain.classList.remove('active')
}

export function coffeeshopMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        el.coffeeshop.classList.add('active')
        sounds.bgAudioCoffeeShop.play()
        return
    }

    sounds.bgAudioCoffeeShop.pause()
    el.coffeeshop.classList.remove('active')
}

export function fireplaceMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        el.fireplace.classList.add('active')
        sounds.bgAudioFireplace.play()
        return
    }

    sounds.bgAudioFireplace.pause()
    el.fireplace.classList.remove('active')
}


