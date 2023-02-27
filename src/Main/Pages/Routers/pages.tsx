import { RoutesString } from "../../Modules/routesString";
import PageErr from "../404/PageErr";
import Home from "../Home/Home";
import Details from "../Details/Details";

const pages = [
  {
    path: RoutesString.PageNotFound,
    component: PageErr,
    exact: true,
  },

  /* Home */
  {
    path: RoutesString.Home,
    component: Home,
    exact: true,
  },

  /* Details */
  {
    path: RoutesString.Details,
    component: Details,
    exact: true,
  },
];

export default pages;
