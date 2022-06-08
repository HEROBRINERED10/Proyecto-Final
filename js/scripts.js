var visible=document.getElementById('visible');

menu.addEventListener('click',()=>{
    visible=document.getElementById('visible');
    if(visible.className=='novisible'){
        visible.classList.remove('novisible');
        visible.classList.add('visible');
        caja.style.width = "91%";
    }
    else{
        visible.classList.remove('visible');
        visible.classList.add('novisible');
        caja.style.width = "90%";
    }
});