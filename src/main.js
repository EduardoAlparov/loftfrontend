import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/headermenu";
import "./scripts/parallax";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/feeds";
import "./scripts/forms";
import "./scripts/parallax-feeds";
