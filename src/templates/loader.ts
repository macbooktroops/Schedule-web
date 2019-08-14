import "@babel/polyfill";

import { polyfill } from "es6-promise";
polyfill();

// @ts-ignore
import { LoadPage } from "@Libs/PageLoader";
// @ts-ignore
import { Routes } from "#RoutesPath";

LoadPage(Routes);