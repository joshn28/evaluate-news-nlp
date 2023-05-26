import { getAnalysis } from './js/getAnalysis'
import { getKey } from './js/getKey'
import { updateUI } from './js/updateUI'

import '../client/styles/base.sass'
import '../client/styles/form.sass'
import '../client/styles/results.sass'
import '../client/styles/footer.sass'

document.getElementById('submit').addEventListener('click', evt => {
    evt.preventDefault();

    const content = evt.target.previousElementSibling.value;

    if (content) {
        getKey()
        .then(key => getAnalysis(key, content))
        .then(function(data) {
            updateUI(data);
        });
    } else {
        alert('Field cannot be blank');
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

    this.classList.remove('animate__animated', 'animate__fadeInDown');
});