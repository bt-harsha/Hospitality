import React from 'react'

const Dropdown = ({ city,initial,index,setShow,setIndex,show}) => {
    const handleShow = () => {
        setShow(!show);
    }
    const handleIndex = (index) => {
        setIndex(index);
        setShow(!show);
    }
   return (
      <div class="dropdown">
           <h6>{initial && index === -1 ? initial : city[index]}</h6>
          <i class="far fa-arrow-down" onClick={handleShow}></i>
          {show ? (
    <div class="dropdown-content">
              <ul>
                  {city.map((item, index) => (
                      <li key={index} onClick={() => handleIndex(index)}>{item}</li> 
                  ))}
                 
     </ul>
    </div>): null}
</div>
  )
}

export default Dropdown