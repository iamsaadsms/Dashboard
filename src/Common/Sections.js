import React from "react";
import './Sections.css';

const Sections = () => {
    return (
        <div className="Sections">
            <div className="sects">
                <span className="home-img-edit">Image</span>
                <span className="home-price-edit">Price</span>
                <span className="home-size-edit">Sizes</span>
                <span className="home-qty-edit">Quantity</span>
                <span className="home-date-added">Date Added</span>
                <span className="home-desc-edit">Description</span>
                <span className="home-fab-edit">Fabric</span>
                <span className="home-shiptime-edit">Shipping Time</span>
                <span className="home-clr-edit">Color</span>
                <span className="home-num-edit">Number of Pieces</span>
            </div>
            {/* Add form elements here for editing */}
        </div>
    );
};

export default Sections;
