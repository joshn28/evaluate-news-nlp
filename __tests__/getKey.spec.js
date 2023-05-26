import { getKey }  from '../src/client/js/getKey';

const dotenv = require('dotenv');
dotenv.config();

global.fetch = jest.fn().mockResolvedValue({
    // Mock the response
    json: jest.fn().mockResolvedValue({ apiKey: process.env.API_KEY }),
});

describe('Testing the getKey function', () => {
    test('it should make a get request to /key route', async () => {
    
        const result = await getKey();
    
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('/key');
        expect(result).toEqual(process.env.API_KEY);
    });
});