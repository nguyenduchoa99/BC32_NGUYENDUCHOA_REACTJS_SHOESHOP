import React, { Component } from 'react'

export default class Carts extends Component {
    render() {
        const { cart, handleRemoveCart, handleQuantity } = this.props
        const render = () => {
            return cart.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>
                            <h5>{item.id}</h5>
                        </td>
                        <td>
                            <h6>{item.name}</h6>
                        </td>
                        <td>
                            <img style={{ width: '50px' }} src={item.image} alt={item.alias} />
                        </td>
                        <td>{item.price}$</td>
                        <td>
                            <button className='btn btn-warning' onClick={() => handleQuantity(item.id, -1)}>-</button>
                            <span className='mx-2'>{item.amount}</span>
                            <button className='btn btn-warning'
                                onClick={() => handleQuantity(item.id, 1)}>+</button>
                        </td>
                        <td>{item.price * item.amount}$</td>
                        <td>
                            <button className='btn btn-danger'
                                onClick={() => handleRemoveCart(item.id)}
                            >
                                <i className="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                )
            })
        }
        return (
            <div>
                {/* Button trigger modal */}
                <div className="text-right mb-2">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        <i className="fa-solid fa-cart-shopping mr-2"></i>
                        Carts
                        <span className='ml-3'>
                            ({cart.length}-{' '} {cart.reduce((total, item) => { return (total += item.amount * item.price) }, 0)}$)
                        </span>
                    </button>
                </div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Carts</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Total</th>
                                            <th>
                                                <i className="fa-solid fa-gear" />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {render()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Buy</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
