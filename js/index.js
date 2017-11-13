	var close = document.getElementById('event_close');
	close.onclick = function(){
		var event = document.getElementById('event');
		event.style.display = 'none';
	}
//banner
var banner = document.getElementById('banner');
var bannerImg = document.getElementById('bannerImg');
var imgIndex = document.querySelectorAll('.imgIndex');
var i=0;
setInterval(function(){
	if(i>=imgIndex.length){
		i=0;
	}
	for(var j=0;j<imgIndex.length;j++){
		if(i == j){
			imgIndex[j].style.background = '#d43e2e';
		}else{
			imgIndex[j].style.background = '#fff';
		}
	}
	i++;
	bannerImg.src = 'img/banner' + i + '.jpg';	
},1000)
	// var banner = document.querySelector('.bann');
	// var ban1 = document.querySelector('#btnbtn1');
	// var ban2 = document.querySelector('#btnbtn2');
	// var ban3 = document.querySelector('#btnbtn3');
	// var ban4 = document.querySelector('#btnbtn4');
	// var ban5 = document.querySelector('#btnbtn5');
	// var ban6 = document.querySelector('#btnbtn6');
	// var banbtn = document.querySelector('.banbtn');
	// var img = document.createElement('img');
	// var timer;
	// var isOk=true;
	// window.onload = function(){
	// 	var arr = ['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg','img/banner6.jpg'];
	// 	var i = 0;
	// 	timer=setInterval(function(){
	// 		if(i<6&&isOk){
	// 			img.src = arr[i];
	// 			img.style.display= 'inline-block';
	// 			img.style.position= 'absolute';
	// 			img.style.top= '0';
	// 			banner.appendChild(img);
	// 			switch(i){
	// 				case 0:ban6.style.background = '#3e3e3e';ban1.style.background = '#B61B1F';break;
	// 				case 1:ban1.style.background = '#3e3e3e';ban2.style.background = '#B61B1F';break;
	// 				case 2:ban2.style.background = '#3e3e3e';ban3.style.background = '#B61B1F';break;
	// 				case 3:ban3.style.background = '#3e3e3e';ban4.style.background = '#B61B1F';break;
	// 				case 4:ban4.style.background = '#3e3e3e';ban5.style.background = '#B61B1F';break;
	// 				case 5:ban5.style.background = '#3e3e3e';ban6.style.background = '#B61B1F';break;
	// 			}
	// 			i++;
	// 		} else{
	// 			i=0;
	// 		}		
	// 	},2000)			
	// }
	// ban1.onmouseover = function(){
	// 	this.style.background = '#B61B1F';
	// 	isOk==false;
	// 	img.src = 'img/banner1.jpg';
	// }
	// ban1.onmouseout = function(){
	// 	this.style.background = '#3e3e3e';
	// 	isOk==true;
	// }
	// ban2.onmouseover = function(){
	// 	this.style.background = '#B61B1F';
	// 	isOk==false;
	// 	img.src = 'img/banner2.jpg';
	// }
	// ban2.onmouseout = function(){
	// 	this.style.background = '#3e3e3e';
	// 	isOk==true;
	// }
	// ban3.onmouseover = function(){
	// 	this.style.background = '#B61B1F';
	// 	isOk==false;
	// 	img.src = 'img/banner3.jpg';
	// }
	// ban3.onmouseout = function(){
	// 	this.style.background = '#3e3e3e';
	// 	isOk==true;
	// }
	// ban4.onmouseover = function(){
	// 	this.style.background = '#B61B1F';
	// 	isOk==false;
	// 	img.src = 'img/banner4.jpg';
	// }
	// ban4.onmouseout = function(){
	// 	this.style.background = '#3e3e3e';
	// 	isOk==true;
	// }
	// ban5.onmouseover = function(){
	// 	this.style.background = '#B61B1F';
	// 	isOk==false;
	// 	img.src = 'img/banner5.jpg';
	// }
	// ban5.onmouseout = function(){
	// 	this.style.background = '#3e3e3e';
	// 	isOk==true;
	// }
	// ban6.onmouseover = function(){
	// 	this.style.background = '#B61B1F';
	// 	isOk==false;
	// 	img.src = 'img/banner6.jpg';
	// }
	// ban6.onmouseout = function(){
	// 	this.style.background = '#3e3e3e';
	// 	isOk==true;
	// }

// 右侧快速导航出现消失
	var bheader = document.querySelector('.bianl-header');
	var nav = document.querySelector('.nav');
	var hideclose = document.querySelector('.hide-close');
	var isShow=false;
	bheader.onclick = function(){
		if(isShow){
			nav.style.right = '0';
			isShow=false;
		}else{
			nav.style.right = '270px';
			isShow=true;
		}
	}
	hideclose.onclick = function(){
			nav.style.right = '0';
			isShow=false;	
	}

//左侧快捷导航滚轮滚动出现
	var box = document.querySelector('.box');
    window.onscroll=function(){
		var t=document.documentElement.scrollTop||document.body.scrollTop;
		if(t>=600){
			box.style.display="inline";
		}else{
			box.style.display="none";
		}
	} 
