window.onload = function(){
	var str = location.search;//?abc=1(等号右面为注册页的账户名)
	console.log(str)
	var index = str.search('=');
	var picName = str.slice(5);
	var btn = document.getElementById('btn');
	var name = document.getElementById('usename');
	// btn.onclick = function(){
	// 	if(name.value == picName){
	// 		window.location.href = 'index.html';
	// 	} else {
	// 		// alert('您输入的账户名有误')
	// 	}
	// }
}
//扫码登陆与账户登陆之间切换
	var sao = document.getElementById('sao');
	var zhang = document.getElementById('zhang');
	var sao1 = document.getElementById('sao1');
	var zhang1 = document.getElementById('zhang1');
	var form = document.getElementById('form');
	var qr = document.getElementById('qrcode-login');
	sao.onclick = function(){	
		sao1.style.color='#e4393c';
		zhang1.style.color='#666';
		sao1.style.fontWeight='bold';
		zhang1.style.fontWeight='normal';
		qr.style.display='block';
		form.style.display='none';
	}
	zhang.onclick = function(){
		sao1.style.color='#666';
		zhang1.style.color='#e4393c';
		sao1.style.fontWeight='normal';
		zhang1.style.fontWeight='bold';
		qr.style.display='none';
		form.style.display='block';		
	}
//用户名密码输入错误提示
	var msg1 = document.getElementById('msg1');
	var msg2 = document.getElementById('msg2');
	var msg3 = document.getElementById('msg3');
	var usename = document.getElementById('usename');
	var pwd = document.getElementById('pwd');
	var btn = document.getElementById('btn');
	btn.onclick=function(){	
		if(usename.value==''&&pwd.value!=''){
			msg1.style.display = 'block';
			msg2.style.display = 'none';
			msg3.style.display = 'none';		
		}
		if(pwd.value==''&&usename.value!=''){
			msg2.style.display = 'block';
			msg1.style.display = 'none';
			msg3.style.display = 'none';
		}
		if(usename.value==''&&pwd.value==''){
			msg3.style.display = 'block';
			msg1.style.display = 'none';
			msg2.style.display = 'none';
		}
		if(usename.value!=''&&pwd.value!=''){
			msg3.style.display = 'none';
			msg1.style.display = 'none';
			msg2.style.display = 'none';			
		}
	}
//显示X,清除用户名和密码
	var clear1 = document.getElementById('clear1');
	var clear2 = document.getElementById('clear2');
	usename.onkeyup = function(){				
		if(usename.value!=''){
			clear1.style.display = 'block';
		}else{
			clear1.style.display = 'none';
		}
	}
	pwd.onkeyup = function(){		
		if(pwd.value!=''){
			clear2.style.display = 'block';
		}else{
			clear2.style.display = 'none';
		}
	}
	clear1.onclick = function(){
		if(usename.value!=''){
			usename.value = '';
			clear1.style.display = 'none';
		}
	}
	clear2.onclick = function(){
		if(pwd.value!=''){
			pwd.value = '';
			clear2.style.display = 'none';
		}
	}
//用户名密码框图标事件
	var use = document.getElementById('use');
	var passw = document.getElementById('passw');
	var user = document.getElementById('user');
	var password = document.getElementById('password');