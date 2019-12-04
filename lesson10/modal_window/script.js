var modal = document.querySelector("#modal"),
modalOverlay = document.querySelector("#modal_window"),
btnClose = document.getElementById('btnClose');
btnOpen = document.getElementById('btnOpen');

btnClose.addEventListener("click", ()=> {
   modal.classList.toggle("closed");
   modalOverlay.classList.toggle("closed");
btnOpen.style.display='block';
btnClose.style.display='none';
});

btnOpen.addEventListener("click", () => {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    btnOpen.style.display='none';
    btnClose.style.display='block';
});