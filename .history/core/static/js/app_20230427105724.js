document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true
    }).type('Front-end.', {delay: 900}).delete(11)
    .type('Back-end.', {delay:900}).delete(9)
    .type('FullStack.', {delay:900}).delete(10)

    .go()
})