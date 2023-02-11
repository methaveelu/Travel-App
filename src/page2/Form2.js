import React, { useState} from 'react';



function Form2(props) {
console.log(props)
  const [Country, setCountry] = useState('');


  const handleSubmit = (e) => {
    console.log('Form - Country', Country);
    e.preventDefault();

    // setCountry(props.Country)
    props.handleSubmit(Country);
    setCountry('');

    // setCategory(props.Category)
    // props.handleSubmit(Category)
    // setCategory('')
  };

  const handleChangeCountry = (e) => {
    console.log('handlecountry clicked');
   
    const country = e.target.value;
    setCountry(country);
  };

  return (
    <>
      <form className='block mt-4 lg:inline-block lg:mt-0 text-red-500' onSubmit={handleSubmit}>
      {/*input label*/}
        <label htmlFor="Country">Country:</label>
        {/*input field*/}
        <>
        <input
          className='m-4 text-black-500'
          id="Country"
          type="text"
          value= {Country}
          onChange={handleChangeCountry}
        />
        </>
        {/*input label*/}
        <label  htmlFor="Category">Category:</label>
        <>
        <input
          className='m-4 text-black-500'
          id="Category"
          type="text"
          value= {props.category}
          readOnly
        />
        </>
        <input  type="submit" value="search" class={Country ? "enabled" : "disabled"}/>{/*search button*/}
        {/*display images of the categories to be selected by user*/}
        <div id="wrapper"> 
              <div id="thumbnails">{props.images}</div>
        </div>
        
        
      </form>
      
    </>
  );
}

export default Form2;
