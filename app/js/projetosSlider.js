import { classControl } from './projetosFunctions/classControl';

export default function projetosSlider() {
  const projetos = document.querySelectorAll('.projetos-item');
  const controls = document.querySelectorAll('.banner-projetos-controls button')
  const projetoText = document.querySelector('.banner-projetos-text');
  const projetoInfo = {
    actualProject: 0,
    classes: ['first', 'second', 'third']
  };

  if (!projetos[0]) return null;

  classControl(projetos, projetoInfo.classes, null, projetoText);

  controls.forEach((control, index) => {
    control.addEventListener('click', e => {
      if (index === 0) {
        const newActualProject = projetoInfo.actualProject === 0 ? projetoInfo.actualProject : projetoInfo.actualProject - 1;

        projetoInfo.actualProject = newActualProject;

        classControl(projetos, projetoInfo.classes, projetoInfo.actualProject, projetoText);
      } else {
        const newActualProject = projetoInfo.actualProject === projetos.length - 1 ? projetoInfo.actualProject : projetoInfo.actualProject + 1;

        projetoInfo.actualProject = newActualProject;

        classControl(projetos, projetoInfo.classes, projetoInfo.actualProject, projetoText);
      }
    });
  });
}
