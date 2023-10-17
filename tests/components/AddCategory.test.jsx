import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en <AddCategory/>', () => { 
    test('should change value in text box', () => { 
        render(<AddCategory onAddCategory={()=> {}}></AddCategory>)
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target:{value:'dragon ball'} } );
        expect(input.value).toBe('dragon ball')
     })

     test('should call on new category', () => { 
        const inputValue = 'dragon ball';

        const onAddCategory = jest.fn()


        render(<AddCategory onAddCategory={onAddCategory}></AddCategory>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target:{value: inputValue} } );
        fireEvent.submit(form)
        // screen.debug()
        expect(input.value).toBe('');
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
      })

      test('should not call on new category if input empty', () => { 
        const onAddCategory = jest.fn()


        render(<AddCategory onAddCategory={onAddCategory}></AddCategory>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target:{value: ''} } );
        fireEvent.submit(form)
        expect(onAddCategory).toHaveBeenCalledTimes(0);
        expect(onAddCategory).not.toHaveBeenCalled();
       })
 })