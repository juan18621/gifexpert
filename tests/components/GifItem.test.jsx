import {render, screen} from '@testing-library/react'
import { GifItem } from '../../src/components'


describe('pruebas en gif item', () => { 
    const url = 'https://holamundo.com/image.jpg'
    const title = ''
    test('debe hacer match con el sapshot', () => { 

        const  {container} = render(<GifItem image={{title, url}}></GifItem>)
        expect(container).toMatchSnapshot();
     })

     test('url y alt indicado', () => { 
        render(<GifItem image={{title, url}}></GifItem>);
        //screen.debug();
        expect( screen.getByRole('img').src).toBe(url)
        expect( screen.getByRole('img').alt).toBe(title)

    })

    test('debe mostrar el titulo', () => { 
        render(<GifItem image={{title, url}}></GifItem>);
        screen.debug();
        expect( screen.getAllByText(title)).toBeTruthy();
     })
 })

