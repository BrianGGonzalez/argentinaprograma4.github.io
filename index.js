const url = 'https://randomuser.me/api/';

fetch(url)
  .then(response => response.json())
  .then(data => mostrarDatosUsuario(data.results[0]))
  .catch(error => console.error('Ha ocurrido un error:', error));

function mostrarDatosUsuario(usuario) {
  document.getElementById('imagen-perfil').src = usuario.picture.large;
  document.getElementById('nombre-completo').textContent = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
  document.getElementById('genero').textContent = usuario.gender === 'male' ? 'Masculino' : 'Femenino';
  document.getElementById('edad').textContent = usuario.dob.age;
  document.getElementById('fecha-nacimiento').textContent = new Date(usuario.dob.date).toLocaleDateString();
  document.getElementById('nacionalidad').textContent = obtenerNombrePais(usuario.nat);
  document.getElementById('direccion').textContent = `${usuario.location.street.name} ${usuario.location.street.number}`;
  document.getElementById('codigo-postal').textContent = usuario.location.postcode;
  document.getElementById('mail').textContent = usuario.email;
  document.getElementById('telefono').textContent = usuario.phone;
}

function obtenerNombrePais(abreviatura) {
  const paises = {
    AU: 'Australia',
    BR: 'Brasil',
    CA: 'Canadá',
    CH: 'Suiza',
    DE: 'Alemania',
    DK: 'Dinamarca',
    ES: 'España',
    FI: 'Finlandia',
    FR: 'Francia',
    GB: 'Reino Unido',
    IE: 'Irlanda',
    IR: 'Irán',
    NO: 'Noruega',
    NL: 'Países Bajos',
    NZ: 'Nueva Zelanda',
    TR: 'Turquía',
    US: 'Estados Unidos',
    IN: 'India',
    MX: 'Mexico',
    RS: 'Serbia'
  };
  return paises[abreviatura] || abreviatura;
}

let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  navbar.style.top = prevScrollPos > currentScrollPos ? "0" : "-60px";
  prevScrollPos = currentScrollPos;
};

function toggleContent(contentId) {
  const content = document.getElementById(contentId);
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function enviarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  const mensajeConfirmacion = `Gracias por contactarnos, ${nombre} ${apellido}. Nos comunicaremos con usted a la brevedad.`;

  document.getElementById("mensajeConfirmacion").textContent = mensajeConfirmacion;
}
