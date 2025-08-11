document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/content')
    .then(response => response.json())
    .then(data => {
      // Nombre y eslogan
      document.getElementById('empresa-nombre').textContent = data.name;
      document.getElementById('empresa-slogan').textContent = data.slogan;

      // Descripción "Sobre nosotros"
      document.getElementById('descripcion').textContent = data.about;

      // Enlaces de contacto
      document.getElementById('link-telefono').href = `tel:+57 ${data.contacts.phone}`;
      document.getElementById('link-whatsapp').href = `https://wa.me/57${data.contacts.whatsapp}`;
      document.getElementById('link-correo').href = `mailto:${data.contacts.email}`;

      // Servicios
      const listaServicios = document.getElementById('lista-servicios');
      data.services.forEach(servicio => {
        const li = document.createElement('li');
        li.innerHTML = `<i class='${servicio.icon}'></i> ${servicio.name}`;
        listaServicios.appendChild(li);
      });

      // Año actual en el footer
      document.getElementById('anio-actual').textContent = new Date().getFullYear();
      document.getElementById('footerEmail').href = `mailto:${data.contacts.email}`;
      document.getElementById('footerEmail').textContent = `${data.contacts.email}`;
      document.getElementById('footerPhone').href = `tel:+57 ${data.contacts.phone}`;
      document.getElementById('footerPhone').textContent = `+57 ${data.contacts.phone}`;
    })
    .catch(error => {
      console.error('Error al cargar el contenido:', error);
    });

});

// Función para scroll suave
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}


  document.addEventListener('contextmenu', event => event.preventDefault());
  document.onkeydown = function(e) {
    if (e.keyCode == 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode == 85)) { // Ctrl+U
      return false;
    }
  };