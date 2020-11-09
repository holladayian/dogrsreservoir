import { HomePage } from './HomePage.js';
import { screen, render } from '@testing-library/react';
import userEvent from  '@testing-library/user-event';

describe('HomePage', () => {

  it('1. should render the homepage', () => {
    render(
      <HomePage />
    )

    const home = screen.queryByTestId('homepage');
    expect(home).toBeInTheDocument();
    
    
    // sad
    const faves = screen.queryByTestId('favorites');
    expect(faves).toEqual(null);
  })

  it('2. should not render a current dog or the save button if one hasnt been generated', () => {
    render(
      <HomePage />
    )
    const saveBtn = screen.queryByTestId('save-btn');
    expect(saveBtn).toEqual(null);
    const currentDog = screen.queryByTestId('current-dog');
    expect(currentDog).toEqual(null); 
  })

  it('3. should be able to click the random and save buttons', () => {
    const mockRandom = jest.fn();
    const mockSave = jest.fn();
    const testDog = 'testDoggie';

    render(
      <HomePage 
      retrieveNewDog={mockRandom}
      currentDog={testDog}
      saveDog={mockSave}
      />
    )

    const randomBtn = screen.queryByTestId('rand-btn');
    expect(randomBtn).toBeInTheDocument();
    userEvent.click(randomBtn);
    expect(mockRandom).toHaveBeenCalled();

    const saveBtn = screen.queryByTestId('save-btn');
    expect(saveBtn).toBeInTheDocument();
    userEvent.click(saveBtn);
    expect(mockSave).toHaveBeenCalled();
    
    const currentDog = screen.queryByTestId('current-dog');
    expect(currentDog).toBeInTheDocument();
  })
})





