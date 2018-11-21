import Mobile from "../assets/svg/mobile.svg";
import Web from "../assets/svg/web.svg";
import Product from "../assets/svg/product.svg";
import jsSvg from "../assets/svg/js.svg";
import reactSvg from "../assets/svg/react.svg";
import pwaSvg from "../assets/svg/pwa.png";
import vueSvg from "../assets/svg/vue.png";
import nextSvg from "../assets/svg/next.png";
import sassSvg from "../assets/svg/sass.png";
import sketchSvg from "../assets/svg/sketch.svg";
import uxpinSvg from "../assets/svg/uxpin.png";
import framerSvg from "../assets/svg/framer.png";
import reactNativeSvg from "../assets/svg/react-native.png";

const skillSetData = [
  {
    id: "1",
    name: "frontend developement",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
      omnis, debitis consequuntur rem sapiente alias porro`,
    image: Web,
    skills: [
      {
        imgLink: jsSvg
      },
      {
        imgLink: reactSvg
      },

      {
        imgLink: pwaSvg
      },
      {
        imgLink: vueSvg
      },

      {
        imgLink: nextSvg
      },
      {
        imgLink: sassSvg
      }
    ]
  },

  {
    id: "2",
    name: "Mobile App Design",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
      omnis, debitis consequuntur rem sapiente alias porro`,
    image: Mobile,
    skills: [
      {
        imgLink: reactNativeSvg
      }
    ]
  },
  {
    id: "3",
    name: "Product Design",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
      omnis, debitis consequuntur rem sapiente alias porro`,
    image: Product,
    skills: [
      {
        imgLink: sketchSvg
      },
      {
        imgLink: uxpinSvg
      },
      {
        imgLink: framerSvg
      }
    ]
  }
];

export default skillSetData;
