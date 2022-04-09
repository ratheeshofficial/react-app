import React from 'react';
import travelData from './travelData'
import TravelIndex from './travelIndex'

export default function Travel(){
    const travelJourney = travelData.map(travel =>{
        return <TravelIndex travel = {travel} />
    })
    return(
        <>
            {travelJourney}
        </>
    )
}