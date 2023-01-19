import React from 'react'
import BeerItem from './BeerItem'

const BeerDetails = function({beer}) {
    return (
        <>
        {beer.name} &nbsp;
        {beer.tagline} &nbsp;
        {beer.first_brewed} &nbsp;
        {beer.description} &nbsp;
        <img src={beer.image_url}></img>
        </>
    )
}

export default BeerDetails