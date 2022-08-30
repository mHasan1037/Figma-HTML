const toggles = document.querySelectorAll('.faq-title');
toggles.forEach(toggle =>{
    toggle.addEventListener('click', ()=>{
        toggles.forEach(toggle => toggle.parentNode.classList.remove('show'));
        toggle.parentNode.classList.toggle('show');
    })
})
