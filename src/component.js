import './dashboard.css';

export default function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const btn2 = document.createElement('button');
    btn.classList.add('button', 'dashboard_button');
    btn2.classList.add('button', 'header_button');

    btn.innerHTML = 'a am mixin a am bed! потому что я то красный то зеленый';
    btn2.innerHTML = 'ыыыыыыыыыыыы';

    element.appendChild(btn);
    element.appendChild(btn2);

    return element;
}
