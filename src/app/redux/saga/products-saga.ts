import { takeEvery, put} from 'redux-saga/effects'
import { setProductList } from '../slices/products-slice';
import { getProductsAction } from '../actions/products-api/product-actions';
import { IProduct } from '../../components/product/product-component';

async function fetchProducts(): Promise<IProduct[]> {
	const response = await fetch("http://localhost:3500/products");

	if (!response.ok) {
		console.warn("could not fetch products from server");
	}

	return (await response.json()) as IProduct[];
}

function* getProducts()
{
	let products: IProduct[] = yield fetchProducts();
	yield put({ type: setProductList, payload: products });
}

function* productSaga() {
    yield takeEvery(getProductsAction, getProducts)
}

export { productSaga };