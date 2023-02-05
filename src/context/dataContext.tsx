import { createContext, useState } from "react";

interface DataContextProps {
  children: React.ReactNode;
}

const DataContext = createContext({
  data: [],
  setData: (data: any) => {},
});

export const DataContextProvider = ({ children }: DataContextProps) => {
  const [data, setData] = useState([]);

  console.log("data context", data);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
