import {
    makeDraggable,
    toggleHidden,
    toggleStart,
    updateClock,
    closePopup,
    elemArray,
    openPopup,
    scoutLoader,
    toggleNote,
  } from "./utils.js";
  
  $(document).ready(() => {
    makeDraggable(elemArray);
  
    toggleNote();
  
    window.setTimeout(scoutLoader, 1000);
  
    window.setTimeout(openPopup, 1000);
    closePopup();
  
    toggleStart();
  
    toggleHidden();
  
    window.setInterval(updateClock, 6000);
    updateClock();
  });

  