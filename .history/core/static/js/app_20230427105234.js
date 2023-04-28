document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('Front-end.', {delay: 900}).delete()
    
    .go()
})