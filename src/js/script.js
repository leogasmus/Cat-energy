document.getElementById('btnBef').onclick = function(){
	document.getElementById('line').style.left = "0",
	document.getElementById('catPhoto').src = 'dist/img/fat-cat.png';
};
document.getElementById('btnAf').onclick = function(){
	document.getElementById('line').style.left = "55px",
	document.getElementById('catPhoto').src = 'dist/img/tiny-cat.png';	
};