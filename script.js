const triggers = document.querySelectorAll('.headertrigger');

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.parentElement.querySelectorAll('.texttrigger');
        content.forEach(text => text.classList.toggle('collapsed'));
    });
});


const illustrationTriggers = document.querySelectorAll('.illustrationtrigger');

illustrationTriggers.forEach(trigger => {

    trigger.addEventListener('click', () => {
        const illustrations = trigger.nextElementSibling;

        illustrations.classList.toggle('collapsed');
    });

});

/* cursor */

const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.12;
    cursorY += (mouseY - cursorY) * 0.12;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();

