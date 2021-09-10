import { verifyWheelScroll } from './bannerFunctions/verifyWheelScroll'
import { manageBanners } from './bannerFunctions/manageBanners'

export default function banner() {
  const homeBanner = document.querySelector('.home-banner');
  const bannersContent = document.querySelectorAll('.home-banner-content');
  const bannerControls = document.querySelectorAll('.banner-control-wrapper');
  const bannerInfo = {
    actualBanner: 0,
    cooldown: true
  };
  
  if (!bannersContent[0]) return;

  if (bannersContent.length === 1) {
    bannersContent[0].classList.remove('inactive');
    bannersContent[0].classList.add('active');
    
    return;
  }

  bannersContent[0].classList.remove('inactive');
  bannersContent[0].classList.add('active');
  bannerControls[0].classList.add('active');

  window.setTimeout(() => {
    bannerInfo.cooldown = false;
  }, 3000);

  if (window.innerWidth > 768) {
    window.addEventListener('mousewheel', e => {
      if (!bannerInfo.cooldown) {
        const newActualBanner = verifyWheelScroll(
          e.deltaY,
          bannerInfo.actualBanner,
          bannersContent.length
        );
        
        bannerInfo.actualBanner = newActualBanner;
        bannerInfo.cooldown = true;
  
        manageBanners(homeBanner, bannersContent, bannerInfo.actualBanner, bannerControls);
    
        window.setTimeout(() => {
          bannerInfo.cooldown = false;
        }, 3000);
      }
    });
  }

  bannerControls.forEach((control, index) => {
    control.addEventListener('click', e => {
      e.preventDefault();

      if (index !== bannerInfo.actualBanner && !bannerInfo.cooldown) {
        bannerInfo.actualBanner = index;
        bannerInfo.cooldown = true;

        manageBanners(homeBanner, bannersContent, bannerInfo.actualBanner, bannerControls);
      
        window.setTimeout(() => {
          bannerInfo.cooldown = false;
        }, 3000);
      }
    });
  });
}
