export function createImg(src, parentElement) {
  clearParentElement(parentElement);

  const img = document.createElement('img');

  img.setAttribute('src', src);

  parentElement.appendChild(img);
}

function clearParentElement(parentElement) {
  parentElement.innerHTML = '';
}
