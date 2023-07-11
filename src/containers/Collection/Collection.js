import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Products from "../../components/Products/Products";
import * as actions from "../../actions/index";
import "./Collection.scss";

const Collection = (props) => {
    const { products, fetchProducts, searchData, onPagination, startPage, endPage } = props;
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

    const onPages = (page) => {
        console.log("page--->", page)
        let start = startPage === 0 ? (startPage + 1) *  page : startPage;
        let end = endPage * page;
        onPagination(start, end);
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
            <div className="paginaion">
                <div>
                    <span onClick={() => onPages(1)} >1</span>
                    <span onClick={() => onPages(2)}>2</span>
                    <span onClick={() => onPages(3)}>3</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products.productList,
        startPage: state.products.startNumber,
        endPage: state.products.endNumber,
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(actions.fetchProducts()),
        searchData: (text) => dispatch(actions.searchData(text)),
        onPagination: (itemStart, itemEnd) => dispatch(actions.onPaginationAction(itemStart, itemEnd)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
