import React, { useEffect, useState } from "react";
import Book from '../Components/ForUser//Book'
import { useLocation } from "react-router-dom";
const SingleBookDetailPage = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);
  return (
    <div>
<Book data={details}/>
      
    </div>
  );
};

export default SingleBookDetailPage;
