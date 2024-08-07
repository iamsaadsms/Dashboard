import React from "react";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sections = ({ product }) => {
    if (!product) {
        return <div>Loading...</div>; // or any placeholder UI
    }

    return (
        <div className="Sections">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Sizes</th>
                        <th>Quantity</th>
                        <th>Date Added</th>
                        <th>Description</th>
                        <th>Fabric</th>
                        <th>Shipping Time</th>
                        <th>Color</th>
                        <th>Number of Pieces</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className="home-img img-fluid" src={product.img1} alt="Product Image 1" /></td>
                        <td>{product.price}</td>
                        <td>{product.size}</td>
                        <td>{product.quantity}</td>
                        <td>{new Date(product.timeProductAdded.$date).toLocaleDateString()}</td>
                        <td>{product.type}</td>
                        <td>{product.fabric}</td>
                        <td>{product.shippingTime}</td>
                        <td>{product.color}</td>
                        <td>{product.piecesNumber}</td>
                    </tr>
                </tbody>
            </Table>
            {/* Add form elements here for editing */}
        </div>
    );
};

export default Sections;
