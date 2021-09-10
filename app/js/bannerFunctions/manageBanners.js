import { moveCamera } from '../moon';

export function manageBanners(bannerWrapper, banners, actualBanner, bannerControls) {
  const gradientPosition = actualBanner === 0 ? 0 : actualBanner * 25;

  if (actualBanner === 0) {
    window.setTimeout(() => moveCamera(false), 1000)
  } else {
    moveCamera(true);
  }

  banners.forEach((banner, index) => {
    banner.classList.remove('active');
    banner.classList.add('inactive');
    bannerControls[index].classList.remove('active');

    if (index === actualBanner) {
      bannerControls[index].classList.add('active');

      window.setTimeout(() => {
        banner.classList.remove('inactive');
        banner.classList.add('active');

        bannerWrapper.style.setProperty('background-position', `${gradientPosition}% ${100 - gradientPosition}%`);
      }, 3000);
    }
  });
}
