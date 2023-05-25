import checkMark from '../assets/checkmark.svg';
import cross from '../assets/red-x.svg';

// Return the correct icon based on the result string
const getIcon = result => {
    const checkMarkValues = ['agreement', 'subjective', 'ironic'];
    const img = new Image();

    if (result.toLowerCase() in checkMarkValues) {
        img.src = checkMark;
    } else {
        img.src = cross;
    }

    return img;
};

// Render the text and the icon
const updateResult = (elementId, value, text) => {
    const element = document.getElementById(elementId);
    element.firstElementChild.textContent = text;

    const icon = getIcon(value);
    icon.classList.add('hidden');

    // Remove icon rendered previously
    if (element.lastChild.tagName === 'IMG') {
        element.lastChild.remove();
    }

    element.appendChild(icon);
};

// Update the UI based on the values from the received data
const updateUI = data => {
    const { score_tag, agreement, subjectivity, confidence, irony } = data;

    const results = document.querySelector('section');
    results.classList.add('hidden');
    results.classList.remove('hidden');
    results.classList.add('animate__animated', 'animate__fadeInDown');

    document.getElementById('score').textContent = `Score: ${score_tag}`;

    updateResult('agreement', agreement, 'Agreement');
    updateResult('subjectivity', subjectivity, 'Subjective');
    updateResult('irony', irony, 'Ironic');

    const confidenceRes = document.getElementById('confidence');
    confidenceRes.setAttribute('value', confidence);
    confidenceRes.previousElementSibling.textContent = `Confidence: ${confidence}`;

    results.addEventListener('animationend', () => {
        const values = ['agreement', 'subjectivity', 'irony'];

        for (const val of values) {
            const element = document.getElementById(val);
            const icon = element.lastElementChild;

            icon.classList.remove('hidden');
            icon.classList.add('animate__animated', 'animate__bounceIn');
        }

        results.classList.remove('animate__animated', 'animate__fadeInDown');
    });
};

export {
    updateUI,
    updateResult,
    getIcon
};