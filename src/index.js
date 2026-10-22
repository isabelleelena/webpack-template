import "./styles.css";
import { greet } from "./greet";

document.querySelector("#app").textContent = greet("webpack");
