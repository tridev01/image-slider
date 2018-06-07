function slider(){
  var imgs = document.getElementById('choose_image').getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++){
    imgs[i].onclick = function (){
      document.getElementById('largeimage').src='large_image/'+this.id+'.jpg';
    }
  };      
}
window.onload = slider;