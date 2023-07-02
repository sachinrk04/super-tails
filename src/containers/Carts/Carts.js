import React from "react";
import { connect } from 'react-redux';
import * as actions from "../../actions/index";

import "./Carts.scss";
import { Button, ButtonGroup, CardMedia } from "@mui/material";

function Carts(props) {
    const { carts, changeQty, removeItem } = props;

    const onChangeQty = (id, qty) => {
        changeQty(id, qty)
    }

    const onRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className="carts-page">
            {carts?.length && carts.map((cart) => {
                return (
                    <div className="cart-item" key={cart.id}>
                        <div className="cart-image">
                            <CardMedia
                                sx={{ maxWidth: 170 }}
                                component="img"
                                alt={cart.title}
                                image={cart.image}
                            />
                        </div>
                        <div className="cart-content">
                            <div className="cart-title">
                                <h3>{cart.title}</h3>
                            </div>
                            <div>
                                <b>Price:</b> {cart.price}
                            </div>
                        </div>
                        <div className="cart-action">
                            <div>
                                <ButtonGroup size="small" aria-label="small button group">
                                    <Button onClick={() => onChangeQty(cart.id, cart.qty - 1)}> - </Button>
                                    <Button disabled>{cart.qty}</Button>
                                    <Button onClick={() => onChangeQty(cart.id, cart.qty + 1)}> + </Button>
                                </ButtonGroup>
                                <Button onClick={() => onRemove(cart.id)}> Remove </Button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        carts: state.carts.cartList
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (data) => dispatch(actions.addToCart(data)),
        changeQty: (id, qty) => dispatch(actions.changeQty(id, qty)),
        removeItem: (id) => dispatch(actions.removeFromCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carts);
