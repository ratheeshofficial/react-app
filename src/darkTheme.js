import React from 'react'

export default function DarkTheme(){

    const [dark,setDark] = React.useState(true)

    const styles = {
        backgroundColor: dark ? '#ffffff' : '#000000',
        
    }
    const colorStyle = {
        color: dark ?  '#000000' : '#ffffff'
    }

    function handleChange(){
        setDark((prevDark) =>{
            return !prevDark 
        })
    }

    return(
        <>
            <div className='row'>
                <div className='col-lg-12'>
                    <div style ={styles} className="card border-dark mb-3" >
                        <div className="card-header d-flex">
                            <div className="form-check form-switch">
                                <input className="form-check-input" onClick={handleChange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label style={colorStyle} className="form-check-label" for="flexSwitchCheckDefault">{dark === true ? 'Dark' : 'Light'} Theme</label>
                            </div>
                        </div>
                        <div className="card-body text-dark">
                            <h5 style={colorStyle} className="card-title">Dark card title</h5>
                            <p style={colorStyle} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}