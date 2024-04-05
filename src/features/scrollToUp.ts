export const scrollToUp = (behavior: 'auto' | 'instant' | 'smooth') => {
  window.scrollTo({ top: 0, behavior: behavior });
};
