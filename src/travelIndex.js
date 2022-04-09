import React from 'react'

export default function TravelIndex(props){
    console.log(props.travel)
        
    return(
        <>
        <div className="row">
            <div className="card mb-3" style={{maxWidth: "540px"}} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.travel.imageUrl} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.travel.title}</h5>
                            <p className="card-text mb-2">{props.travel.description}</p>
                            <p className="card-text mb-2"><small className="text-muted">{props.travel.endDate}</small></p>
                            <a href ={props.travel.googleMapsUrl} target="_blank">{props.travel.location}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}