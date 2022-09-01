import React, { Component } from 'react'
import Carts from './Carts'
import data from './data.json'
import Modal from './Modal'
import ProductList from './ProductList'
export default class BTShopShoe extends Component {
    state = {
        shoe: {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        cart: []
    }

    checkInfo = (value) => {
        this.setState({ shoe: value })
    }
    handleShoeDefault = (shoeDefault) => {
        const value = { ...shoeDefault, amount: 1 }
        const data = [...this.state.cart]
        const index = data.findIndex((shoe) => shoe.id === shoeDefault.id)
        if (index !== -1) {
            data[index].amount += 1
        } else {
            data.push(value)
        }
        this.setState({
            cart: data,
        })
    }
    handleRemoveCart = (id) => {
        const data = this.state.cart.filter((item) => item.id !== id)
        this.setState({
            cart: data,
        })
    }
    handleQuantity = (id, quantity) => {
        const data = [...this.state.cart]
        const index = data.findIndex((item) => item.id === id)
        if (data[index].amount > 1 || quantity > 0) {
            data[index].amount += quantity
        } else if (window.confirm('Do you want to remove the product from the cart?')) {
            data.splice(index, 1)
        }
        this.setState({
            cart: data,
        })
    }
    render() {
        return (
            <div className='container'>
                <Modal modal={this.state.shoe}
                />
                <div className="row pt-4">
                    <div className="col-2">
                        <div style={{ paddingTop: "400px" }}>
                            <p>Home</p>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div className="col-10">
                        <h1 className='text-center pb-3'>Shoes Shop</h1>
                        <Carts
                            cart={this.state.cart}
                            handleRemoveCart={this.handleRemoveCart}
                            handleQuantity={this.handleQuantity}
                        />
                        <div className="row">
                            {data.map((value) => {
                                return (
                                    <div className="col-4" key={value.id}>
                                        <ProductList product={value} check={this.checkInfo}
                                            handleShoeDefault={this.handleShoeDefault}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
