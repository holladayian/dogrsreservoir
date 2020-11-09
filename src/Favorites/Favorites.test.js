import { Favorites } from './Favorites.js';
import { screen, render, waitFor, getAllByTestId } from '@testing-library/react';

describe('Favorites', () => {

  it('1. should render the favorites page', () => {
    const mockedFaves = ['testdogs1', 'testdogs2', 'testdogs3']
    render(
      <Favorites savedDogs={mockedFaves}/>
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
})