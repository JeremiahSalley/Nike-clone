import React from 'react'

function ProductDetail(props) {
    return (
        <div className='productInfo'>
            <h3 id='gender'>{props.gender}</h3>
            <h1 id='title'>{props.title}</h1>
            <h5 id='price'>{props.price}</h5>
        </div>
    )
}

export default ProductDetail
