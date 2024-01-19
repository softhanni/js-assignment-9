function clock(){
    
    var date = new Date();
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    console.clear();

    console.log(hours +":"+minutes+":" +seconds)
    
    
}

setInterval(clock,1000)
