import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getAllCategories } from "../../api";
import { Preloader } from "../Preloader";
import { CategoryList } from "../CategoryList";
import { Search } from "../Search";

export function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const {search} = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const searchStr = searchParams.get('search') || '';

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(searchStr.toLowerCase()))
        );
        setSearchParams({search: str});
        
    };


    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
            setFilteredCatalog(search ? (data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()))) : 
            data.categories
            );
        })
    }, [search]);
    return (
        <>
        <Search cb={handleSearch} />
        {
            !catalog.length ? (<Preloader />) : (<CategoryList catalog={filteredCatalog} />)
        }
        </>
    );
}