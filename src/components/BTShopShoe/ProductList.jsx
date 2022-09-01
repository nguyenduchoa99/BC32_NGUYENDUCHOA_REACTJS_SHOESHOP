import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        const { product, check,handleShoeDefault} = this.props
        return (
            <div className="card" style={{ height: '415px', width: '290px', marginBottom: '25px' }}>
                <img src={product.image} alt={product.name} />
                <div className="card-body">
                    <h6>{product.name}</h6>
                    <p>{product.price} $</p>
                    <div style={{ position: 'absolute', bottom: '15px' }}>
                        <button className="btn btn-dark" onClick={()=>handleShoeDefault(product)}>
                            add to carts
                            <i className="fa-solid fa-cart-arrow-down ml-2"></i>
                        </button>
                        <button className='btn btn-success ml-2' data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>check(product)}>
                            Info
                            <i className="fa-solid fa-magnifying-glass ml-2"></i>
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}
