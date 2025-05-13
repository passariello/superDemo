/*
Copyright: © 2022 Dario Passariello <dariopassariello@gmail.com>
License: MIT
*/

dphelper.disable.select('#SuperDemo')
// // SET CUSTOM SCROLLBAR
dphelper.scrollbar.custom(
  '*',
  {
    color_1: "gray",
    color_1_hover: "black",
    color_2: "transparent",
    color_3: "rgba(30,150,255,.5)",
    type: "thin",
    behavior: "smooth",
    width: "8px",
    height: "8px",
    rounded: "25px"
  }
)

document.querySelector('body').style['fontSmooth'] = 'auto'
