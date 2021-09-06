export function manageBanners(bannerWrapper, banners, actualBanner, bannerControls) {
  const gradientPosition = actualBanner === 0 ? 0 : actualBanner * 25;

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
