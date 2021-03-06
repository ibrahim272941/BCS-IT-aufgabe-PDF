import {
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
  const [result, setResult] = useState([]);
  const {
    reloadUserInfo: { localId },
  } = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const userRef = ref(database, `${localId}/product`);
    onValue(query(userRef), (snapshot) => {
      const results = [];
      const object = snapshot.val();
      for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          const value = object[key];
          results.push({ id: key, ...value });
        }
      }
      setResult(results);
      setData({ ...snapshot.val() });
    });
  }, [localId]);

  return [data, result];
};
export const addProduct = (initialValue, localId) => {
  const userRef = ref(database, `${localId}/product`);
  const newUserRef = push(userRef);
  set(newUserRef, {
    productTitle: initialValue.productTitle,
    price: initialValue.price,
    quantity: initialValue.quantity,
    img: initialValue.img,
  });
};
export const deleteProduct = (id, localId) => {
  // const userRef = ref(db, "contact");
  remove(ref(database, `${localId}/product/${id}`));
};

export const updateProduct = (id, initialValue, localId) => {
  const updates = {};
  updates[`${localId}/product/${id}`] = initialValue;
  update(ref(database), updates);
  // return updateProduct(ref(database), updates);
};
export const updateProduct2 = async (baseContext, localId) => {
  let object;
  try {
    const userRef = ref(database, `${localId}/product/${baseContext[0]}`);
    onValue(query(userRef), (snapshot) => {
      object = snapshot.val();
    });

    let initialValue = {
      productTitle: object.productTitle,
      price: object.price,
      quantity: object.quantity - baseContext[1],
      img: object.img,
    };
    const updates = {};
    updates[`${localId}/product/${baseContext[0]}`] = initialValue;
    update(ref(database), updates);
    return updateProduct2(ref(database), updates);
  } catch (error) {
    console.log(error.message);
  }
};
