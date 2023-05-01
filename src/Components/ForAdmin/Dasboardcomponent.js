import React, { useEffect, useState } from "react";
import "./style.css";
import { auth, db, storage } from "../../config/firebase";
import coverimgdash from "../../Assets/pexels-neosiam-4498792.jpg";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import DashboardBoolList from "./DashboardBoolList";

const Dasboardcomponent = () => {
  const [addNewBookSection, setAddNewBookSection] = useState(false);
  const refer = collection(db, "books");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genres, setGenres] = useState([]);
  const [content, SetContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [fileUpload, setFileUpload] = useState(null);
  // const [avialabe, setAvialable] = useState(false);
  const [numberofitem, setNumberOfItem] = useState(0);

  const onSubmit = async () => {
    try {
      await addDoc(refer, {
        title: title,
        author: author,
        genres: genres,
        content: content,
        userId: auth?.currentUser?.uid,
        imageUrl: imageUrl,

        person: auth.currentUser.displayName,
      }).then(() => {
        fetchdata();
      });
    } catch (err) {
      console.error(err);
    }
  };
  const referenceAddress = collection(db, "books");
  const fetchdata = async () => {
    try{

      const books = await getDocs(referenceAddress);
      const number_of_item = books.size;
      const sortedData = books.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNumberOfItem(number_of_item);
    }catch(err){
      console.error(err)
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const uploadfile = async () => {
    if (!fileUpload) return;
    const fileFolderref = ref(storage, `toolimg/${fileUpload.name}`);
    const snapshot = await uploadBytes(fileFolderref, fileUpload);
    const downloadURL = await getDownloadURL(snapshot.ref);
    setImageUrl(downloadURL);
  };
  const handle_open_add_new_section = () => {
    if (addNewBookSection) {
      setAddNewBookSection(false);
    } else {
      setAddNewBookSection(true);
    }
  };
  return (
    <div className="dashboard_wrap">
      <div className="dashboard_main_panel">
        <div className="dash_coverimg">
          <img className="dashpanelimg" src={coverimgdash} alt="" />
        </div>
        <div className="dash_panel">
          <h1 className="dashboardheading">DashBoard</h1>
          <div className="dash_card_for_info">
            <div
              className="card_info"
              style={{
                backgroundImage: "linear-gradient(135deg, #63e3dc, #1254c2)",
              }}
            >
              <h3 className="dash_card_data_title">Total Book Avialable: </h3>
              <p className="dash_card_data_result">{numberofitem}</p>
            </div>
            <div
              onClick={handle_open_add_new_section}
              className="card_info"
              style={{
                backgroundImage: "linear-gradient(135deg, #ff49bc, #f0c82b)",
              }}
            >
              <h3 className="dash_card_data_title">Add Books</h3>
            </div>
            {/* <div className="card_info" style={{backgroundColor:"#e7ffac"}}>
              <h3 className="dash_card_data_title">Total Book Avialable: </h3>
              <p className="dash_card_data_result">43</p>
            </div> */}
          </div>
          {addNewBookSection && (
            <div className="inputs_data_book">
              <h1 className="headingcenter">Add Data</h1>
              <div className="upperfour">
                <div className="iteminput">
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title"
                  />
                </div>
                <div className="iteminput">
                  <input
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text"
                    placeholder="Author"
                  />
                </div>
                <div className="iteminput">
                  <input
                    onChange={(e) => setGenres(e.target.value)}
                    type="text"
                    placeholder="Genres"
                  />
                </div>
                <div className="iteminput">
                  <input
                    onChange={(e) => SetContent(e.target.value)}
                    type="text"
                    placeholder="Content"
                  />
                </div>
                {/* <div className="iteminput">
                <label htmlFor="">Avialable</label>
                <input
                  checked={avialabe}
                  type="checkbox"
                  onChange={(e) => setAvialable(e.target.checked)}
                  placeholder="Avialable"
                  />
              </div> */}
              </div>
              <div className="imgupload">
                Image
                <input
                  onChange={(e) => setFileUpload(e.target.files[0])}
                  type="file"
                />
                <button className="upsave" onClick={uploadfile}>
                  Upload file
                </button>
                <button className="save" onClick={onSubmit}>
                  Save
                </button>
              </div>
            </div>
          )}
          <DashboardBoolList />
        </div>
      </div>

      {/* dashborad panel
    <div className="inputs">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
      />
      <input
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="author"
      />
      <input
        onChange={(e) => setGenres(e.target.value)}
        type="text"
        placeholder="genres"
      />
      <div className="iteminput">
          <label htmlFor="">avialabe</label>
          <input
            checked={avialabe}
            type="checkbox"
            onChange={(e) => setAvialable(e.target.checked)}
            placeholder="avialable"
          />
        </div>
      <input
        onChange={(e) => SetContent(e.target.value)}
        type="text"
        placeholder="content"
      />
      <div>
        Image
        <input
          onChange={(e) => setFileUpload(e.target.files[0])}
          type="file"
        />
        <button onClick={uploadfile}>Upload file</button>
      </div>
      <button onClick={onSubmit}>Save</button>
    </div> */}
    </div>
  );
};

export default Dasboardcomponent;
