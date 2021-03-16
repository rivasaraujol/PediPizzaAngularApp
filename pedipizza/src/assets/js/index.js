///////////////////////////////////////////////////////////////
/////////////////////////// CARTA /////////////////////////////
///////////////////////////////////////////////////////////////
function GetCarta(){
	$.ajax({
		url: 'http://localhost:3018/api/carta',
		contentType: 'application/json',
		success: function(response){
			console.log(response);
		}
	});
}

function AddToCarta() {
		$.ajax({
		url: 'http://localhost:3018/api/carta',
		method: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({ // Carga los datos aqui dentro
			nombre: 'test',
			descripcion: 'test',
			precio: 2,
			img: ''
		}),
		success: function(response){
			console.log(response);
		}
	});
}

function GetSingleCarta(id){
	$.ajax({
		url: 'http://localhost:3018/api/carta/' + id,
		contentType: 'application/json',
		success: function(response){
			console.log(response[0]);
		}
	});
}

function UpdateCarta(id){
	$.ajax({
		url: 'http://localhost:3018/api/carta/' + id,
		method: 'PUT',
		contentType: 'application/json',
		data: JSON.stringify({ // Carga los datos aqui dentro
			nombre: 'test',
			descripcion: 'test',
			precio: 2,
			img: '',
			existencia: 1
		}),
		success: function(response){
			console.log(response);
		}
	});
}

function DeleteCarta(id){
	$.ajax({
		url: 'http://localhost:3018/api/carta/' + id,
		method: 'DELETE',
		contentType: 'application/json',
		success: function(response){
			console.log(response);
		}
	});
}

///////////////////////////////////////////////////////////////
/////////////////////////// PEDIDOS ///////////////////////////
///////////////////////////////////////////////////////////////
function GetPedido(){
	$.ajax({
		url: 'http://localhost:3018/api/pedido',
		contentType: 'application/json',
		success: function(response){
			console.log(response);
		}
	});
}

function AddPedido() {
		$.ajax({
		url: 'http://localhost:3018/api/pedido',
		method: 'POST',
		contentType: 'application/json',
		data: JSON.stringify({ // Carga los datos aqui dentro
			nombre: 'test',
			cedula: 'test',
			direccion: 'test',
			telefono: 'test',
			img: 'test',
			platos: [{
				plato: 1
			},{
				plato: 0
			},{
				plato: 1
			}]
		}),
		success: function(response){
			console.log(response);
		}
	});
}

function GetSinglePedido(id){
	$.ajax({
		url: 'http://localhost:3018/api/pedido/' + id,
		contentType: 'application/json',
		success: function(response){
			console.log(response[0]);
		}
	});
}

function DeletePedido(id){
	$.ajax({
		url: 'http://localhost:3018/api/pedido/' + id,
		method: 'DELETE',
		contentType: 'application/json',
		success: function(response){
			console.log(response);
		}
	});
}

function GetSinglePedidoPlatos(id){
	$.ajax({
		url: 'http://localhost:3018/api/pedido/' + id + '/platos',
		contentType: 'application/json',
		success: function(response){
			console.log(response);
		}
	});
}

function ValidarPedido(id){
	$.ajax({
		url: 'http://localhost:3018/api/aprobar/' + id,
		method: 'PUT',
		contentType: 'application/json',
		success: function(response){
			console.log(response);
		}
	});
}