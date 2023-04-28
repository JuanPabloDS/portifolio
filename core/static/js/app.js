document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 150,
        loop: true
    }).type('Front-end.', {delay: 700}).delete(11)
    .type('Back-end.', {delay:700}).delete(9)
    .type('FullStack.', {delay:700}).delete(10)

    .go()
})