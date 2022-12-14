import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { leftMove } from "./library/leftMove";
import { opacity } from "./library/opacity";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    },
  ],
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

clip.addIncident(opacity(1,".text",500,"@stagger(0,3000)"),2500);
clip.addIncident(opacity(1,".box:nth-child(1)",1000),1000);
clip.addIncident(leftMove("362px",".box:nth-child(2)",800),6000);
clip.addIncident(leftMove("242px",".box:nth-child(3)",800),6000);
clip.addIncident(leftMove("122px",".box:nth-child(4)",800),6000);
clip.addIncident(leftMove("83%",".box:nth-child(2) .text, .box:nth-child(3) .text, .box:nth-child(4) .text",800),6000);
