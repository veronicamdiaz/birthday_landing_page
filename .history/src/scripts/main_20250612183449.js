import './styles/main.scss';

function getTime() {
    const eventDate = new Date("2025-07-09T20:00:00");
    const now = new Date();
    const timeDiff = eventDate - now;

    if (timeDiff < 0) {
        document.getElementById("countdown").innerText = "O evento já ocorreu!";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Atualize o contador a cada segundo
setInterval(getTime, 1000);
