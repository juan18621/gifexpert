import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('hook fecth gifs', () => { 
    test('should return intial state', () => { 
        const {result} = renderHook(()=> {
            return useFetchGifs('dragon ball');
        });

        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     })

     test('should return images array an loading as false',  async () => { 
        const {result} = renderHook(()=> {
            return useFetchGifs('dragon ball');
        });

        await waitFor(() => {
            return expect(result.current.images.length).toBeGreaterThan(0);
        },);

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })
 })