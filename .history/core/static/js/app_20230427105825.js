document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 500,
        loop: true
    }).type('Front-end.', {delay: 500}).delete(11)
    .type('Back-end.', {delay:500}).delete(9)
    .type('FullStack.', {delay:500}).delete(10)

    .go()
})