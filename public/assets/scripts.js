const theBody = document.querySelector('body');
const theButton =document.getElementById('hamburger-toggle')

useEffect(() => {
    const toggleOffcanvas = () => { 
        theBody.onclick = function() {
            theBody.classList.toggle('has-offcanvas');
          }
    theButton.addEventListener("click", function(){
        console.log('click');
        toggleOffcanvas
    })      
              
     };
  }, [])    
