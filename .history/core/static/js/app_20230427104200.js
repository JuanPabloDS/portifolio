document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        strings: ["Front-end.", "Back-end.", "FullStack"],
        loop: true
    }).go()
})