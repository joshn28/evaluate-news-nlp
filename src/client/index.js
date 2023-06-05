import { getAnalysis } from './js/getAnalysis'
import { getKey } from './js/getKey'
import { updateUI } from './js/updateUI'

import '../client/styles/base.sass'
import '../client/styles/header.sass'
import '../client/styles/form.sass'
import '../client/styles/results.sass'
import '../client/styles/footer.sass'

import logo from '../client/assets/logo.png'

document.getElementById('logo').setAttribute('src', logo);

document.querySelector('textarea').addEventListener('change', () => {
    document.querySelector('textarea').classList.remove('invalid');
    document.querySelector('span').classList.add('hidden');
});

document.getElementById('submit').addEventListener('click', evt => {
    evt.preventDefault();

    const content = document.querySelector('textarea').value;

    if (content) {
        getKey()
        .then(key => getAnalysis(key, content))
        .then(function(data) {
            updateUI(data);
        });
    } else {
        document.querySelector('textarea').classList.add('invalid');
        document.querySelector('span').classList.remove('hidden');
    }
});

document.querySelector('section').addEventListener('animationend', () => {
    const values = ['agreement', 'subjectivity', 'irony'];

    for (const val of values) {
        const element = document.getElementById(val);
        const icon = element.lastElementChild;

        icon.classList.remove('hidden');
        icon.classList.add('animate__animated', 'animate__bounceIn');
    }

    document.querySelector('section').classList.remove('animate__animated', 'animate__fadeInDown');
});