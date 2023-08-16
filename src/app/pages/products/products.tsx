import "./products.css"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getProductsAction } from "../../redux/actions/products-api/product-actions";
import { Product } from "../../components/product/product-component";
import { IProduct } from "../../components/product/product-component";

const Products = () => {
	const products = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProductsAction());
	},[])

	return (
		<div className="products-container">
			
			<div>
				{products.map((databaseProduct: IProduct) => { 
					return  <Product key = {databaseProduct.id} product={databaseProduct} />
				})}
		
			</div>
		</div>
	);
};
export default Products;
