document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("review-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que se recargue la página
      
      const rating = document.querySelector('input[name="rating"]:checked');
      const reviewText = document.getElementById("review-text").value;
      
      if (rating && reviewText) {
        // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones.
        // Por ejemplo, puedes usar fetch() para enviar los datos a través de una solicitud HTTP.
        console.log("Calificación: " + rating.value);
        console.log("Reseña: " + reviewText);
        
        // Restablecer el formulario después del envío (opcional)
        form.reset();
      } else {
        alert("Por favor, selecciona una calificación y escribe una reseña.");
      }
    });
  });
// cambio de idioma

var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
  let id=check.checked;

  if(id==true){
    location.href="es/index.html";

  }else{
    location.href="../index.html";
  }
}