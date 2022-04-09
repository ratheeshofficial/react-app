import React from 'react'
import './card.css'
import avatar from './img_avatar.png'

export default function Card({img,phone,title,email}) {
    // const num = [1,2,3,4,5]
    // const map =  num.map(x => x * x)
    // // const map = num.map(function(x){
    // //     return x
    // // })
    // console.log(map)

    // const name = ['ratheesh','neymar','ajith','vijay']
    // const upperCase = name.map(name => name[0].toUpperCase() + name.slice(1))

    // console.log(upperCase)

    // const pokemon = ['Bulbasaur','Charmander','Squirtle']
    // const elements = pokemon.map(mon => `<p>${mon}</p>`)
    
    // console.log(elements)

    const colors = ['Red','Orange','Purple','Yellow','Green','Blue']
    const colorName = colors.map((x,index) => {
        return (
            <>
                <p>{`${x} ${index}`}</p>
            </>
        )
    })
    console.log(`${colorName}`)

    return (
        // <div className="row">
            <div className="col-lg-3">
                <div className="card w-100">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body text-center">
                        {title && <h5 className="card-title">Title: {title}</h5>}
                        <p className="card-text mb-0">{phone}</p>
                        <p className="card-text">{email}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                        {colorName}
                    </div>
                </div>
            </div>
        // </div>
    )
}
