searchForm= document.querySelector('search-form');

document.querySelector('#searchbtn').onclick=() => {
    searchForm.classList.toggle('active');
}

// let loginForm= document.querySelector('.login-form') ;
// document.querySelector('#login-btn').onclick=() => {
//     loginForm.classList.toggle('active');
// }

// document.querySelector('#close').onclick=() => {
//     loginForm.classList.remove('active');
// }

window.onscroll=() => {
    searchForm.classList.remove('active');
    if(window.scrollY > 80) {
        document.querySelector('.header .header-1').classList.add('active');
    }
    else{
        document.querySelector('.header .header-1').classList.remove('active');
    }
}

window.onload=() => { 
    if(window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

// function imageloop() {
//     var i;
//     var x = document.getElementsByClassName("image");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) { myIndex = 1 }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(imageloop, 2000);
// }
