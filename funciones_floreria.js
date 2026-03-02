function ordenarPrecio(orden) {
    // 1. Obtenemos el contenedor y todas las tarjetas
    let contenedor = document.querySelector(".grid-recomendados");
    let tarjetas = Array.from(document.getElementsByClassName("tarjeta-flor"));

    // 2. Ordenamos el arreglo de tarjetas
    tarjetas.sort((a, b) => {
        // Extraemos el número del texto (ej: "PRECIO: $300" -> 300)
        let precioA = parseInt(a.querySelector("p").innerText.replace(/\D/g, ""));
        let precioB = parseInt(b.querySelector("p").innerText.replace(/\D/g, ""));

        if (orden === 'menor') {
            return precioA - precioB; // Orden ascendente
        } else {
            return precioB - precioA; // Orden descendente
        }
    });

    // 3. Limpiamos el contenedor y metemos las tarjetas ya ordenadas
    contenedor.innerHTML = "";
    tarjetas.forEach(tarjeta => contenedor.appendChild(tarjeta));
}