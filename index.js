
var c = 1 ;
function navbarToggle() {
    console.log("clicked");
  
    var element1 = document.getElementById("navBox");
    element1.classList.toggle("navBox1");
  
    var element2 = document.getElementById("mid");
    element2.classList.toggle("mid1");


    var element3 = document.getElementById("one")
    element3.setAttribute("stroke","white");

    // element3 = document.getElementsByClassName("line") ;
    // element2.classList.toggle("lineChangeColor");

      var anime = document.getElementById('animation') ;
    if(c)
    {
      anime.style.opacity = 1;
      c=0 ;
    }
    else
   {
    c++;
    anime.style.opacity = 1;

   }

    
  }
  var ele =  document.getElementById('animation')
  ele.style.position='absolute'
    ele.style.top='15%'
    ele.style.right='0%'
  
 
  
  // ele.style.right='-3%'
  // ele.style.display = 'none';

  


