import './dashboard.css';

export default function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    btn.classList.add('button', 'dashboard_button');

    btn.innerHTML = 'a am mixin a am bed!';

    element.appendChild(btn);

    return element;
}
