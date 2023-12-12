import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https:www.matthewfrucht.com", // replace this with your deployed domain
  author: "Matthew Frucht",
  desc: "My personal website",
  title: "Matthew Frucht",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/matthewfrucht/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/mfrucht/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
