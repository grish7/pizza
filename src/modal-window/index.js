import './index.css'; 
import {SELECTOR} from '../constants';
import {pickActiveNodes}  from '../pickActiveNodes';



export const prepareWindowModal = () => {    

  const ingredientsList = [];
  const activeNodes = pickActiveNodes();    
  activeNodes.forEach(item => ingredientsList.push(item.innerText));
    
  
  const totalIngredients = ingredientsList.join(',') || 'нет ингредиентов'; 
  const totalText = `Вы заказали пиццу с ингредиентами: `;  
  const totalText2 = `${totalIngredients}`;
  const totalText3 = `итого: ${SELECTOR.modalWindowSum.innerHTML}`;



  SELECTOR.ingredientsForModalWindow.appendChild(SELECTOR.$newNodeForWindowModal);   
  SELECTOR.subject.innerHTML = totalText;
  SELECTOR.ingredientsForModalWindow.innerHTML = totalText2;
  SELECTOR.modalWindowSum.innerHTML = totalText3;
}
