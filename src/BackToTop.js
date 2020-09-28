import React, {useState} from 'react';



const BackToTop = () =>{

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
          <a className="back-to-top" onClick={scrollTop} style={{height: 40, opacity: showScroll ? '1' : '0'}}><i className="fa fa-chevron-up"></i></a> 
           
    );
  }
  
  export default BackToTop;