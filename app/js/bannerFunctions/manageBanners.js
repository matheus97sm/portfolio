export function manageBanners(bannerWrapper, banners, actualBanner, bannerControls) {
  const gradientPositionX = actualBanner === 0 ? 0 : actualBanner * 25;
  const gradientPositionY = actualBanner === 0 ? 0 : actualBanner * 25;

  banners.forEach((banner, index) => {
    banner.classList.remove('active');
    banner.classList.add('inactive');
    bannerControls[index].classList.remove('active');

    if (index === actualBanner) {
      bannerControls[index].classList.add('active');

      window.setTimeout(() => {
        banner.classList.remove('inactive');
        banner.classList.add('active');

        bannerWrapper.style.setProperty('background-position', `${gradientPositionY}% ${100 - gradientPositionY}%`);
      }, 3000);
    }
  });
}
