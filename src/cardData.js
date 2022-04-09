import React from 'react'

export default function CardData(props){
    let badgeText
    if(props.data.openSports === 30){
        badgeText = 'SOLD OUT'
    }else if(props.data.location == 'Online'){
        badgeText = 'ONLINE'
    }
    return(
        <>
            {/* <p>{props.img}</p>
            {props.id && <p>My {props.id}</p>}
            <p>{props.title}</p>
            <p>{props.rating}</p>
            <p>{props.reviewPoint}</p>
            <hr /> */}
            <div className="card m-2" style={{width: '22rem'}}>
                <img src={props.data.img} className="card-img-top" alt="image" />
                <div className="card-body ">
                    {/* {props.openSports === 20 && <span class="badge rounded-pill bg-secondary">Sold Out</span>} */}
                    <span class="badge rounded-pill bg-secondary">{badgeText}</span>
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.price}</p>
                    <a href="#" className="btn btn-primary">Go everywhere</a>
                </div>
            </div>
        </>
    )
}