const dotenv = require('dotenv');
dotenv.config();

import { getAnalysis } from '../src/client/js/getAnalysis';

describe('Testing the getAnalysis function', () => {
    test('it should return the sentimental analysis data', async () => {
        const response = await getAnalysis(process.env.API_KEY, "Test");

        expect(response.status.code).toBe('0');
        expect(response.status.msg).toBe('OK');
    });
});