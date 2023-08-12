import "./products.css"
import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { getProductsAction } from "../../redux/actions/products-api/product-actions";

const Products = () => {
    const dispatch = useDispatch();
    
	function handleOnSubmit(e: MouseEvent<HTMLButtonElement>): void {
		e.preventDefault();
        dispatch(getProductsAction());
	}

	return (
		<div className="products-container">
			Products
			<button type='submit' onClick={handleOnSubmit}>
				Click Me
			</button>
		</div>
	);
};
export default Products;
