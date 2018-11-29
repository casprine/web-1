// importing image sources

import migImg from "../assets/svg/mig.png";
import fdbhImg from "../assets/svg/fdbh.png";
import jesterImg from "../assets/svg/jester.png";
import lunchImg from "../assets/svg/lunch.png";
import avilImg from "../assets/svg/avil.png";
import dropoutImg from "../assets/svg/dropout.png";

const PersonalProjects = [
  {
    id: "1",
    link: "https://github.com/Casprine/mig",
    stacks: ["react", "next.js", "netlify ", "scss "],
    logoUrl: migImg,
    name: "Mig",
    about: "A curated list of awesome tools and projects created by Ghanaians"
  },
  {
    id: "2",
    github: "https://github.com/Casprine/feedback-hunt",
    stacks: ["vue", "mongo ", "scss", "node"],
    logoUrl: fdbhImg,
    name: "FeedbackHunt",
    about:
      "Get customer feedback, in realtime, with absolutely zero hassle. [WIP]"
  },
  {
    id: "3",
    github: "https://github.com/Casprine",
    stacks: ["react", "scss", "node"],
    logoUrl: jesterImg,
    name: "Jester",
    about: "Collection for all your favourite developer books in one place"
  },
  {
    id: "4",
    github: "https://github.com/Casprine",
    stacks: ["html", "css", "gulp "],
    logoUrl: lunchImg,
    name: "Lunch",
    about:
      "A website for a local food delivery system, still work in progress tho"
  },
  {
    id: "5",
    github: "https://github.com/Casprine/Avil",
    stacks: ["html ", "css", "javascript"],
    logoUrl: avilImg,
    name: "Avil",
    about:
      "Get to chrome pages faster with minimium clicks through this extension"
  },
  {
    id: "6",
    github: "https://github.com/gwuah/dropout",
    stacks: ["react ", "figma", "css", "node "],
    logoUrl: dropoutImg,
    name: "Dropout",
    about:
      "A realtime code collaboration project built during figma/github hackathon 2018."
  }
];

export default PersonalProjects;
