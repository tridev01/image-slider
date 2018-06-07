function sliderImage(){
  var imgs = document.getElementById('innerimage').getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++){
    imgs[i].onclick = function (){
      document.getElementById('largeimage').src='large_image/'+this.id+'.jpg';
    }
  }      
}
sliderImage();

var thumbMover = 0;
document.getElementsByClassName('previousscroll')[0].onclick = thumbMoverFunc;
document.getElementsByClassName('nextscroll')[0].onclick =thumbMoverFunc;
function thumbMoverFunc(){
  var whichBtn = this.className;
  if(whichBtn == 'previousscroll'){  
    thumbMover += 152;
    if(thumbMover > 0){
      thumbMover = 0;
    }    
  }

  if(whichBtn == 'nextscroll'){
    thumbMover -= 152;
    if(thumbMover < -608){
      thumbMover = -608;
    }
  }
  
  document.getElementById('innerimage').style.left = thumbMover+"px";  
}