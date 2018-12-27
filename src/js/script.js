window.onload = function(){	
	var menuBtn = document.querySelector('.toggle'),
		menuList = document.querySelector('.navigatin__list');
	menuBtn.onclick = function(){
		menuBtn.classList.toggle('toggle-close'),
		menuList.classList.toggle('navigatin__list-hover');
	};
	document.querySelector('.control-before').onclick = function(){
		document.querySelector('.control-line__item').style.left = "0",
		document.querySelector('.catPhoto').src = 'dist/img/fat-cat.png';
	};
	document.querySelector('.control-after').onclick = function(){
		document.querySelector('.control-line__item').style.left = "55px",
		document.querySelector('.catPhoto').src = 'dist/img/tiny-cat.png';	
	};
};