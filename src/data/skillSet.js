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

const SkillSetData = [
  {
    id: "1",
    name: "frontend developement",
    description: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
      omnis, debitis consequuntur rem sapiente alias porro`,
    image: Web,
    skills: [
      {
        id: "1",
        imgLink: jsSvg
      },
      {
        id: "2",

        imgLink: reactSvg
      },

      {
        id: "3",

        imgLink: pwaSvg
      },
      {
        id: "4",
        imgLink: vueSvg
      },

      {
        id: "5",

        imgLink: nextSvg
      },
      {
        id: "6",
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
        id: "7",
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
        id: "8",
        imgLink: sketchSvg
      },
      {
        id: "9",
        imgLink: uxpinSvg
      },
      {
        id: "10",
        imgLink: framerSvg
      }
    ]
  }
];

export default SkillSetData;
