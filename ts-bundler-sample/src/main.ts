import { hello } from "./lib.js";

const main = () => {
  hello();
}

(window as any).MyApp = { main, hello };