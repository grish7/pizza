
import './index.css'; 
import {prepareWindowModal}  from './modal-window';
import {SELECTOR} from './constants';
import {pickActiveNodes}  from './pickActiveNodes';
import { showPictures } from './image';




export const calculateOrder = () => {

  const activeNodes = pickActiveNodes(); 
  const activeNodesArray = Array.from(activeNodes);
  const totalAmountn = activeNodesArray.map(item => (item.querySelector('.cost')).innerHTML).reduce((sum,item) => sum + +item,0);
  SELECTOR.modalWindowSum .innerHTML = `${totalAmountn} ${' '}$`;
}






const checkIngredients = () => {  

  const handleClick = (event) => {      
    event.target.classList.add('active');     
    const type = event.target.dataset.type;       
    createLinkBetweenImageAndColumn(type);  
    calculateOrder(); 
  }



  SELECTOR.ingredients.forEach(item => {
    item.addEventListener('click', handleClick);
  })




  let arrayForElem = [];

function createLinkBetweenImageAndColumn  (elem) {
    switch (elem){
      case 'col-1':
            addClassNone(SELECTOR.ingredientsfromOneCol);      
            showPictures();
            break;
    
      case 'col-2':
            arrayForElem.push(elem);     
            if(arrayForElem.length === 2){        
              addClassNone(SELECTOR.ingredientsfromTwoCol);  
              showPictures();
              arrayForElem = [];
            };
            break;
    
      case 'col-3':
            arrayForElem.push(elem);      
            if(arrayForElem.length === 2){        
              addClassNone(SELECTOR.ingredientsfromThreeCol);        
              showPictures();
              arrayForElem = [];
            };        
            break;
    
      case 'col-4':
            addClassNone(SELECTOR.ingredientsfromFourCol);    
            showPictures();  
            break;
    
      default:      
    }

    function  addClassNone  (nodeList) {    
      nodeList.forEach(item => item.classList.add('nnone'));
    }
  }
}

checkIngredients();




SELECTOR.basketBtn.addEventListener('click', () => {
  SELECTOR.modalWindow.classList.remove('none');
  prepareWindowModal();
})

SELECTOR.makeOrderBtn.addEventListener('click',() => {    
  SELECTOR.modalWindow.classList.add('none'); 
  deleteOrder();   
  SELECTOR.makeOrderBtn.disabled = true;
})

SELECTOR.closeModalWindowBtn.addEventListener('click',() => {
  SELECTOR.modalWindow.classList.add('none');  
  deleteOrder();   
})





const removeClassActive = () => {
  const activeNodes = pickActiveNodes();
  activeNodes.forEach(item => item.classList.remove('active'));
}


const deleteOrder = () => {
  SELECTOR.subject.innerHTML = '';
  SELECTOR.ingredientsForModalWindow.innerHTML = '';
  SELECTOR.modalWindowSum.innerHTML = 0;   
  SELECTOR.ingredients.forEach(item => item.classList.remove('nnone'));
  SELECTOR.image.forEach(item => item.classList.add('none'));  
  removeClassActive();
}





