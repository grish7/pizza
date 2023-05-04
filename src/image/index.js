import './index.css'; 
import {SELECTOR} from '../constants';


  let numberOfPicture = 1;

export const showPictures =  ()=> {

  let nodeWithPictuter = document.querySelector('.picture-1');
  
  switch(numberOfPicture) {
      case 1:              
        nodeWithPictuter.classList.remove('none')        
        numberOfPicture = 2;        
        break;

      case 2:
        nodeWithPictuter = document.querySelector('.picture-2');
        nodeWithPictuter.classList.remove('none')        
        numberOfPicture = 3;        
        break;

      case 3:
        nodeWithPictuter = document.querySelector('.picture-3');
        nodeWithPictuter.classList.remove('none')
        numberOfPicture = 4;    
        break;

      case 4:
        nodeWithPictuter = document.querySelector('.picture-4');
        nodeWithPictuter.classList.remove('none')
        SELECTOR.makeOrderBtn.disabled = false;
        numberOfPicture = 1;
        break;
      
      default:      
    } 
}
