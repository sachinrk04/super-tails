import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, CardMedia } from '@mui/material';
import * as actions from "../../actions/index";

import "./ProductDetails.scss"

const ProductDetails = (props) => {
    const { getProductDetails, productDetails, addToCart } = props;
    const { id } = useParams();

    useEffect(() => {
        getProductDetails(id);
    }, []);

    const onAddToCart = (data) => {
        const cartPayload = {
            id: data.id,
            title: data.title,
            image: data.image.src,
            qty: 1,
            price: data.variants[0].price,
            weight: data.variants[0].weight
        };
        addToCart(cartPayload);
    }

    return (
        <div className="product-details-page">
            <div className="details-image">
                <div className="images">
                    <CardMedia
                        sx={{ maxWidth: 545 }}
                        component="img"
                        alt={productDetails.title}
                        image={productDetails?.image?.src}
                    />
                </div>
            </div>
            <div className="details-content">
                <div className="details-title">
                    <h3>
                        {productDetails.title}
                    </h3>
                </div>
                
                {productDetails?.variants?.length ?
                    productDetails.variants.map((variant) => (
                        <div className="details-variants" key={variant.id}>
                            <div>
                                <b>Price:</b> {variant.price}
                            </div>
                            <div>
                                <b>Weight:</b> 
                                {variant.weight} {variant.weight_unit}
                            </div>
                            <div>
                                <b>Quantity:</b> {variant.option1}
                            </div>
                            <div>
                                <b>SKU:</b> {variant.sku}
                            </div>
                        </div>

                    ))
                : null}

                <div className="details-actions">
                    <Button 
                        size="small" 
                        variant="contained"
                        onClick={() => onAddToCart(productDetails)}
                    >
                        Add to CART
                    </Button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        productDetails: state.products.productDetails,
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        getProductDetails: (id) => dispatch(actions.fetchProductDetails(id)),
        addToCart: (data) => dispatch(actions.addToCart(data))
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
