import { useState,useEffect } from "react";
import { createContext } from "react";
// import { SHOP_DATA } from "../shop-data.js";
import { getCategoriesAndDocs } from "../utils/firebase/firebaseUtils.js";

export const CategoriesContext = createContext({
    categoriesMap: []
});

export const Categoryprovider =({children})=>{
    const [categoriesMap, setcategoriesMap] = useState({});
    // useEffect(()=>{
    //     addCollectionAndDoc('categories',SHOP_DATA);
    // },[])

    useEffect(()=>{
        const getCategoryMap = async()=>{
            const categoryMap = await getCategoriesAndDocs();
            setcategoriesMap(categoryMap);
        }
        getCategoryMap();
        },[])
    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}