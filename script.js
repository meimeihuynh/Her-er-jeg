const trigger = document.getElementById('headertrigger');
const text = document.getElementById('texttrigger');

trigger.addEventListener('click', () => {
    text.classList.toggle('collapsed');
});