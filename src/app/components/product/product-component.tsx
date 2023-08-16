import "./product.css";

export interface IProduct {
	id: number;
	name: string;
	color: string;
	price: number;
	category: string;
	brand: string;
	photo: string;
}

export const Product = (props: { product: IProduct }) => {
	return (
		<div className='product-container'>
			<div className='product-img-container'>
				<img
					className='product-img'
					src={props.product.photo}
					alt='product'
				/>
			</div>
			<ul key={props.product.id} className='product-body-container'>
				<li className='product-li'>
					<span className='product-title'>Name: </span>
					{props.product.name}
				</li>
				<li className='product-li'>
					<span className='product-title'>Color: </span>
					{props.product.color}
				</li>
				<li className='product-li'>
					<span className='product-title'>Category: </span>
					{props.product.category}
				</li>
				<li className='product-li'>
					<span className='product-title'>Brand: </span>
					{props.product.brand}
				</li>
				<li className='product-li'>
					<span className='product-title'>Price: </span>
					{props.product.price}
				</li>
			</ul>
			<div className='product-btn-container'>
				<button>add to cart</button>
			</div>
		</div>
	);
};
