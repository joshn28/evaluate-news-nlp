const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = `<section class="hidden">
                <h2>Results:</h2>
                <p id="score"></p>
                <div id="agreement" class="results">
                    <p></p>
                </div>
                <div id="subjectivity" class="results">
                    <p></p>
                </div>
                <div id="irony" class="results">
                    <p></p>
                </div>
                <div>
                    <p></p>
                    <progress id="confidence" max="100"></progress>
                </div>
            </section>`;
const dom = new JSDOM(html);
global.document = dom.window.document;
global.window = dom.window;
global.Image = window.Image;

import { updateUI, updateResult, getIcon } from '../src/client/js/updateUI';

describe('Testing the UpdateUI function', () => {
    test('it should update the elements inside the results section', () => {
        const fakeData = {
            score_tag :"P+",
            agreement :"AGREEMENT",
            subjectivity :"OBJECTIVE",
            confidence: "100",
            irony: "NONIRONIC"
        };

        updateUI(fakeData);

        expect(document.getElementById('score').textContent).toBe('Score: P+');
        expect(document.getElementById('agreement').firstElementChild.textContent).toBe('Agreement');
        expect(document.getElementById('subjectivity').firstElementChild.textContent).toBe('Subjective');
        expect(document.getElementById('irony').firstElementChild.textContent).toBe('Ironic');
        expect(document.getElementById('confidence').previousElementSibling.textContent).toBe('Confidence: 100');
    });

    test('it should add the image icons as well as define the src attribute', () => {
        expect(document.getElementById('agreement').lastElementChild.tagName).toBe('IMG');
        expect(document.getElementById('subjectivity').lastElementChild.tagName).toBe('IMG');
        expect(document.getElementById('irony').lastElementChild.tagName).toBe('IMG');

        expect(document.getElementById('agreement').lastElementChild.hasAttribute('src')).toBe(true);
        expect(document.getElementById('subjectivity').lastElementChild.hasAttribute('src')).toBe(true);
        expect(document.getElementById('irony').lastElementChild.hasAttribute('src')).toBe(true);
    });
});

describe('Testing the updateResult function', () => {
    test('it should update text to the element\'s first child, append a new img and remove old img if any', () => {
        const prevImg = document.getElementById('agreement').lastElementChild;
        updateResult('agreement', 'DISAGREEMENT', 'Test');

        expect(document.getElementById('agreement').firstElementChild.textContent).toBe('Test');
        expect(document.getElementById('agreement').lastElementChild.tagName).toBe('IMG');
        expect(prevImg).not.toBe(document.getElementById('agreement').lastElementChild);
    });
});

describe('Testing the getIcon function', () => {
    test('it should return the correct icon based on the result input', () => {
        const checkMark = getIcon('AGREEMENT');
        const cross = getIcon('DISAGREEMENT');

        expect(checkMark).not.toBe(cross);
    });
});