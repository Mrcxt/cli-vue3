import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//
import "normalize.css";
import "@/style/root.scss";
import "@/style/reset.scss";

const app = createApp(App);

app.use(store).use(router);

app.mount("#app");
