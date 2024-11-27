import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import convo1 from "./pages/convo1.vue";
import convo2 from "./pages/convo2.vue";
import convo3 from "./pages/convo3.vue";
import Dialogue from "./pages/Dialogue.vue";
import WelcomeScreen from "./pages/WelcomeScreen.vue";
import RevisedLeaderboardPage from "./pages/RevisedLeaderboardPage.vue";
import Bear from "./pages/Bear.vue";
import DiceRoll from "./pages/DiceRoll.vue";
import Choppy from "./pages/Choppy.vue";
import Convo from "./pages/Convo.vue";
import Bull from "./pages/Bull.vue";
import FlipCoinHeads from "./pages/FlipCoinHeads.vue";
import Stats from "./pages/Stats.vue";
import Quest from "./pages/Quest.vue";
import Referral from "./pages/Referral.vue";
import ConnectWallet from "./pages/ConnectWallet.vue";
import "./global.css";
import "./global2.css";
import "./global3.css";


interface Route {
  path: string;
  name: string;
  component: any;
}

const routes: Route[] = [
  {
    path: "/",
    name: "WelcomeScreen",
    component: WelcomeScreen,
  },
  {
    path: "/convo1",
    name: "convo1",
    component: convo1,
  },
  {
    path: "/convo2",
    name: "convo2",
    component: convo2,
  },
  {
    path: "/convo3",
    name: "convo3",
    component: convo3,
  },
  {
    path: "/dialogue",
    name: "Dialogue",
    component: Dialogue,
  },
  {
    path: "/bear",
    name: "Bear",
    component: Bear,
  },
  {
    path: "/diceroll",
    name: "DiceRoll",
    component: DiceRoll,
  },
  {
    path: "/choppy",
    name: "Choppy",
    component: Choppy,
  },
  {
    path: "/convo5",
    name: "Convo",
    component: Convo,
  },
  {
    path: "/bull",
    name: "Bull",
    component: Bull,
  },
  {
    path: "/flipcoinheads",
    name: "FlipCoinHeads",
    component: FlipCoinHeads,
  },
  {
    path: "/optimalstrategist",
    name: "Stats",
    component: Stats,
  },
  {
    path: "/referral",
    name: "Referral",
    component: Referral,
  },
  {
    path: "/leaderboard",
    name: "RevisedLeaderboardPage",
    component: RevisedLeaderboardPage,
  },
  {
    path: "/connectwallet",
    name: "ConnectWallet",
    component: ConnectWallet,
  },
  {
    path: "/quest",
    name: "Quest",
    component: Quest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title as string;
  const metaDesc = toRoute?.meta?.description as string;

  window.document.title = metaTitle || "ODR";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value: string) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;
