const modal = document.getElementById('modal-trailer');
const video = document.getElementById('video-yt');
const linkVideo = "https://youtu.be/SgZI655GgHk?si=zAnAGOzqMHy3hZyx";

function abrirModal() {
  modal.style.display = "block";
  video.src = linkVideo;
}

function fecharModal() {
  modal.style.display = "none";
  video.src = ""; 
}

window.onclick = function(event) {
  if (event.target == modal) {
    fecharModal();
  }
}