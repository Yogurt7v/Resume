particlesJS("background", {
  particles: {
    number: {
      value: 15, // number of particles
      density: {
        enable: true,
        value_area: 300,
      },
    },

    color: {
      value: "#e91e63", // particles color
    },

    shape: {
      type: "triangle", // particles shape
    },

    opacity: {
      value: 0.8,
      random: true,
      anum: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true, //  particles size
      anin: {
        enable: true,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    //Lines

    line_linked: {
      enable: true,
      distance: 150, // max distance between particles
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },

    //Movement

    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
    },
  },

  //Interactive settings

  // interactivity: {
  //   detect_on: "canvas",
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "repulse",
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: "push",
  //     },
  //     resize: true,
  //   },
  // },
});
