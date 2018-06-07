window.onload = nameFieldInit;
	var lnk = document.createElement('link');
	
	function attachCSS(path){		
		lnk.setAttribute('href', path);
		lnk.setAttribute('rel', 'stylesheet');
		lnk.setAttribute('type', 'text/css');
		var getHead = document.getElementsByTagName('head')[0];
		getHead.appendChild(lnk);
	}
	
	function nameFieldInit(){
		var userName = "";
	
		if (document.cookie != "") {
			userName = document.cookie.split("=")[1];
			if(userName == "Red" || userName == ""){
				attachCSS("first.css");
			}else if(userName == "Green"){
				attachCSS("second.css");
			}else{
				attachCSS("third.css");
			}			
		}else{
			alert("Cookies does not exist??");
		}
		abc();
	}
	function abc(){
		document.getElementById('theme1').onclick = setCookie1;
		document.getElementById('theme2').onclick = setCookie2;
		document.getElementById('theme3').onclick = setCookie3;
	}
	
	function setCookie1() {
		var expireDate = new Date();
		expireDate.setSeconds(expireDate.getSeconds()+300);	
		var userName = "Red";		
		document.cookie = "userName=" + userName + ";path=/;expires=" + expireDate.toGMTString();
		nameFieldInit();
	}
	function setCookie2() {
		var expireDate = new Date();
		expireDate.setSeconds(expireDate.getSeconds()+300);	
		var userName = "Green";		
		document.cookie = "userName=" + userName + ";path=/;expires=" + expireDate.toGMTString();
		nameFieldInit();
	}
	function setCookie3() {
		var expireDate = new Date();
		expireDate.setSeconds(expireDate.getSeconds()+300);	
		var userName = "Blue";		
		document.cookie = "userName=" + userName + ";path=/;expires=" + expireDate.toGMTString();
		nameFieldInit();
	}