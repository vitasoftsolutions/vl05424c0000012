import { Panzoom } from "@fancyapps/ui/dist/panzoom/panzoom.esm.js";
import "@fancyapps/ui/dist/panzoom/panzoom.css";

import { Toolbar } from "@fancyapps/ui/dist/panzoom/panzoom.toolbar.esm.js";
import "@fancyapps/ui/dist/panzoom/panzoom.toolbar.css";

const container = document.getElementById("myPanzoom");
const options = {
  click: "toggleCover",
  Toolbar: {
    display: ["zoomIn", "zoomOut"],
  },
};

new Panzoom(container, options, { Toolbar });
