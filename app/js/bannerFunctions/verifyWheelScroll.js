export function verifyWheelScroll(scrollDeltaY, actualBanner, limit) {  
  if (scrollDeltaY > 0) {
    const newValue = actualBanner === limit - 1 ? 0 : actualBanner + 1;

    return newValue;
  } else if (scrollDeltaY < 0) {
    const newValue = actualBanner === 0 ? limit - 1 : actualBanner - 1;

    return newValue;
  }    
}
