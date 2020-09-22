import React, {useState} from 'react';



const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)
  
    return (
          <button className="backTop" onClick={scrollTop} style={{height: 40, opacity: showScroll ? '1' : '0'}}>^</button> 
           
    );
  }
  
  export default ScrollArrow;