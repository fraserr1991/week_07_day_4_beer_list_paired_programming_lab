import React, {useState, useEffect} from 'react'
import BeerList from '../components/BeerList'
import BeerDetails from '../components/BeerDetails';
import BeerItem from '../components/BeerItem';

const BeerBox = function() {
    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)
    const [favouriteBeers, setFavouriteBeers] = useState([])

    const getBeers = function() {
        fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(beers => setBeers(beers))
    }

    useEffect(() => {
        getBeers()
    }, [])


    const onBeerClicked = function(beer) {
        setSelectedBeer(beer)
    }

    const onFavouriteBeer = function(beer) {
        setFavouriteBeers(favouriteBeers => [...favouriteBeers, beer])
    }

    // const onBeerSelected = function(beer) {
    //     setSelectedBeer(beer)
    // }
    return (
    <>
    <BeerList beers={beers} favouriteBeers = {favouriteBeers} onBeerClicked={onBeerClicked} onFavouriteBeer={onFavouriteBeer} />
    {selectedBeer && <BeerDetails beer={selectedBeer}></BeerDetails>}
    </>
    )
}

export default BeerBox