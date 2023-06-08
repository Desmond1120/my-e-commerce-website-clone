const bar = document.getElementById('bar');
const gone = document.getElementById('gone');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', function(){
        nav.classList.add('active');
    })  
}


if(gone){
    gone.addEventListener('click', function(){
        nav.classList.remove('active');
    })  
}

const MainImage =  document.getElementById('mainImg');

const smallImg = document.getElementsByClassName('small-img');

smallImg[0].addEventListener('click', function(){
  MainImage.src = smallImg[0].src;
});

smallImg[1].addEventListener('click', function(){
  MainImage.src = smallImg[1].src;
});

smallImg[2].addEventListener('click', function(){
  MainImage.src = smallImg[2].src;
});

smallImg[3].addEventListener('click', function(){
  MainImage.src = smallImg[3].src;
});