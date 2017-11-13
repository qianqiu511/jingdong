// window.onload = function(){
// 		var name = document.getElementById('username');
// 		var pwd = document.getElementById('password');
// 		var yxyz = document.getElementById('yxyz');
// 		var sj = document.getElementById('sj');
// 		var reg = document.getElementById('regi');
// 		var login = document.getElementById('login');
// 		var isOk = false;
// 		reg.onclick = function(){
// 			if(name.value != ''){
// 				isOk = true;
// 				alert('注册成功')
// 			} else{
// 				alert('请输入账号')
// 			}
// 		}
// 		login.onclick = function(){
// 			if(isOk){
// 				window.location.href = 'login.html?abc=' + name.value;
// 			} else{
// 				alert('请先注册')
// 			}
// 		}		
// }
//username tips
	var nameTips1 = document.getElementById('nameTips1');
	var nameTips2 = document.getElementById('nameTips2');
	var nameTips3 = document.getElementById('nameTips3');
	var nameTips4 = document.getElementById('nameTips4');
	var username = document.getElementById('username');
	var tick1 = document.getElementById('tick1');
	var str1;	
	//默认提示：支持中文、字母、数字、“-”“_”的组合，4-20个字符
	username.onclick = function(){
		str1 = username.value;
		if(str1=='') {
			nameTips1.style.display = 'block';
		}  
	}
	//格式错误，仅支持汉字、字母、数字、“-”“_”的组合
	username.onkeyup = function(){
		var pattern1 = /\W/g;
		var pattern3 = /^\w{1,3}$|^\w{21,}$/;
		var pattern4 = /^\d*$/g;
		str1 = username.value;	
		if(pattern1.test(str1)){
			nameTips2.style.display = 'block';
			nameTips1.style.display = 'none';
			nameTips4.style.display = 'none';
			tick1.style.display = 'none'; 
		}	else if(!pattern3.test(str1)){
			nameTips3.style.display = 'none';
		} else if(!pattern4.test(str1)&&str1!=''){
			nameTips4.style.display = 'none';
		} else if(str2!=''){
			tick1.style.display = 'block'; 
		}
	}
	//nameTips3:长度只能在4-20个字符之间
	//nameTips4:用户名不能是纯数字，请重新输入！
	username.onmouseout = function(){
		var pattern3 = /^\w{1,3}$|^\w{21,}$/;
		var pattern4 = /^\d*$/g;
		str1 = username.value;
		if(pattern4.test(str1)&&str1!=''){
			nameTips4.style.display = 'block';
			nameTips1.style.display = 'none';
			nameTips2.style.display = 'none';
			nameTips3.style.display = 'none';
			tick1.style.display = 'none';
		} else if(pattern3.test(str1)){
			nameTips3.style.display = 'block';
			nameTips1.style.display = 'none';
			nameTips2.style.display = 'none';
			nameTips4.style.display = 'none';
			tick1.style.display = 'none';
		}	else if(str1!=''){
			tick1.style.display = 'block'; 
		}	
	}
//password tips
	var pwdTips1 = document.getElementById('pwdTips1');
	var pwdTips2 = document.getElementById('pwdTips2');
	var pwdTips3 = document.getElementById('pwdTips3');
	var pwd = document.getElementById('password');
	var str2;	
	//默认提示：建议使用字母、数字和符号两种及以上的组合，6-20个字符
	pwd.onclick = function(){
		str2 = pwd.value;
		if(str2=='') {
			pwdTips1.style.display = 'block';
			pwdTips2.style.display = 'none';
			pwdTips3.style.display = 'none';
		}  
	}
	//nameTips2:长度只能在6-20个字符之间
	//nameTips3:有被盗风险,建议使用字母、数字和符号两种及以上组合
	pwd.onmouseout = function(){
		var pattern2 = /^\w{1,5}$|^\w{21,}$/;
		var pattern3 = /^\d*$/g;
		str2= pwd.value;
		if(pattern3.test(str2)&&str2!=''){
			pwdTips3.style.display = 'block';
			pwdTips1.style.display = 'none';
			pwdTips2.style.display = 'none';
			tick2.style.display = 'none'; 
		} else if(pattern2.test(str2)){
			pwdTips2.style.display = 'block';
			pwdTips1.style.display = 'none';
			pwdTips3.style.display = 'none';
			tick2.style.display = 'none'; 
		} else if(str2!=''){
			tick2.style.display = 'block'; 
		}	
	}
	pwd.onkeyup = function(){
		str2= pwd.value;
		var pattern22 = /^\w{6,20}$/;
		var pattern3 = /^\d*$/g;
		if(pattern22.test(str2)){
			pwdTips2.style.display = 'none';
			pwdTips1.style.display = 'none';
		} else if(!pattern3.test(str2)){
			pwdTips3.style.display = 'none';
			pwdTips1.style.display = 'none';
		} else if(str2!=''){
			tick2.style.display = 'block'; 
		}
	}
//Confirm password tips
	var cpwdTips1 = document.getElementById('cpwdTips1');
	var cpwdTips2 = document.getElementById('cpwdTips2');
	var cpwd = document.getElementById('qrmm');
	var str3;	
	//默认提示：请再次输入密码
	cpwd.onclick = function(){
		str3 = cpwd.value;
		if(str3=='') {
			cpwdTips1.style.display = 'block';
			cpwdTips2.style.display = 'none';
		}  
	}
	cpwd.onmouseout =function(){
		str2 = pwd.value;
		str3 = cpwd.value;
		if(str3!=str2&&str3!=''){
			cpwdTips2.style.display = 'block';
			cpwdTips1.style.display = 'none';
			tick3.style.display = 'none';
		} else if(str3!=''){
			tick3.style.display = 'block'; 
		}
	}




	




















//验证码
var yzm = document.querySelector('.yzm_pic');
yzm.onclick = function(){
	yzm.innerHTML = '';
	var arr = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png','img/7.png','img/8.png'];
	for(var i=0;i<4;i++){
		var index = Math.floor(Math.random()*arr.length);
		var img = document.createElement('img');
		img.src = arr[index];
		yzm.appendChild(img);
		img.style.marginTop='5px';
		img.style.height= '35px';
		img.style.width= '25px';
		img.style.textAlign= 'center';
		img.style.lineHeight= '52px';
	} 
}