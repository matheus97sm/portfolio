export function classControl(projetos, classes, actualProject, textWrapper) {
  projetos.forEach((projeto, index) => {
    projeto.classList.remove(classes[0], classes[1], classes[2]);

    if (!actualProject) {
      if (index === 0) {
        projeto.classList.add(classes[0]);
        textWrapper.innerHTML = projeto.children[1].innerHTML;
      } else if (index === 1)
        projeto.classList.add(classes[1]);
      else
        projeto.classList.add(classes[2]);
    }

    if (!!actualProject) {
      if (index === actualProject) {
        projeto.classList.add(classes[0]);
        textWrapper.innerHTML = projeto.children[1].innerHTML;
      } else if (index === actualProject + 1)
        projeto.classList.add(classes[1]);
      else if (index >= actualProject + 2)
        projeto.classList.add(classes[2]);
    }
  });
}
