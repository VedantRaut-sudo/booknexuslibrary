import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import './style.css'

// import No_Result from './no-results.png'
import { Link } from 'react-router-dom'
import SearchItem from "./SearchItem";

const SearchBar = () => {
    const [booksList, setBookList] = useState([]);
    const referenceAddress = collection(db, "books");
    const fetchdata = async () => {
        const books = await getDocs(referenceAddress);
        const sortedData = books.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setBookList(sortedData);
    };
    useEffect(() => {
        fetchdata();
    }, []);



    const [query, setQuery] = useState("");
    const [suggestions, setSuggestion] = useState([]);

    useEffect(() => {
        setSuggestion(booksList);
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value)
        const filteredData = value
            ? booksList.filter(
                (item) =>
                    item.title.toLowerCase().includes(value.toLowerCase())

            ) : [];
        setSuggestion(filteredData)
    };


    const renderTitleSection = () => {
        const titleSuggestion = suggestions.filter(
            (item) => item.title.toLowerCase().includes(query.toLowerCase())
        );
        if (titleSuggestion.length === 0) {
            return null;
        }
        return (
            <div>
                {/* <h2 className='tool_suggestion_heading'>Tools</h2> */}
                <ul>
                    {titleSuggestion.slice(0, 5).map((item) => (
                        <li className='tool_suggestion_list' key={item.title}>
                  <SearchItem item={item}/>

                        </li>
                    ))}
                </ul>
            </div>
        )
    }


    const renderNoDataFound = () => {
        if (suggestions.length === 0) {
            return (
                <div>
                    <h1 className="noresult">No Result</h1>
                </div>
            )
        }
    }


    return (
        <div className='search_wrap'>
            <input type="text" value={query} onChange={handleInputChange} className='searchBar' id="searchBar" placeholder='Search for your fav Book' />
            {query.length > 0 && (
                <div className='suggestion_wrap' >
                    {renderTitleSection()}

                    {renderNoDataFound()}
                </div>
            )}
        </div>
    )
}

export default SearchBar
