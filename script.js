const buttonHeight = 150;
const buttonWldth = 250;

const maxWiLdth = window.innerWidth - buttonWldth;
const maxHeight = window.innerHeight - buttonHeight;;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWiLdth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
});
