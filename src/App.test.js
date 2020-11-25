import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import userEvent from  '@testing-library/user-event';
import App from './App';
import { getNewDog } from './apiCalls/dogcalls';
jest.mock('./apiCalls/dogcalls');

describe('App', () => {
  it('1. should load a homepage with the `Favorites` button by default', () => {   
      render(
        <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const appTest = screen.queryByTestId('dogs-reservoir');
    expect(appTest).toBeInTheDocument();  
    const home = screen.queryByTestId('homepage');
    expect(home).toBeInTheDocument();
    const faveButton = screen.queryByTestId('fav-btn');
    expect(faveButton).toBeInTheDocument();      
    // sad
    const faves = screen.queryByTestId('favorites');
    expect(faves).toEqual(null);
    const homeButton = screen.queryByTestId('home-btn');
    expect(homeButton).toEqual(null);
  }) 
  it('2. should be able to switch between HomePage and Favorites', () => {   
      render(
        <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    let faveButton = screen.queryByTestId('fav-btn');
    let favePage = screen.queryByTestId('favorites');
    let homeButton = screen.queryByTestId('home-btn');
    let homePage = screen.queryByTestId('homepage');  
    expect(faveButton).toBeInTheDocument();
    expect(favePage).toEqual(null);
    expect(homeButton).toEqual(null);
    expect(homePage).toBeInTheDocument();   
    userEvent.click(faveButton);   
    faveButton = screen.queryByTestId('fav-btn');
    favePage = screen.queryByTestId('favorites');
    homeButton = screen.queryByTestId('home-btn');
    homePage = screen.queryByTestId('homepage');  
    expect(faveButton).toEqual(null);
    expect(favePage).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
    expect(homePage).toEqual(null); 
    userEvent.click(homeButton); 
    faveButton = screen.queryByTestId('fav-btn');
    favePage = screen.queryByTestId('favorites');
    homeButton = screen.queryByTestId('home-btn');
    homePage = screen.queryByTestId('homepage');   
    expect(faveButton).toBeInTheDocument();
    expect(favePage).toEqual(null);
    expect(homeButton).toEqual(null);
    expect(homePage).toBeInTheDocument();
  })
  it('3. should be able call getNewDog', async() => {
    getNewDog.mockResolvedValueOnce('newDog1')
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    let newDogButton = screen.queryByTestId('rand-btn');
    let noDog = screen.queryByTestId('current-dog');
    expect(noDog).toEqual(null);
    userEvent.click(newDogButton);
    let retriever = await waitFor(() => screen.getByTestId('current-dog'))
    expect(retriever).toBeInTheDocument()
  })
  
  it('4. should be able to favorite a picture of a dog in homepage, and see it in the favorites page', async() => {
    getNewDog.mockResolvedValueOnce('newDog1')
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    let newDogButton = screen.queryByTestId('rand-btn');
    let saveDogButton = screen.queryByTestId('save-btn');
    expect(saveDogButton).toEqual(null);
    
    userEvent.click(newDogButton);

    saveDogButton = await waitFor(() => screen.getByTestId('save-btn'));
    expect(saveDogButton).toBeInTheDocument();

    userEvent.click(saveDogButton);

    let faveButton = screen.queryByTestId('fav-btn');

    userEvent.click(faveButton);

    let retriever = await waitFor(() => screen.getByTestId('test-0'));
    expect(retriever).toBeInTheDocument();
  })
})
