 const timerElement = document.getElementById('timer');
        const cosplayLink = document.getElementById('cosplay-link');
        const kpopLink = document.getElementById('kpop-link');

        // Fecha objetivo: 13 de julio de 2025 a las 18:00 hora local
        const fechaObjetivo = new Date("2025-07-13T18:00:00");

        function actualizarCuentaRegresiva() {
            const ahora = new Date();
            const diferencia = fechaObjetivo - ahora;

            if (diferencia <= 0) {
                clearInterval(intervalo);
                cosplayLink.remove();
                kpopLink.remove();
                timerElement.textContent = "⛔ Inscripciones cerradas";
                return;
            }

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            timerElement.textContent = `⏳ Cierra en: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

        const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
        actualizarCuentaRegresiva();