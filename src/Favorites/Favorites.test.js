import { Favorites } from './Favorites.js';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Favorites', () => {

  it('1. should render the favorites page', () => {
    const mockedFaves = ['testdogs1', 'testdogs2', 'testdogs3']
    render(
      <Favorites savedDogs={mockedFaves} favoritesView={true}/>
    )

    const faves = screen.queryByTestId('favorites');
    expect(faves).toBeInTheDocument();

    const testid1 = screen.queryByTestId('test-0');
    const testid2 = screen.queryByTestId('test-1');
    const testid3 = screen.queryByTestId('test-2');
    expect(testid1).toBeInTheDocument();
    expect(testid2).toBeInTheDocument();
    expect(testid3).toBeInTheDocument();
    

    // sad
    const testid4 = screen.queryByTestId('test-3');
    expect(testid4).toEqual(null);

    const home = screen.queryByTestId('homepage');
    expect(home).toEqual(null);
  })

  it('2. should redirect to home if the favorite\'s view is false', () => {
    const mockedFaves = ['testdogs1', 'testdogs2', 'testdogs3']
    render(
      <BrowserRouter>
      <Favorites savedDogs={mockedFaves} favoritesView={false}/>
      </BrowserRouter>
    )

    const faves = screen.queryByTestId('favorites');
    expect(faves).toEqual(null);   
  })
})