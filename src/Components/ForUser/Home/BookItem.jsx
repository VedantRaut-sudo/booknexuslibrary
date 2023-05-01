import React from 'react'
import { useNavigate } from "react-router-dom";
import './style.css'
const BookItem = ({ item }) => {
    const NAVIGATE = useNavigate()
    const _id = item.title;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const uniqueid = idString(_id);
    const handleClickOnBook = () => {
        NAVIGATE(`/books/${uniqueid}`, {
            state: {
                item: item,
            },
        })
    };
    return (
        <div onClick={handleClickOnBook} className='book_item_wrap'>
            <div className="coverimg">
                <img className='cardimg' loading='_prority' src={item.imageUrl} alt="cover-img" />
            </div>
            <div className="Book_card_data">
                <h3>{item.title}</h3>
                <p className='author'>{item.author}</p>
                <p className='genres'>{item.genres}</p>
            </div>
        </div>
    )
}

export default BookItem
