Swal.fire({
    title: 'Bienvenido',
    text: 'Espero que te guste mi pagina web',
	icon: 'info',
	background:'#000',
});

document.getElementById('button_color').addEventListener('click', function () {
    document.body.style.backgroundColor = '#ff7700';
});

document.getElementById('button_default').addEventListener('click', function () {
    document.body.style.backgroundColor = ' #91E3E5';
});