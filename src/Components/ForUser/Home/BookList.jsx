import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../config/firebase";
import './style.css'
import loading from '../../../Assets/Book.gif'
import BookItem from "./BookItem";
const BookList = () => {
    const [booksList, setBookList] = useState([]);
    const referenceAddress = collection(db, "books");
    const fetchdata = async () => {
        try{

            const books = await getDocs(referenceAddress);
            const sortedData = books.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setBookList(sortedData);
        }catch(err){
            console.error(err)
        }
    };
    useEffect(() => {
        fetchdata();
    }, []);
    return (
        <div className="grid_booklist">

            {
                BookList ? booksList.map((item) => (

                    <div key={item.id}>
                        <BookItem item={item} />
                    </div>
                )) : <div>
                    <img src={loading} alt="" />
                </div>
            }
        </div>
    );
}

export default BookList
