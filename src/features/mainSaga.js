import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductSuccess } from './productState';

function* workGetProductsFetch() {
    const productResponse = yield call() => fetch('https://dummyjson.com/products');
    const productJson = yield productResponse.json();
    yield put(getProductSuccess(productJson));
}

function* productSaga() {
    yield takeEvery('products/getProductsFetch', workGetProductsFetch);
}



export default productSaga;