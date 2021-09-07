import { createImg } from './imgControl' 

export function controlClass(elements, actualElement, parentElement) {
  elements.forEach((element, index) => {
    element.classList.remove('active');

    if (index === actualElement) {
      element.classList.add('active');

      createImg(element.dataset.imgLink, parentElement);
    }      
  });
}
