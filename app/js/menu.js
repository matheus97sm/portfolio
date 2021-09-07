const headerCursorControl = [
  {
    selector: '.header-logo',
    cursor: 'pointer'
  },
  {
    selector: '.header-midias a',
    cursor: 'pointer'
  },
  {
    selector: '.menu-hamb',
    cursor: 'pointer'
  },
  {
    selector: '.header .container',
    cursor: 'default'
  }
]

export default function openMenu() {
  const menuHamb = document.querySelector('[data-menu="button"]');
  const menu = document.querySelector('[data-menu="menu"]');
  const mouseDot = document.querySelector('.mouse-dot');
  const menuOptions = document.querySelectorAll('.menu ul a');
  const menuInfo = {
    hideCursor: false
  }

  if (!menuHamb || !menu) return null;

  menuOptions.forEach((menuOption, index) => {
    menuOption.style.setProperty('transition-delay', `${1.5 + (.3 * index)}s`)
  });

  menuHamb.addEventListener('click', e => {
    e.preventDefault();

    menu.classList.toggle('active');
    menuHamb.classList.toggle('active');
    mouseDot.classList.toggle('active');

    menuInfo.hideCursor = !menuInfo.hideCursor;

    hideCursor(headerCursorControl, menuInfo.hideCursor);
  });

  window.addEventListener('mousemove', e => {
    mouseDot.style.setProperty('left', `${e.clientX}px`);
    mouseDot.style.setProperty('top', `${e.clientY}px`);
  });
}

function hideCursor(targets, hide) {
  targets.forEach(target => {
    const nodeTargets = document.querySelectorAll(target.selector);

    nodeTargets.forEach(nodeTarget => {
      if (!!hide) {
        nodeTarget.style.setProperty('cursor', 'none');
      } else {
        nodeTarget.style.setProperty('cursor', target.cursor);
      }
    });
  });
}
