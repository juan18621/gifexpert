import { getGifs } from "../../src/helpers/getGifs"

describe('pruebase en gifs', () => { 
    test('should return array of gifts', async() => { 
        const gifts = await getGifs('One Punch')

        expect(gifts.length).toBeGreaterThan(0);
        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
     })
 })