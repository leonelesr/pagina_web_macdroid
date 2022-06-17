//Variables
//Tomar el id de nav
let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let abrir = document.getElementById("open");
let botones = document.getElementsByClassName("btn-header");
let cerrado = true;

function menus(){
	let desplazamiento_actual = window.pageYOffset;
	if(desplazamiento_actual <= 50){
		nav.classList.remove('nav2');
		nav.className = ('nav1');
		nav.style.transition ='1s';
		menu.style.top = '80px';
		abrir.style.color = '#fff'; /* Cambiar el color del icono */
	} else{
		nav.classList.remove('nav1');
		nav.className = ('nav2');
		nav.style.transition ='1s';
		abrir.style.color = '#000';
	}
}


/* Agregar event listener */
window.addEventListener('load',function (){
	$('#onload').fadeOut(); /* cuando la ventana se cargue por completo */
	$('body').removeClass('hidden');
	menus();
	
});
window.addEventListener('scroll', function(){
	menus();	
});
/* */
window.addEventListener('resize',function(){
	if(this.screen.width >= 700){
		cerrado = true;
		menu.style.removeProperty('overflow');
		menu.style.removeProperty('width');
	}
});
window.addEventListener('click', function(e){
	//console.log(e.target);
	if(cerrado == false){
		let span = document.querySelector('span'); //el primer span es el icono del menú
		if(e.target !== span && e.target !== abrir){ //abrir es el contenedor del icono
			menu.style.width = '0%';
			menu.style.overflow = 'hidden';
			cerrado = true;
		}
	}
});
abrir.addEventListener('click',function(){
	apertura();
});