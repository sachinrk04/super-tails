import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Products from "../../components/Products/Products";
import * as actions from "../../actions/index";
import "./Collection.scss";

const Collection = (props) => {
    const { products, fetchProducts } = props;

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="collection-page">
            <Products products={products} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products.productList,
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(actions.fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
