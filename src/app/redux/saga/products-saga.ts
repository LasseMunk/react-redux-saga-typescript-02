import { takeEvery, put} from 'redux-saga/effects'
import { setProductList } from '../slices/products-slice';
import { getProductsAction } from '../actions/products-api/product-actions';

interface Product  {
	id: number;
	name: string;
	color: string;
	price: number;
	category: string;
	brand: string;
	photo: string;
};

async function fetchProducts(): Promise<Product[]> {
	const response = await fetch("http://localhost:3500/products");

	if(!response.ok) {
		console.warn("could not fetch products from server");
	}

	return(await response.json() as Product[]);
}

function* getProducts()
{
	let products: Product[] = yield fetchProducts();
	yield put({ type: setProductList, payload: products });
}

function* productSaga() {
    yield takeEvery(getProductsAction, getProducts)
}

export { productSaga };