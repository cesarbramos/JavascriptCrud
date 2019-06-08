
let contadorProductos = 1;
let editar = false;

let idEditar = '';
let descripcionEditar = '';
let precioEditar = '';
let cantEditar = '';
let totalEditar = '';
let boton = '';



function showCountProducts(){
	$('#contador').html(contadorProductos);
}

function editMode(){
	$('#cardProductos').addClass("bg-dark");
	$('#addItem').val("EDIT");
}

function normalMode(){
	$('#cardProductos').removeClass("bg-dark");
	$('#addItem').val("ADD");
}

$(document).ready( function (){
	$('#total').val('');
	$('#cant').val('');
});

$(document).keyup( '.result', function (){

	let id = $('#id');
	let descripcion = $('#descripcion');
	let cant = $('#cant');
	let precio = $('#precio');
	let total = $('#total');
	
	total.val( parseInt(precio.val()) * parseInt(cant.val()) );

	if( total.val() == "NaN"){
		total.val('');
	}

	if(precio.val() > 0 && cant.val() == ''){
		total.val( precio.val() );
	}

	if(cant.val() < 1){
		cant.val('');
	}


});

$('#formProduct').on('submit', function (e) {
	e.preventDefault();
	template = '';
	let id = $('#id');
	let descripcion = $('#descripcion');
	let cant = $('#cant');
	let precio = $('#precio');
	let total = $('#total');

	if(editar){

		idEditar = boton.parentElement.parentElement.cells[0].childNodes[0].data = id.val();
		descripcionEditar = boton.parentElement.parentElement.cells[1].childNodes[0].data = descripcion.val();
		precioEditar = boton.parentElement.parentElement.cells[2].childNodes[0].data = precio.val();
		cantEditar = boton.parentElement.parentElement.cells[3].childNodes[0].data = cant.val();
		totalEditar = boton.parentElement.parentElement.cells[4].childNodes[0].data = total.val();

		id.val(idEditar);
		descripcion.val(descripcionEditar);
		cant.val(cantEditar);
		precio.val(precioEditar);
		total.val(totalEditar);
		normalMode();
		$('#formProduct').trigger('reset');

	} else{

		if(total.val() == '' || total.val() == "NaN" || descripcion.val() == '' || id.val() == '' ||  cant.val() == '' ){
		alert("Some Fields are empty");

		} else{

			template += `
				<tr>
					<td>${ id.val() }</td>
					<td>${ descripcion.val() }</td>
					<td>${ precio.val() }</td>
					<td>${ cant.val() }</td>
					<td>${ total.val() }</td>
					<td>
						<button class="btn btn-danger btn-sm product-delete">x</button>
						<button class="btn btn-primary btn-sm product-edit">e</button>
					</td>
				</tr>
			`;

			document.getElementById('tbody').innerHTML += template;
			$('#formProduct').trigger('reset');
			contadorProductos++;
			showCountProducts();
		}

	}
	
	editar = false;
	console.log(editar);
	
});

$(document).on('click', '.product-delete', function (){
	
	if(confirm("Estas seguro que deseas eliminar este producto?")){
		this.parentElement.parentElement.remove();
		contadorProductos--;
		showCountProducts();
	} else{
		alert("You're disallow this action!");
	}

});

$(document).on('click', '.product-edit', function (){

	editar = true;
	editMode();
	console.log(editar);
	boton = this;
	idEditar = boton.parentElement.parentElement.cells[0].childNodes[0].data;
	descripcionEditar = boton.parentElement.parentElement.cells[1].childNodes[0].data;
	precioEditar = boton.parentElement.parentElement.cells[2].childNodes[0].data;
	cantEditar = boton.parentElement.parentElement.cells[3].childNodes[0].data;
	totalEditar = boton.parentElement.parentElement.cells[4].childNodes[0].data;

	let id = $('#id');
	let descripcion = $('#descripcion');
	let precio = $('#precio');
	let cant = $('#cant');
	let total = $('#total');

	id.val(idEditar);
	descripcion.val(descripcionEditar);
	precio.val(precioEditar);
	cant.val(cantEditar);
	total.val(totalEditar);
	idEditar = "1A1A1A";
	console.log(idEditar);

});