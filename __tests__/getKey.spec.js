import { getKey }  from '../src/client/js/getKey';

describe('Testing the getKey function', () => {
    test('it should make a get request to /key route', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            // Mock the response
            json: jest.fn().mockResolvedValue({ data: 'test' }),
        });
    
        await getKey();
    
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('/key');
    });
});