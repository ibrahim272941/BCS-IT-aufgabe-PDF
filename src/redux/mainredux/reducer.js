import * as types from './actionsTypes';

const initialState = {
  invoice: {},
  error: null,
  loading: false,
  orders: [],
  invoiceByOrder: [],
  saledCompleted: false,
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INVOICE_START:
    case types.DELETE_INVOICE_START:
    case types.ADD_INVOICE_START:
    case types.EDIT_INVOICE_START:
    case types.VIEW_INVOICE_START:
      return {
        ...state,
        loading: true,
      };

    case types.DELETE_INVOICE_SUCCESS:
    case types.ADD_INVOICE_SUCCESS:
    case types.EDIT_INVOICE_SUCCESS:
    case types.VIEW_INVOICE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.GET_INVOICE_SUCCESS:
      return {
        ...state,
        invoice: action.payload,
        loading: false,
      };
    case types.GET_INVOICE_FAIL:
    case types.DELETE_INVOICE_FAIL:
    case types.ADD_INVOICE_FAIL:
    case types.EDIT_INVOICE_FAIL:
    case types.VIEW_INVOICE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.GET_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case types.GET_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.SALED_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case types.SALED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        saledCompleted: true,
      };
    case types.SALED_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.GET_SALED_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_SALED_ORDER_SUCCESS:
      return {
        ...state,
        invoiceByOrder: action.payload,
      };
    case types.GET_SALED_ORDER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default invoiceReducer;
