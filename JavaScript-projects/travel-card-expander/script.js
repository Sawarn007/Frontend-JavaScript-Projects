const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click', function(){
        removeActiveClass();
        panel.classList.add('active');
        
    })
});

function removeActiveClass(params) {
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}