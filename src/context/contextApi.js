// import React, { createContext, useState, useEffect } from 'react'
// import { fetchDataFromApi } from "../utils/api"

// export const Context = createContext();

// export const AppContext = (props) => {
//     const [loading, setLoading] = useState(false)
//     const [searchResults, setSearchResults] = useState(false)
//     const [selectCategories, setSelectCategories] = useState("New")
//     const [mobileMenu, setMobileMenu] = useState(false)

//     useEffect(() => {
//         fetchSelectedCategoryData(selectCategories)
//     }, [selectCategories])

//     const fetchSelectedCategoryData = (query) => {
//         setLoading(true)
//         fetchDataFromApi(`search/?q=${query}`)
//             .then((res) => {
//                 console.log(res)
//                 setSearchResults(res)
//                 setLoading(false)
//             })
//     }
// REACT_APP_YOUTUBE_API_KEY='AIzaSyAmycy13neoARRgc2NU21cANePRfdQFZ9Q'
// REACT_APP_YOUTUBE_API_KEY='77298088e7mshbceff6a297e797bp1468bejsnb565b354435e'
//     return (
//         <Context.Provider value={{
//             loading, setLoading,
//             mobileMenu, setMobileMenu,
//             searchResults,
//             selectCategories, setSelectCategories
//         }}>
//             {props.children}
//         </Context.Provider>
//     )
// }

import React, { createContext, useState, useEffect } from 'react';
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`)
      .then(({contents}) => {
        console.log(contents);
        setSearchResults(contents);
        setLoading(false);
      })
      
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

