const ok = ".ok_button";
const start_button = ".start_button";
const start_menu = ".start_menu";
const clock = "#showClock";
const window_one = ".window_one";
const window_two = ".window_two";
const explorer = ".description";
const note_one = ".note_one";
const note_two = ".note_two";
const window_one_x = ".window_one .x";
const window_two_x = ".window_two .x";
const explorer_x = ".description .x";
const computer = ".computer";
const contact = ".contact";
const linkedin = ".pages";
const github = ".code";
const twitter = ".recycle";

export const elemArray = [
  window_one,
  window_two,
  note_one,
  note_two,
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
  $(window_one_x).on("click tap", () => {
    $(window_one).toggleClass("hidden");
  });

  $(window_two_x).on("click tap", () => {
    $(window_two).toggleClass("hidden");
  });

  $(explorer_x).on("click tap", () => {
    $(explorer).toggleClass("hidden");
  });

  $(note_one).on("click tap", () => {
    if ($(window_one).hasClass("hidden")) {
      $(window_one).toggleClass("hidden");

      helpCursor();
    }
  });

  $(note_two).on("click tap", () => {
    if ($(window_two).hasClass("hidden")) {
      $(window_two).toggleClass("hidden");

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
  $(ok).on("click tap", () => {
    $(explorer).fadeOut();
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
