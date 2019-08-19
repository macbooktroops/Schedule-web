import "@babel/polyfill";

import { polyfill } from "es6-promise";
polyfill();

// @ts-ignore
import { LoadPage } from "@Libs/PageLoader";
// @ts-ignore
import Page from "#PagePath";

LoadPage(Page);