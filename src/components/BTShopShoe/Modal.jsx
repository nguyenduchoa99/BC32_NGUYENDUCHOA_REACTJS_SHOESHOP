import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const {modal} =this.props
    return (
    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Information</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body row">
        <div className="col-6">
            <img src={modal.image} alt={modal.alias} className="img-fluid"/>
        </div>
        <div className="col-6">
            <h5>Name: {modal.name}</h5>
            <p>Price: {modal.price}$</p>
            <p>Description: {modal.description}</p>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    )
  }
}
