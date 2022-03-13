import { createContext, useState } from "react";

export const BaseContextUi = createContext();

// export const BaseConsumer = BaseContext.Consumer;

// export const useBaseContext = useContext(BaseContext);

export const BasePovider = (props) => {
  const [ids, setIds] = useState([]);

  const value = { ids, setIds };
  return (
    <BaseContextUi.Provider value={value}>
      {props.children}
    </BaseContextUi.Provider>
  );
};
