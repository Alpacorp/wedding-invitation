import { createContext, useState } from "react";

interface DataContextProps {
  children: React.ReactNode;
}

const DataContext = createContext({
  data: {} as any,
  setData: (data: any) => {},
});

export const DataContextProvider = ({ children }: DataContextProps) => {
  const [data, setData] = useState({});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
