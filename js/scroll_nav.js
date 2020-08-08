window.onscroll  = function(){myFunction()};

function myFunction(){
    if(document.body.scrollTop > 300 || document.body.scrollTop < 150){
      document.getElementById("navbar_2_scroll").style.display = 'block';
    }else{
        document.getElementById("navbar_2_scroll").style.display = 'none';
    }
}
