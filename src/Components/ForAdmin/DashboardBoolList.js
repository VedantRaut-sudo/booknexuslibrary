import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../../config/firebase";
import "./style.css";

const DashboardBoolList = () => {
  const [newtitle, setNewTitle] = useState("");
  const [newauthor, setNewAuthor] = useState("");
  const [newgenres, setNewGenres] = useState([]);
  const [newcontent, SetNewContent] = useState("");
  const [newimageUrl, setNewImageUrl] = useState("");
  const [newfileUpload, setNewFileUpload] = useState(null);
  // const [newavialabe, setNewAvialable] = useState(false);

  const [booksList, setBookList] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
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

  const deletebook = async (id) => {
    const item = doc(db, "books", id);
    await deleteDoc(item);
    fetchdata();
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const updateitembtn = async (id) => {
    
    const items = doc(db, "books", id);
    try{

      await updateDoc(items, {
        title: newtitle,
        author: newauthor,
        genres: newgenres,
        content: newcontent,
        userId: auth?.currentUser?.uid,
        imageUrl: newimageUrl,
      
        person: auth.currentUser.displayName,
      });
      fetchdata();
      setSelectedBook(null);
    }catch(err){
      console.error(err)
    }
    };
  const uploadfile = async () => {
    if (!newfileUpload) return;
    const fileFolderref = ref(storage, `toolimg/${newfileUpload.name}`);
    const snapshot = await uploadBytes(fileFolderref, newfileUpload);
    const downloadURL = await getDownloadURL(snapshot.ref);
    setNewImageUrl(downloadURL);
  };

  return (
    <div className="dashboard_bookList">
      <h1 className="dashboardheading">Book List</h1>
      <ul className="list_of_books_dash">
        {booksList.map((item) => (
          <li className="bookitem_dash" key={item.id}>
            <div className="up">
              <div className="dashbookimg">
                <img className="listimg_dash" src={item.imageUrl} alt="" />
              </div>
              <div className="data_book_list">
                <div className="left_side_list">
                  <h3 className="dashbookcardheading">{item.title}</h3>
                  <p className="dashbookcardauthor">{item.author}</p>
                </div>
                <div className="left_side_list modify_btn">
                  <button
                    style={{ backgroundColor: "#111" }}
                    className="btn_edit_item btn_for_update"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    style={{ backgroundColor: "Red" }}
                    className="btn_delete_item btn_for_update"
                    onClick={() => deletebook(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="down">
              {selectedBook && selectedBook.id === item.id && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <div className="upperfour">
                      <input
                        onChange={(e) => setNewTitle(e.target.value)}
                        type="text"
                        placeholder="title"
                      />
                      <input
                        onChange={(e) => setNewAuthor(e.target.value)}
                        type="text"
                        placeholder="author"
                      />
                      <input
                        onChange={(e) => setNewGenres(e.target.value)}
                        type="text"
                        placeholder="genres"
                      />

                      <input
                        onChange={(e) => SetNewContent(e.target.value)}
                        type="text"
                        placeholder="content"
                      />
                    </div>
                    <div>
                      Image
                      <input
                        onChange={(e) => setNewFileUpload(e.target.files[0])}
                        type="file"
                      />
                      <button onClick={uploadfile}>Upload file</button>
                    </div>

                    <div className="btns">
                      <button
                        className="save"
                        onClick={() => updateitembtn(item.id)}
                      >
                        Save
                      </button>
                      <button className="upsave" onClick={handleCloseModal}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className="nomoredata">No More Data</p>
    </div>
  );
};

export default DashboardBoolList;
