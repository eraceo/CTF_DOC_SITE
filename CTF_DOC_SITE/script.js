function afficherHeure() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();

    const heureFormattee = `${heures < 10 ? '0' : ''}${heures}:${minutes < 10 ? '0' : ''}${minutes}:${secondes < 10 ? '0' : ''}${secondes}`;

    document.getElementById('heureWidget').textContent = `${heureFormattee}`;
}

afficherHeure();

setInterval(afficherHeure, 1000);

function retourPagePrecedente() {
    history.back();
}

function afficherBulle(idBulle) {
    var toutesLesBulles = document.querySelectorAll('.bulle');
    toutesLesBulles.forEach(function(bulle) {
        if (bulle.id === idBulle) {
            bulle.style.display = 'block';
        } else {
            bulle.style.display = 'none';
        }
    });
}

function fermerBulles() {
    var toutesLesBulles = document.querySelectorAll('.bulle');
    toutesLesBulles.forEach(function(bulle) {
        bulle.style.display = 'none';
    });
}

function fermerBulle(idBulle) {
    var bulle = document.getElementById(idBulle);
    bulle.style.display = 'none';
}

document.getElementById('ouvrirMenu').addEventListener('click', function() {
    var listeChoix = document.getElementById('listeChoix');
    listeChoix.style.display = (listeChoix.style.display === 'block') ? 'none' : 'block';
});

