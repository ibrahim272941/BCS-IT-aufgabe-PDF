import {
  child,
  onValue,
  push,
  query,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { database } from "../../auth/getAuth";

export const useFetch = (product) => {
  const [data, setData] = useState({});
  const {
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const userRef = ref(database, `product`);
    onValue(query(userRef), (snapshot) => {
      setData({ ...snapshot.val() });
    });
  }, []);

  return data;
};
export const addProduct = (initialValue) => {
  const userRef = ref(database, "product");
  const newUserRef = push(userRef);
  set(newUserRef, {
    productTitle: initialValue.productTitle,
    price: initialValue.price,
    quantity: initialValue.quantity,
  });
  console.log("veri eklendi");
};
export const deleteProduct = (id) => {
  // const userRef = ref(db, "contact");
  remove(ref(database, "product/" + id));
};

export const updateProduct = (id, initialValue) => {
  console.log(initialValue);
  const updates = {};
  updates[`product/${id}`] = initialValue;
  update(ref(database), updates);

  return updateProduct(ref(database), updates);
};
