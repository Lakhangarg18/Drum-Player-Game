for(var i=0;i<document.querySelectorAll(".drum").length;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var q=this.innerHTML;
     makesound(q);
     makeanimation(q);

    
     
      
   
   
 })
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    makeanimation(event.key);
})
function makesound(key){
 switch (key) {
    case 'w':
        var w=new Audio("./sounds/tom-4.mp3")
        w.play()
        
        break;
    case 'a':
        var a=new Audio("./sounds/tom-3.mp3")
        a.play()
        
        break;
    case 's':
        var s=new Audio("./sounds/tom-2.mp3")
        s.play()
        
        break;
    case 'd':
        var d=new Audio("./sounds/tom-1.mp3")
        d.play()
        
        break;
    case 'j':
        var j=new Audio("./sounds/snare.mp3")
        j.play()
        
        break;
    case 'k':
        var k=new Audio("./sounds/kick-bass.mp3")
        k.play()
        
        break;
    case 'l':
        var l=new Audio("./sounds/crash.mp3")
        l.play()
        
        break;

 
    default:
        break;
 }
}
function makeanimation(btn){
   var w= document.querySelector("."+btn)
   w.classList.add("pressed")
   setInterval(function(){
    w.classList.remove("pressed")

   },500)
}