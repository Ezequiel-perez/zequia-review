// ======================================
// ESTRELLAS DE LA DEMOSTRACIÓN
// ======================================

const estrellas =
    document.querySelectorAll(
        ".estrellas-demo button"
    );

const mensaje =
    document.getElementById(
        "mensajeEstrellas"
    );

let puntuacion = 0;


estrellas.forEach((estrella) => {

    estrella.addEventListener(
        "click",
        () => {

            puntuacion =
                Number(
                    estrella.dataset.valor
                );


            estrellas.forEach(
                (item, indice) => {

                    if (
                        indice < puntuacion
                    ) {

                        item.classList.add(
                            "activa"
                        );

                    } else {

                        item.classList.remove(
                            "activa"
                        );

                    }

                }
            );


            if (puntuacion === 5) {

                mensaje.textContent =
                    "¡Excelente experiencia!";

            } else if (
                puntuacion >= 3
            ) {

                mensaje.textContent =
                    `${puntuacion} de 5 estrellas`;

            } else {

                mensaje.textContent =
                    `${puntuacion} de 5 estrellas`;

            }

        }
    );

});


// ======================================
// MODAL DE DEMOSTRACIÓN
// ======================================

const botonReview =
    document.getElementById(
        "botonReview"
    );

const modal =
    document.getElementById(
        "modal"
    );

const cerrarModal =
    document.getElementById(
        "cerrarModal"
    );


botonReview.addEventListener(
    "click",
    () => {

        modal.classList.add(
            "visible"
        );

    }
);


cerrarModal.addEventListener(
    "click",
    () => {

        modal.classList.remove(
            "visible"
        );

    }
);


modal.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target === modal
        ) {

            modal.classList.remove(
                "visible"
            );

        }

    }
);


// ======================================
// WHATSAPP
// ======================================

const whatsapp =
    document.getElementById(
        "whatsapp"
    );


/*
    IMPORTANTE:

    Más adelante sustituiremos esto
    por tu número comercial.

    Formato México:

    52 + número de 10 dígitos

    SIN:
    +
    espacios
    guiones
*/

const numeroWhatsApp = "";


const mensajeWhatsApp =
    "Hola, vi la demostración de ZEQUIA Review y me gustaría recibir información para mi negocio.";


whatsapp.addEventListener(
    "click",
    (evento) => {

        evento.preventDefault();


        if (
            numeroWhatsApp === ""
        ) {

            alert(
                "Esta es una demostración. Aquí se abrirá WhatsApp para solicitar ZEQUIA Review."
            );

            return;

        }


        const enlace =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            encodeURIComponent(
                mensajeWhatsApp
            );


        window.open(
            enlace,
            "_blank"
        );

    }
);