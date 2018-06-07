function sliderImage(){
  var imgs = document.getElementById('innerimage').getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++){
    imgs[i].onclick = function (){
      document.getElementById('largeimage').src='large_image/'+this.id+'.jpg';
      document.getElementById('caption').innerHTML=this.alt;
    }
  }      
  document.getElementById('caption').innerHTML=imgs[0].alt;
}
sliderImage();


var thumbMover = 0;
function leftThumbArr(){
document.getElementsByClassName('previousscroll')[0].onclick = function (){
     thumbMover += 152;
    if(thumbMover > 0){
      thumbMover = 0;
    }         

     document.getElementById('innerimage').style.left = thumbMover+"px";        
  }
}
leftThumbArr();

function rightThumbArr(){
document.getElementsByClassName('nextscroll')[0].onclick = function (){ 
    thumbMover -= 152;
    if(thumbMover < -608){
      thumbMover = -608;
    }       

    document.getElementById('innerimage').style.left = thumbMover+"px";
  }
}
rightThumbArr();


