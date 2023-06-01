import { actionChannel } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../Action/Action";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("PRODUCT_LIST condition", action);
      return [...action.data];
  }
};
