import React from 'react'
import BeerItem from './BeerItem'

const BeerList = function({beers, onBeerClicked, onFavouriteBeer, favouriteBeers}) {

    const BeerItems = beers.map((beer, index) => {
        return <BeerItem beers={beers} beer={beer} favouriteBeers = {favouriteBeers} key={beer.id} onBeerClicked={onBeerClicked} onFavouriteBeer={onFavouriteBeer}/>
    })

    return (
    <>
    {BeerItems}
    </>
    )
}

export default BeerList