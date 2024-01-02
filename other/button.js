var libutton=document.querySelectorAll('nav>ul>li>ul>li');
libutton.forEach(function(li){
li.addEventListener('click',function(event){
    var anchor=li.querySelector('a');
    if(anchor){
    window.location.href=anchor.href;}
})});