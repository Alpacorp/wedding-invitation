import { createContext, useState } from "react";

interface DataContextProps {
  children: React.ReactNode;
}

const DataContext = createContext({
  data: {} as any,
  setData: (data: any) => {},
  allData: {} as any,
  setAllData: (data: any) => {},
});

export const DataContextProvider = ({ children }: DataContextProps) => {
  const [data, setData] = useState({});
  const [allData, setAllData] = useState({});

  return (
    <DataContext.Provider value={{ data, setData, allData, setAllData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
