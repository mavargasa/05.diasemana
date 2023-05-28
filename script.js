// Código JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function() {
    // Escuchar el evento "DOMContentLoaded" para asegurarnos de que el documento HTML se ha cargado completamente antes de ejecutar el código JavaScript
  
    while (true) {
      var dia = prompt("Ingrese un día de la semana:");
  
      if (dia === "domingo") {
        alert("Ve a descansar");
        break;
      } else {
        switch (dia) {
          case "lunes":
            alert("Es lunes, ¡dia de jumping!");
            break;
          case "martes":
            alert("Es martes, Hoy Zumba super");
            break;
          case "miércoles":
            alert("Es miércoles, estás a mitad de semana, hoy el cine es mas barato");
            break;
          case "jueves":
            alert("Es jueves, llego la clase de habilidades");
            break;
          case "viernes":
            alert("Es viernes, ¡Hoy clase de Ingles!");
            break;
          case "sábado":
            alert("Es sábado, uff llego el fin de semana");
            break;
            case "sabado":
                alert("Es sábado, uff llego el fin de semana");
                break;
          default:
            alert("Día no reconocido, intenta nuevamente");
            break;
        }
      }
    }
  });
  