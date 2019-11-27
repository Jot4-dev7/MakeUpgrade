window.addEventListener('scroll',(event)=>{
    let nav = document.getElementsByTagName("nav")[0];
    console.log(event);
    if(event.pageY <= 0){
        nav.style.position = 'relative';
    } else  {
        nav.style.position = 'fixed';
    } 
})