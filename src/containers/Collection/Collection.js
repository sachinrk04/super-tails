import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Products from "../../components/Products/Products";
import * as actions from "../../actions/index";
import "./Collection.scss";

const Collection = (props) => {
    const { products, fetchProducts, searchData } = props;
    const [ search, setSearch] = useState("")

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSearch = (event) => {
        const value = event.target.value
        setSearch(value);
        searchData(value);
    }

    return (
        <div className="collection-page">
            <div className="input-search">
                <input 
                    type="text"
                    name="search"
                    value={search}
                    onChange={onSearch}
                    placeholder="Search"
                />
            </div>
            <div>
                <Products products={products} />
            </div>
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
        fetchProducts: () => dispatch(actions.fetchProducts()),
        searchData: (text) => dispatch(actions.searchData(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
