import checkMark from '../assets/checkmark.svg';
import cross from '../assets/red-x.svg';

// Return the correct img object based on the result string
const getImg = result => {
    const checkMarkValues = ['agreement', 'subjective', 'ironic'];
    const img = new Image();

    if (result.toLowerCase() in checkMarkValues) {
        img.src = checkMark;
    } else {
        img.src = cross;
    }

    return img;
};

// Update the UI based on the values from the received data
const updateUI = (data) => {
    const { score_tag, agreement, subjectivity, confidence, irony } = data;

    document.getElementById('score').textContent = `Score: ${score_tag}`;

    const agreementRes = document.getElementById('agreement');
    agreementRes.firstElementChild.textContent = 'Agreement';
    agreementRes.appendChild(getImg(agreement));

    const subjectivityRes = document.getElementById('subjectivity');
    subjectivityRes.firstElementChild.textContent = 'Subjective';
    subjectivityRes.appendChild(getImg(subjectivity));

    const ironyRes = document.getElementById('irony');
    ironyRes.firstElementChild.textContent = 'Ironic';
    ironyRes.appendChild(getImg(irony));

    const confidenceRes = document.getElementById('confidence');
    confidenceRes.setAttribute('value', confidence);
    confidenceRes.previousElementSibling.textContent = `Confidence: ${confidence}`;
};

export {
    updateUI
};