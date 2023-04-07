import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTable, isiTablemhs, isiTabledsn } from "./controller/get.js";
import { urlAPI, urlAPIdsn, urlAPImhs } from "./config/url.js";
get(urlAPI, isiTable);
get(urlAPImhs, isiTablemhs);
get(urlAPIdsn, isiTabledsn);
