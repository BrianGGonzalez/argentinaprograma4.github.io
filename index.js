const url = 'https://randomuser.me/api/';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const usuario = data.results[0];
        mostrarDatosUsuario(usuario);
    })
    .catch(error => {
        console.log('Ha ocurrido un error:', error);
    });


function mostrarDatosUsuario(usuario) {
    const imagenPerfil = document.getElementById('imagen-perfil');
    imagenPerfil.src = usuario.picture.large;

    const nombreCompleto = document.getElementById('nombre-completo');
    nombreCompleto.textContent = usuario.name.title + ' ' + usuario.name.first + ' ' + usuario.name.last;

    const genero = document.getElementById('genero');
    const esMasculino = usuario.gender === 'male';
    const textoGenero = esMasculino ? 'Género: Masculino' : 'Género: Femenino';
    genero.textContent = textoGenero;

    const edad = document.getElementById('edad');
    edad.textContent = 'Edad: ' + usuario.dob.age;

    const fechaNacimiento = document.getElementById('fecha-nacimiento');
    fechaNacimiento.textContent = 'Fecha de nacimiento: ' + new Date(usuario.dob.date).toLocaleDateString();

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
          RS: 'Serbia',
          AU: 'Australia'
        };
      
        return paises[abreviatura] || abreviatura;
      }      

    const nacionalidad = document.getElementById('nacionalidad');
    nacionalidad.textContent = 'Nacionalidad: ' + obtenerNombrePais(usuario.nat);

    const correoElectronico = document.getElementById('correo-electronico');
    correoElectronico.textContent = 'Correo electrónico: ' + usuario.email;

    const telefono = document.getElementById('telefono');
    telefono.textContent = 'Teléfono: ' + usuario.phone

//No me agarro la experiencia laboral y los estudios realizados

   const experienciaLaboral = document.getElementById('experiencia-laboral');
   usuario.experience.forEach(exp => {
    const li = document.createElement('li');
    li.textContent = exp.title + ' en ' + exp.company;
    experienciaLaboral.appendChild(li);
    });
      
    const estudiosRealizados = document.getElementById('estudios-realizados');
    usuario.education.forEach(edu => {
    const li = document.createElement('li');
    li.textContent = edu.degree + ' en ' + edu.major;
    estudiosRealizados.appendChild(li);
    });
}
