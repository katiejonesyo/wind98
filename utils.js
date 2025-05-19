const ok = ".ok_button";
const start_button = ".start_button";
const start_menu = ".start_menu";
const clock = "#showClock";
const window_one = ".window_one";
const window_two = ".window_two";
const window_three = ".window_three";
const window_four = ".window_four";
const explorer = ".description";
const note_one = ".note_one";
const note_two = ".note_two";
const note_three = ".note_three";
const portfolio = ".portfolio";
const note_four = ".note_four";
const window_one_x = ".window_one .x";
const window_three_x = ".window_three .x";
const window_four_x = ".window_four .x";
const explorer_x = ".description .x";
const computer = ".computer";
const contact = ".contact";
const linkedin = ".pages";
const github = ".code";
const twitter = ".recycle";

export const elemArray = [
  window_one,
  window_two,
  window_three,
  window_four,
  note_one,
  note_two,
  note_three,
  note_four,
  explorer,
  contact,
  computer,
  linkedin,
  github,
  twitter,
];

const draggableOptions = {
  cssEaseDuration: 0,
  deferPlacement: true,
  place: false,
  elementsWithInteraction: elemArray.map((elem) => $(elem)),
  startClass: "no_click",
  disableSelect: false,
};

export const helpCursor = () => {
  $("*").toggleClass("loading");
  setTimeout(() => {
    $("*").toggleClass("loading");
  }, 100);
};

export const makeDraggable = (elemArray) => {
  return elemArray.map((elem) => $(elem).pep(draggableOptions));
};

export const toggleHidden = () => {
  $(window_one_x).on("pointerup", () => {
    $(window_one).toggleClass("hidden");
  });

  $(window_three_x).on("pointerup", () => {
    $(window_three).toggleClass("hidden");
  });

  $(window_four_x).on("pointerup", () => {
    $(window_four).toggleClass("hidden");
  });

  $(explorer_x).on("pointerup", () => {
    $(explorer).toggleClass("hidden");
  });

  $(note_one).on("pointerup", () => {
    if ($(window_one).hasClass("hidden")) {
      $(window_one).toggleClass("hidden");
      helpCursor();
    }
  });
  
  
  $(portfolio).on("pointerup", () => {
    if ($(window_three).hasClass("hidden")) {
      $(window_three).toggleClass("hidden");
      helpCursor();
    }
  });

  $(note_four).on("pointerup", () => {
    if ($(window_four).hasClass("hidden")) {
      $(window_four).toggleClass("hidden");
      helpCursor();
    }
  });
};


export const toggleStart = () => {
  $(start_button).on("click", (e) => {
    $(start_button).toggleClass("sb_click");
    $(start_menu).slideToggle();
  });

  $(start_menu).on("mouseleave", () => {
    $(start_button).toggleClass("sb_click");
    $(start_menu).slideToggle();
  });
};

export const toggleNote = () => {
  if ($(window).width() < 500) {
    window.setTimeout(() => $(note_one).fadeIn().toggleClass("hidden"), 1200);
  } else $(note_one).toggleClass("hidden");
};

export const openPopup = () => {
  $(explorer).fadeIn().toggleClass("hidden");
};


export const closePopup = () => {
  $(ok).on("pointerup", () => {
    console.log("OK clicked");
    $(".description").css({
      display: "none",
      zIndex: 1
    });
  });
};


export const updateClock = () => {
  const date = new Date();
  let mins = date.getMinutes();
  let hrs = date.getHours();
  let ext = "AM";

  if (hrs >= 12) {
    ext = "PM";
    if (hrs !== 12) {
      hrs = hrs - parseInt(12);
    }
  } else if (hrs < 10) {
    ext = "AM";
    hrs = "0" + hrs;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }
  const currentTime = hrs + ":" + mins + " " + ext;
  $(clock).html(currentTime);
};

export const scoutLoader = () => {
  if (window._rcs) {
    const link = `.${window._rcs.inst.prefix}__link`;
    $(link).attr({
      target: "_blank",
      rel: "noopener noreferrer",
    });
  }
};


$(document).ready(function() {
  // Toggle the media-details window on button click
  $('.media-link-button').click(function() {
      $('.window.media-details').toggle();
  });

  // Close the media-details window when clicking the 'x'
  $('.window.media-details .x').click(function() {
      $('.window.media-details').hide();
  });

  // Close the media-details when clicking outside the div
  $(document).mouseup(function(e) {
      var container = $(".window.media-details");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.hide();
      }
  });
});

$('.media-link-button').click(function() {
  console.log("Button clicked");
  $('.window.media-details').toggle();
});
