import React from 'react'
import './style.css'
import coverimg from '../../../Assets/books-g813188cd4_1920.jpg'
import grassimg from '../../../Assets/pexels-neosiam-4498792.jpg'
const index = ({ data }) => {
    return (
        <div className='Detail_data_of_book_wrap'>
            <div className="cover">
                <img className='coverimg_detailPage' loading='_priority' src={grassimg} alt="" />
            </div>
            <div className="data">
                <div className="dataleft">

                    <img className='bookimg_detailPage' src={data.imageUrl} alt="" />
                    <div className="getbook_wrap">
                        <h2>Buy This Book</h2>
                    </div>
                    <div className="getbook_wrapsec">
                        <h2>Download Now</h2>
                    </div>
                </div>
                <div className="dataright">
                    <div className="book_detail">

                        <h1 className='title_data'>{data.title}</h1>
                        <h3 className='author_data'>{data.author}</h3>
                        <p className='Content_data'>{data.content}</p>
                        <p className='geners'>Genre : <span className='genreslist'>
                            {data.genres}
                        </span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
