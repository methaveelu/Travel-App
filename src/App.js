
import React, { useState, useEffect } from 'react';
import './styles.css';
import styles from './style'
import {travel} from './assets'
import Form from './Form';
import imagesArr from './imagesArr';
import SmallImage from './SmallImage';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";
// import Form2 from './page2/Form2';


const API_KEY = 'AIzaSyBE9lmT7HYtkRazomOgQb6Ga-NFMmQvmno';

//outcome- provide users with video clips of their area of interest and the fight price details for them with their travel plans.
function App() {
//start of with initializing the state of some functional components

  const [smallImage, setSmallImage] = useState(imagesArr[0]);  //  track when 1 of the image is clicked, 
  const [Country, setCountry] = useState([]);            // track and set the country input.
  const [videos, setVideos] = useState([]);                    // whenever a new Country input is submitted, it will extract the video details from the youtube API JSON  .
                                                             
  const [Category, setCategory] = useState("");                 // to monitor state change when diferent category selected


  //Asynchronous code, on the other hand, runs non-blocking. This means that 
  //multiple operations can be performed at the same time, and the program does not have 
  //to wait for one operation to complete before moving on to the next.

  
  //when one of the img is clicked, this will trigger a state change to the smallImage 
  //selected and the category of the image will be insert to the input box.
  const handleImgClick = (appendCategory) => {
    console.log('appendCategory',appendCategory)
    setSmallImage(appendCategory.image); // update the state of which image was clicked
    setCategory(appendCategory.category); // based on the image clicked, function will append the string attached to the image object
    console.log('appendCategory.category',Category)
  }

  // lifting state to allow other component to access the state of handleImgClick var,  image details like URL and category tagged to each image.
  const images = imagesArr.map((image) => (
   
    <SmallImage 
                image= {image.img}
                category={image.category}
                // key ={index}
                handleImgClick = {handleImgClick}    
    />
  ));
//to update the string thats typed on the country input field.
  const handleSubmit = (country) => {
    console.log('App - handleSubmit - title', country);
    setCountry(country);
    // setCategory(category);
  };
   
//Both fetch and axios provide similar functionality, but axios has a few 
//extra features, such as automatic transforming of JSON data - down to personal preference
//////////////////
  useEffect(() => {

    const fetchData = async () => {
      //call the API based on the submitted inputs of COuntry and category
      const result = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${Country}%20${Category}&maxResults=5&order=viewCount&key=${API_KEY}`
      );
      console.log("result", result)
        setVideos(result.data.items); // only extract json data of Vid a setCountry is set.
    };
    fetchData();

  }, [Country]);
///////////////////////

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="flex items-center  justify-between bg-gray-800 p-4 text-xl ">
          <img src={travel} alt="" className="w-[124px] h-[100px]"/>
            <div className="text-white mr-4 no-underline hover:font-extrabold">
                <Link to="/Form">
                <h1>Travel recommendation</h1>
                </Link>
            </div>
            <div className="text-white mr-4 no-underline hover:font-extrabold">
                <Link to ="/Form2">
                <h1>Flight details</h1>
                </Link>
            </div>
          </nav>

        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <main>
          <h1>Homepage</h1>
            <Routes>
                {/*route to the form fields and image selection component*/}
                <Route path="/Form" element={<Form video={videos}category={Category} handleSubmit={handleSubmit} images={images}/>} />
                {/* <Route path="/Form2" element={<Form2 Country={Country}category={Category} handleSubmit={handleSubmit} images={images}/>} /> */}
                
                
            </Routes>

          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
