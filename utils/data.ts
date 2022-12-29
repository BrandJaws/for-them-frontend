import { ColorProps, SizeChartProps, TestimonialProps } from "../interfaces";

export const PRODUCTS = [
  {
    handle: 1,
    name: "Women Black Shoes",
    price: "14.99",
    collection: "women",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcohenwoodworking.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fimage-placeholder-500x500.jpg&f=1&nofb=1",
  },
  {
    handle: 2,
    name: "Women Brown Shoes",
    price: "14.99",
    collection: "women",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcohenwoodworking.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fimage-placeholder-500x500.jpg&f=1&nofb=1",
  }
];
export const TESTIMONIALS: Array<TestimonialProps> = [
  {
    name: "Liz",
    description: `“I've cried multiple times just looking in the mirror. I cannot put in to words the gender euphoria I'm experiencing right now.”`,
  },
  {
    name: "Casper",
    description: `“This is a thousand times better than any other binder I've tried, actually comfortable to wear and the sizing from the website was very accurate. This rules.”`,
  },
  {
    name: "Brittany",
    description: `“well 5 stars, 10 out of 10 amazing. this binder feels like it was literally made for me, I haven't taken it off since I got it!”`,
  },
  {
    name: "Alex",
    description: `“My Binder just came in the mail and I'm so freaking happy right now that I'm crying like super hard.”`,
  },
  {
    name: "Alexis",
    description: `“Absolutely amazing. Super comfortable and breathable.”`,
  },
  {
    name: "Alia",
    description: `“It doesn't hurt my ribs to wear! So comfy and I love the color. and it feels really high quality.”`,
  },
  {
    name: "Jordan",
    description: `“Urmmmm, I can breathe! And so glad it's sensory friendly!”`,
  },
  {
    name: "Tuesday",
    description: `“The amount of JOY this brought me is incredible. The first time I came out was tough… knowing y'all care makes everything better.”`,
  }
];
export const COLORS: Array<ColorProps> = [
  {
    hexCode: "#D33F21",
    name: "Orange"
  },
  {
    hexCode: "#151B33",
    name: "Dark Gunmetal"
  },
  {
    hexCode: "#20417B",
    name: "Dark Cornflower Blue"
  },
  {
    hexCode: "#17191B",
    name: "Eerie Black"
  },
  {
    hexCode: "#892866",
    name: "Boysenberry"
  },
  {
    hexCode: "#384033",
    name: "Kombu Green"
  },
  {
    hexCode: "#D7D8D9",
    name: "Light Silver"
  },
  {
    hexCode: "#626467",
    name: "Granite Gray"
  }
]
export const apexChest: Array<string> = [
  "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
  "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51",
  "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63"
]
export const apexSizeChart: Array<SizeChartProps> = [
  {
    code: "Amethyst",
    measurements: ["28", "29", "30"]
  },
  {
    code: "Balance",
    measurements: ["31", "32"]
  },
  {
    code: "Conjur",
    measurements: ["33", "34"]
  },
  {
    code: "Dawn",
    measurements: ["35", "36"]
  },
  {
    code: "Ethereal",
    measurements: ["37", "38", "39"]
  },
  {
    code: "Fire",
    measurements: ["40", "41", "42", "43"]
  },
  {
    code: "Gemini",
    measurements: ["44", "45", "46", "47"]
  },
  {
    code: "Hypnotic",
    measurements: ["48", "49", "50", "51"]
  },
  {
    code: "Illusion",
    measurements: ["52", "53", "54", "55"]
  },
  {
    code: "Jasmine",
    measurements: ["56", "57", "58", "59"]
  },
  {
    code: "Kindred",
    measurements: ["60", "61", "62"]
  },
  {
    code: "Gemini 2.0",
    measurements: []
  }
]
export const FOOTER_DISCOVER_MENU = process.env.FOOTER_DISCOVER_MENU;
export const FOOTER_SHOP_MENU = process.env.FOOTER_SHOP_MENU;
export const FOOTER_CONNECT_MENU = process.env.FOOTER_CONNECT_MENU;



