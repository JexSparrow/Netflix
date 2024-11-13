const audio = document.querySelector(".audio")
const video = document.querySelector(".video")
const buttonVideo = document.querySelector(".botao-som")
const buttonMaisInfo = document.querySelector(".botao-mais-infos")
const buttonAssistir = document.querySelector(".botao-assistir")
const conteinerInfo = document.querySelector(".conteiner-info")
const modal = document.querySelector(".modal")

window.addEventListener("load", tocarAudio)


function tocarAudio() {
    audio.play()
}

function tocarVideo() {
    if (video.muted = !video.muted) {

        video.style.filter = "brightness(40%)"
        conteinerInfo.style.visibility = "visible"

    } else {
        conteinerInfo.style.visibility = "hidden"
        video.style.filter = "brightness(100%)"
    }
}

function mostrarModal() {

    modal.style.display = "block"

}

function esconderModal() {
    modal.style.display = "none"
}

buttonVideo.addEventListener("click", tocarVideo)
buttonMaisInfo.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)
video.addEventListener("click", tocarVideo)



