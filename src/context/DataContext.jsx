import React, {  createContext, useContext, useEffect, useState } from 'react'

const DataContext = createContext();
export default function DataProvider({children}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(8)
    useEffect(() => {
        const handleAPICall = async () => {
            console.log("called function");
            try {
                const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
                if (!res.ok) {
                    console.log("not coming");
                    throw new Error('Could not get data');
                }
                const Data = await res.json();
                // console.log(Data,"dataa");
                setData(Data)
                setLoading(false)
                setError(null)
            } catch (error) {
                console.error("Error loading data:", error);
                setError("Error loading data. Please try again later.");
                setLoading(false);
            }
        };
        handleAPICall()
    },[limit]);


    const incrementLimit = () => {
        setLimit(prevLimit => prevLimit + 8 );
        setLoading(true)
    }

    return (
        <DataContext.Provider value={{data, loading, error, incrementLimit}}>
            {children}
        </DataContext.Provider>
    )
};


export const useData = () => useContext(DataContext);