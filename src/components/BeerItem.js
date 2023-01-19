import React from 'react'
import BeerDetails from './BeerDetails'

const BeerItem = function({beer, onBeerClicked, onFavouriteBeer, favouriteBeer}) {
    const handleClick = function() {
        onBeerClicked(beer)
    }

    const handleFavouriteClicked = function() {
        console.log(`Button was clicked`)
        onFavouriteBeer(beer)

    }

    // const showFavouriteBeers = function() {

    if (beer === favouriteBeer) {
        return (
            <li onClick={handleClick}><b>{beer.name}</b><button onClick={handleFavouriteClicked}>Favourite</button></li>
        )
    } else {
        return (
            <li onClick={handleClick}>{beer.name}<button onClick={handleFavouriteClicked}>Favourite</button></li>
        )
    }
    
}

export default BeerItem