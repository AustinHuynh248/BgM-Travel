// Side Menu
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

// SlideBar
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 700,
  transition: 500,
  interval: 6000,
});

// Autocomplete
const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac, {
  data: {
    VietNam: null,
    Saigon: null,
    HaNoi: null,
    Tokyo: null,
    DaNang: null,
    Hawaii: null,
    Kyoto: null,
    Incheon: null,
    Busan: null,
    Beijing: null,
  },
});

// Material Boxed
const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

// Sroll Spy
const ss = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(ss, {});

//
