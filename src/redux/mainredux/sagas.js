import {
  onValue,
  push,
  query,
  ref,
  remove,
  set,
  update,
} from 'firebase/database';
import { takeLatest, all, put, fork } from 'redux-saga/effects';
import { database } from '../../auth/getAuth';

import {
  getInvoiceFail,
  getInvoiceSucces,
  delInvoiceSucces,
  delInvoiceFail,
  addInvoiceFail,
  editInvoiceFail,
  viewInvoiceSucces,
  viewInvoiceFail,
  getOrderSucces,
  getOrderFail,
  saleOrderFail,
  getSaledOrderFail,
  getSaledOrderSuccess,
} from './actions';
import * as types from './actionsTypes';

/*GET invoice to database */
export function* onGetInvoiceAsync(action) {
  const { localId } = action.payload;

  try {
    const userRef = ref(database, `${localId}/invoice`);
    const invoice2 = yield new Promise((resolve) =>
      onValue(query(userRef), resolve)
    );

    // const invoice = yield onValue(query(userRef), (snapshot) => {
    //   snapshot.val();
    // });

    if (invoice2 !== null) {
      yield put(getInvoiceSucces(invoice2.val()));
    } else {
      yield put(getInvoiceSucces({}));
    }
  } catch (error) {
    yield put(getInvoiceFail(error));
  }
}
export function* onGetInvoice() {
  yield takeLatest(types.GET_INVOICE_START, onGetInvoiceAsync);
}

/*Delete Invoice from Database */
export function* onDeleteInvoiceAsync({ payload }) {
  const { id, localId } = payload;
  console.log(id, localId);
  try {
    yield remove(ref(database, `${id}/invoice/${localId}`));
    yield put(delInvoiceSucces());
  } catch (error) {
    yield put(delInvoiceFail(error));
  }
}
export function* onDeleteInvoice() {
  yield takeLatest(types.DELETE_INVOICE_START, onDeleteInvoiceAsync);
}

/*Add Invoice */
export function* onAddInvoiceAsync({ payload }) {
  const { initialValues, localId } = payload;

  try {
    const userRef = ref(database, `${localId}/invoice`);
    const newUserRef = push(userRef);
    set(newUserRef, initialValues);
  } catch (error) {
    yield put(addInvoiceFail(error));
  }
}
export function* onAddInvoice() {
  yield takeLatest(types.ADD_INVOICE_START, onAddInvoiceAsync);
}

/*Edit Invoice */

export function* onEditInvoiceAsync({ payload }) {
  const { initialValues, localId, id } = payload;
  console.log(payload);
  try {
    const updates = {};
    updates[`${localId}/invoice/${id}`] = initialValues;
    update(ref(database), updates);
  } catch (error) {
    yield put(editInvoiceFail(error));
  }
}

export function* onEditInvoice() {
  yield takeLatest(types.EDIT_INVOICE_START, onEditInvoiceAsync);
}
/*View invoice Saga func */
export function* inViewInvoiceAsync({ payload }) {
  console.log(payload);
  const { localId, id } = payload;
  let invoice = {};
  try {
    id.length > 1
      ? id.forEach((id, i) => {
          new Promise((resolve) =>
            onValue(query(ref(database, `${localId}/${id}`)), (resolve) => {
              invoice[i] = resolve.val();
            })
          );
        })
      : onValue(
          new Promise((resolve) =>
            onValue(
              query(ref(database, `${localId}/${id.toString()}`)),
              (resolve) => {
                invoice[0] = resolve.val();
              }
            )
          )
        );

    if (invoice !== null) {
      yield put(viewInvoiceSucces(invoice.val()));
    } else {
      yield put(viewInvoiceSucces({}));
    }
  } catch (error) {
    yield put(viewInvoiceFail(error));
  }
}

export function* onViewInvoice() {
  yield takeLatest(types.VIEW_INVOICE_START, inViewInvoiceAsync);
}

export function* getOrdersAsync() {
  try {
    const userRef = ref(database, `/costumers`);
    const orders = yield new Promise((resolve) =>
      onValue(query(userRef), resolve)
    );
    yield put(getOrderSucces(orders.val()));

    // if (orders !== null) {
    //   yield put(getOrderSucces(orders.val()));
    // } else {
    //   yield put(getOrderSucces({}));
    // }
  } catch (error) {
    yield put(getOrderFail(error));
  }
}
export function* onGetOrders() {
  yield takeLatest(types.GET_ORDER_START, getOrdersAsync);
}
export function* saleOrderAsync({ payload }) {
  const { value } = payload;

  try {
    const userRef = ref(database, `/saledOrders`);
    const newUserRef = push(userRef);
    set(newUserRef, value);
  } catch (error) {
    yield put(saleOrderFail(error));
    console.log(error);
  }
}
export function* onSaleOrder() {
  yield takeLatest(types.SALED_ORDER_START, saleOrderAsync);
}

export function* getSaledOrderAsync() {
  try {
    const userRef = ref(database, `/saledOrders`);
    const orders = yield new Promise((resolve) =>
      onValue(query(userRef), resolve)
    );

    yield put(getSaledOrderSuccess(orders.val()));
  } catch (error) {
    yield put(getSaledOrderFail(error));
  }
}
export function* onGetSaledOrder() {
  yield takeLatest(types.GET_SALED_ORDER_START, getSaledOrderAsync);
}
const invoiceSagas = [
  fork(onGetInvoice),
  fork(onDeleteInvoice),
  fork(onAddInvoice),
  fork(onEditInvoice),
  fork(onViewInvoice),
  fork(onGetOrders),
  fork(onSaleOrder),
  fork(onGetSaledOrder),
];

export default function* rootSaga() {
  yield all([...invoiceSagas]);
}
