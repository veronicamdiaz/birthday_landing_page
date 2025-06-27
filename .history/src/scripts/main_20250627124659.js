 function atualizaContador() {
      const destino = new Date("2025-07-05T18:00:00");
      const agora = new Date();
      const diff = destino - agora;

      if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "É HOJE! 🎉";
        return;
      }

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      document.getElementById("countdown").innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    setInterval(atualizaContador, 1000);
    atualizaContador();