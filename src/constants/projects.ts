import { CardDetailTypes } from "../interface/cardDetailTypes";
const portfolio = require('../assets/portfolio.png')
const subreddit = require('../assets/subreddit.png')
const xnft = require('../assets/xnft.png')
const btc = require('../assets/btc.png')
const buidl = require('../assets/buidl.png')

export const projects: CardDetailTypes[] = [
  {
    name: "Portfolio",
    img: `${portfolio}`,
    description: "Reactjs, Typescript, CSS Tailwind",
    github: "https://github.com/Joeet33/portfolio"
  },
  {
    name: "Subreddit list",
    img: `${subreddit}`,
    description: "Angular 14+, Typescript, CSS Tailwind",
    github:"https://github.com/Joeet33/pagesuite-test"
  },
  {
    name: "XNFT Application",
    img: `${xnft}`,
    description: "Decentralised application made for mobile wallet. Using React xNFT, Typescript, CSS",
    github:"https://github.com/Joeet33/xnft_hadeswap"
  },
  {
    name: "BTC prediction game",
    img: `${btc}`,
    description: "Nextjs, Typescript, CSS Tailwind",
    github:"https://github.com/Joeet33/BTC-guess-V2"
  },
  {
    name: "Buidl - web3 application",
    img: `${buidl}`,
    description: "Reactjs, Typescript, CSS Tailwind",
    github:"https://github.com/Joeet33/PortfolioWeb3"
  },
];
