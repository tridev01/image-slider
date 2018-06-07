
window.onload = function (){thumbGen('images', altCaption)};
  var clkFlag = true;
  var thisPic = 0;
  var myImages = new Array("small-1-big", "small-2-big",
  "small-3-big", "small-4-big", "small-5-big", "small-6-big",
  "small-7-big", "small-8-big", "small-9-big", "small-10-big",
  "small-11-big", "small-12-big", "small-13-big", "small-14-big", 
  "small-15-big", "small-16-big");
  
  var altCaption = ['first','second','third','fourth','fifth','sixth','seventh','eightth','nine','tenth','eleventh','twelveth','thirteen','fourteen','fifteen'];

  var birdAltCaption = ['bird 1','bird 2','bird 3','bird 4','bird 5','bird 6','bird 7','bird 8','bird 9','bird 10',
  'bird 11','bird 12','bird 13','bird 14','bird 15','bird 16'];

  var dogAltCaption = ['dog 1','dog 2','dog 3','dog 4','dog 5','dog 6','dog 7','dog 8','dog 9','dog 10',
  'dog 11','dog 12','dog 13','dog 14','dog 15','dog 16'];

  var dolphinAltCaption = ['dolphin 1','dolphin 2','dolphin 3','dolphin 4','dolphin 5','dolphin 6','dolphin 7','dolphin 8','dolphin 9','dolphin 10',
  'dolphin 11','dolphin 12','dolphin 13','dolphin 14','dolphin 15','dolphin 16'];
  
  var nationalAltCaption = ['national 1','national 2','national 3','national 4','national 5','national 6','national 7','national 8','national 9','national 10',
  'national 11','national 12','national 13','national 14','national 15','national 16'];

  var carAltCaption = ['car 1','car 2','car 3','car 4','car 5','car 6','car 7','car 8','car 9','car 10',
  'car 11','car 12','car 13','car 14','car 15','car 16'];

   var godAltCaption = ['god 1','god 2','god 3','god 4','god 5','god 6','god 7','god 8','god 9','god 10',
  'god 11','god 12','god 13','god 14','god 15','god 16'];

  var bikeAltCaption = ['bike 1','bike 2','bike 3','bike 4','bike 5','bike 6','bike 7','bike 8','bike 9','bike 10',
  'bike 11','bike 12','bike 13','bike 14','bike 15','bike 16'];

  var modelAltCaption = ['model 1','model 2','model 3','model 4','model 5','model 6','model 7','model 8','model 9','model 10',
  'model 11','model 12','model 13','model 14','model 15','model 16'];
 
  var numThumbs = 16;
  function thumbGen(thumbFolder, altCapArr){
    document.getElementById('thumbsDiv').innerHTML = "";
    var getCont = document.getElementById('thumbsDiv');
    var n = 1;
    for(var i=0; i<16; i++){
      var cImg = document.createElement('img');
      cImg.setAttribute('src', thumbFolder+'/small-'+n+'.jpg');
      cImg.setAttribute('id','small-'+n);
      cImg.setAttribute('alt', altCapArr[i]);
      n++;

      getCont.appendChild(cImg);
    }
    captChanger();
    gallery();
  }
  
  thumbGen('images', altCaption);
  var galleryType = 'misc';
  document.getElementById('bird_Gallery').onclick = function (){
    galleryType = 'bird';
    thumbGen('bird_images', birdAltCaption);
  }
  document.getElementById('dog_Gallery').onclick = function (){
    galleryType = 'dog';
    thumbGen('dog_images', dogAltCaption);
  }
  document.getElementById('dolphin_Gallery').onclick = function (){
    galleryType = 'dolphin';
    thumbGen('dolphin_images', dolphinAltCaption);
  }
  document.getElementById('bike_Gallery').onclick = function (){
    galleryType = 'bike';
    thumbGen('bike_images', bikeAltCaption);
  }
 
 var allimages = document.images;
  function gallery(){
    allimages = document.images;
    captChanger();
		for(var i=0; i<allimages.length; i++){
			if(allimages[i].id.indexOf("small") >-1){
				allimages[i].onclick = imgChanger;
			}
		}
	}

  //setting foucs on first thumb
  document.getElementById('thumbsDiv').getElementsByTagName('img')[0].className = 'clicked';
  var folderLarge = 'images/';
	function imgChanger(){
    if(galleryType == 'bird'){
      folderLarge = 'bird_images/';
    }else if(galleryType == 'dog'){
      folderLarge = 'dog_images/';
    }else if (galleryType == 'dolphin') {
        folderLarge = 'dolphin_images/'
    }else if (galleryType == 'bike') {
        folderLarge = 'bike_images/'
    }

    var getThumbId = this.id;
    thisPic = getThumbId.substr(getThumbId.indexOf('-')+1)-1;
    //alert(thisPic);
     
    captChanger();
		document.getElementById('myPicture').src = folderLarge+this.id+"-big.jpg";

    for(var i = 0; i<allimages.length; i++){
      allimages[i].className = '';
    }
    this.className = 'clicked';
	}
 
	// start scripting for thumbnail scroll
	var moveThum = 0;
	function prev () {
 		moveThum += 50;
 		thumbsDiv.style.left = moveThum+"px";
    if(moveThum >= -40) {
      moveThum = -40;
 		};
 	}
 	pBtn.onclick = prev;
  
  function next () {
		moveThum -= 50;
		thumbsDiv.style.left = moveThum+"px";
		 if (moveThum <= -1680) {
			moveThum = -1680;
		};
	}
	nBtn.onclick = next;

// end scripting for thumbnail scroll
// scripting of next previous in big image
 //var capti = document.getElementById('capt').innerHTML;
  var imgCt = myImages.length-1;
  function nextImage () {
  	thisPic++;
	  if (thisPic > imgCt) {
		 thisPic = 0;
    }
      
    document.getElementById('myPicture').src = folderLarge+myImages[thisPic]+".jpg";
    captChanger();
    focusChanger();
  }
  nex.onclick = nextImage;

  function prevImage () {
  	thisPic--;
		if (thisPic <= -1) {
			thisPic = imgCt;
    }
     
    document.getElementById('myPicture').src = folderLarge+myImages[thisPic]+".jpg";
    captChanger();
    focusChanger();
  }
  pre.onclick = prevImage;  
  
  //caption changer
  function captChanger(){
    document.getElementById('capt').innerHTML = document.getElementById('thumbsDiv').getElementsByTagName('img')[thisPic].alt;
  }

  //thumb focus changer
  function focusChanger(){
    for(var i = 0; i<allimages.length; i++){
      allimages[i].className = '';
    }
    
    document.getElementById('thumbsDiv').getElementsByTagName('img')[thisPic].className = 'clicked';
  }

//  end scripting of next previous in big image
// start scripting for digital clock

function digiClock(){
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    if(h>12){
     h = h-12;
    }
    if(h<10){
     h = '0'+h;
    }
    if(m<10){
     m = '0'+m;
    }
    if(s<10) {
      s = '0'+s;
    }
  function showAmPm() {
    if (time.getHours()< 12) {
      return "  am";
    }
    return "  pm";
  }
    document.getElementById('clock').innerHTML = h+":"+m+":"+s+showAmPm();
    
}
  var sid = setInterval(digiClock, 1000);
  //end digital clock script


