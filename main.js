function backhome(){
    document.getElementById("home").scrollIntoView({behavior : 'smooth'});
}

document.getElementById('darkmode-toggle').addEventListener('change', function(){
    const selectMode = document.querySelector('body');

    if(this.checked){
        selectMode.style.backgroundImage = "url('./assets/img/malam.png')";
    }else{
        selectMode.style.backgroundImage = "url('./assets/img/pagi.png')";
        
    }
});