import React from 'react'
import CategoryNav from '../Components/CategoryNav/CategoryNav'
import Products from '../Components/Products/Products'
import DataProvider  from '../context/DataContext'
function Home() {
    return (
        <div className="homeParentDiv pt-16">
            <CategoryNav />
            <DataProvider>
            <Products/>
            </DataProvider>
        </div>
    )
}

export default Home