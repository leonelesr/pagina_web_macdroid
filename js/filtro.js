$(function () {
	$('.filter').click(function () { //Seleccionar con jquery todos los elementos que tengan la clase filtro. cuando les de click ejecutes la funcion
		$(this).addClass('active').siblings().removeClass('active'); //al elemento al que le dimos click le agregues la clase active y a sus hermanos le remuevas la clase
		let valor = $(this).attr('data-nombre'); //Variable que es igual al element que seleccionamos, tomamos el atributo data nombre
		if (valor == 'todos') { //si valor es igual a todos
			$('.cont-work').show('1000'); //Queremos que nuestra clase es cont-work muestre todo
		} else { //en otro caso
			$('.cont-work').not('.' + valor).hide('1000'); //si es esa clase que no la esconda y las demas sí
			$('.cont-work').filter('.' + valor).show('1000'); //
		}
	});

	let servicios = $('#servicios').offset().top, //tomar por secciones
		acerca = $('#acerca').offset().top,
		contacto = $('#contacto').offset().top;

	//cuando se hace responsive se deben a volver a declarar las variables
	window.addEventListener('resize', function () { //agregar evento para cuando se haga respnsive. Cuando haga resize se vuelvan a declarar las variables para asegurarnos que nos funcione perfecto
		let servicios = $('#servicios').offset().top,
			acerca = $('#acerca').offset().top,
			contacto = $('#contacto').offset().top;
	});

	$('#enlace-inicio').on('click', function (e) { //cuando de click en enlace-inicio on click, se ejecute la funcion
		e.preventDefault(); //Tomar el evento, que ya no funcione  si ya estamos en esa funcion
		$('html, body').animate({ //Lo que este en en html dentro del body queremos animarlo
			scrollTop: 0 //Queremos que haga un scroll top a la parte 0 para que nos mande a la parte mas alta de la pagina
		}, 600);
	});

	$('#enlace-servicios').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicios - 80 //nos va a redireccionar a la seccion equipo y le quitamos los 80 de la barra de navegacion
		}, 600);
	});

	$('#enlace-acerca').on('click', function (e) {
		let servicios = $('#servicios').offset().top,
			acerca = $('#acerca').offset().top,
			contacto = $('#contacto').offset().top;
		e.preventDefault();
		/*let services = document.getElementById("todos");
		let clases = services.classList;
		if (!(clases.contains("active"))) {
			let servicios = $('#servicios').offset().top, //tomar por secciones
				acerca = $('#acerca').offset().top;
			console.log("Si");
		} */
		$('html, body').animate({
			scrollTop: acerca - 80
		}, 600);
	});

	$('#enlace-contacto').on('click', function (e) {
		let servicios = $('#servicios').offset().top,
			acerca = $('#acerca').offset().top,
			contacto = $('#contacto').offset().top;
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto - 80
		}, 600);
	});
});
