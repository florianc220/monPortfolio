// Fonction pour charger une nouvelle page avec un effet de fondu sortant
function loadPage(url){
    // Ajouter la classe fade-out pour masquer le contenu existant avec un fondu sortant
    document.querySelector('.content').classList.add('fade-out');
    document.querySelector('header').classList.add('fade-out');
    document.querySelector('footer').classList.add('fade-out');

    // Rediriger vers la nouvelle page après un délai
    setTimeout(function() {
        window.location.href = url;
    }, 500); // Délai correspondant à la durée de la transition
}

// Événement de chargement de la fenêtre
window.addEventListener('load', function() {
    // Ajouter la classe fade-in pour afficher progressivement le contenu avec un fondu entrant
    document.querySelector('.content').classList.add('fade-in');
    document.querySelector('header').classList.add('fade-in');
    document.querySelector('footer').classList.add('fade-in');
});

// Événement de chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter la classe fade-in pour afficher progressivement le contenu avec un fondu entrant
    document.querySelector('.content').classList.add('fade-in');
    document.querySelector('header').classList.add('fade-in');
    document.querySelector('footer').classList.add('fade-in');
});
