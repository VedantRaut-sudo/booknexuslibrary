import React from 'react'
import { useNavigate } from "react-router-dom";
const SearchItem = ({item}) => {
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
    <div>
      <p onClick={handleClickOnBook}>{item.title}</p>
    </div>
  )
}

export default SearchItem
