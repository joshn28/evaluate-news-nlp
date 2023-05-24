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
    }
});