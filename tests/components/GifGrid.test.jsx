import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('grid test', () => { 
    const category = 'One Punch';

    test('should show loading initially', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(< GifGrid category={category}></GifGrid>)
        screen.debug()
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
     })

     test('should show items when image loaded', () => { 
        const gifs = [
            {
            id: 'abx',
            title: 'dragon ball',
            url: 'https://local.com/hola'
            },
            {
            id: 'abx',
            title: 'dragon ball super',
            url: 'https://local.com/hola'
            },
    ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })
        render(< GifGrid category={category}></GifGrid>)

        expect(screen.getAllByRole('img').length).toBe(2)
        
     })
 })