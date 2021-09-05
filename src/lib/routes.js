import Activate from "../components/Public/Activate";
import Welcome from "../components/Public/welcome";
import Login from "../components/Public/Login";
import PasswordRecovery from "../components/Public/PasswordRecovery";
import SignUp from "../components/Public/SignUp";
import Home from "../components/Private/Home";
import Profile from "../components/Private/Profile";
import Search from "../components/Private/Search";
import Timeline from "../components/Private/Timeline";
import Trending from "../components/Private/Trending";
import Tweet from "../components/Private/Tweet";

const routes = {
  unrestricted: [
    { title: "Welcome", path: "/", component: Welcome },
    { title: "Activate", path: "/activate", component: Activate },
    { title: "Login", path: "/login", component: Login },
    {
      title: "PasswordRecovery",
      path: "/passwordRecovery",
      component: PasswordRecovery,
    },
    { title: "SignUp", path: "/signup", component: SignUp },
  ],
  restricted: [
    {
      title: "Timeline",
      path: "/timeline/:username",
      component: Timeline,
    },
    {
      title: "Home",
      path: "/home",
      component: Home,
    },
    {
      title: "Profile",
      path: "/profile",
      component: Profile,
    },
    {
      title: "Tweets",
      path: "/tweets/:id",
      component: Tweet,
    },
    {
      title: "Trending",
      path: "/trending/:topic",
      component: Trending,
    },
    {
      title: "Search",
      path: "/search/results",
      component: Search,
    },
  ],
};

export default routes;
