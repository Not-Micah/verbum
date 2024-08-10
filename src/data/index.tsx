export interface CharActiveType {
  [key: string]: boolean;
}

/////////////////////////////////////////
export interface Filter2D {
  [key: string]: {
    state: CharActiveType;
    update: StateFunction;
  };
}

/////////////////////////////////////////
export type StateFunction = React.Dispatch<
  React.SetStateAction<CharActiveType>
>;

/////////////////////////////////////////
export const titleCase = (str: string) =>
  str.replace(/\b\S/g, (t) => t.toUpperCase());

/////////////////////////////////////////
export type CheckData = {
  label: string;
  value: string;
};

/////////////////////////////////////////
export const keys =[
  "section",
  "book",
  "topic",
  "context",
  "character",
  "author",
]

export const filterData = {
  "sections": {
    label: "section",
    values: [
      "old", 
      "new"
    ],
    active: {}
  },

  "books": {
    label: "book",
    values: [
      "psalms",
      "proverbs",
      "isaiah",
      "jeremiah",
      "matthew",
      "mark",
      "luke",
      "john",
      "romans",
      "corinthians",
      "philippians",
      "colossians",
      "hebrews",
      "james",
      "revelation",
    ],
    active: {}
  },

  "topics": {
    label: "topic",
    values: [
      "anxiety",
      "betrayal",
      "calling",
      "compassion",
      "courage",
      "depression",
      "faith",
      "fear",
      "forgiveness",
      "generosity",
      "grace",
      "healing",
      "holiness",
      "hope",       
      "humility",
      "joy",
      "justice",
      "loneliness",
      "love",
      "lost",
      "lust",
      "obedience",
      "patience",
      "peace",
      "relationships",
      "salvation",
      "selfishness",
      "sin",
      "strength",
      "suffering",
      "temptation",
      "unity",
      "wisdom"
    ],
    active: {}
  },

  "context": {
    label: "context",
    values: [
      "commandment",
      "song",

      "prophesy",
      "teaching",
      "prayer",
      "promise",
      "story",
    ],
    active: {}
  },

  "characters": {
    label: "character",
    values: [
      "jesus"
    ],
    active: {}
  },

  "authors": {
    label: "author",
    values: [
      "moses",
      "david",
      "solomon",
      "isaiah",
      "jeremiah",
      "paul",
      "james",
      "john",
    ],
    active: {}
  }
};

///////////// Grid Layout ///////////////
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { FiDatabase } from "react-icons/fi";
import { BiBible } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";

export const aboutUs = [
  {icon: <FiDatabase />, title: "Verse Database", description: "Our database has over 300+ verses, selected from books throughout the bible, with numerous filtering capabilities."},
  {icon: <BiBible />, title: "Book Summaries", description: "We also offer summaries for all 66 books of the bible, including the book's topics and themes."},
  {icon: <FaComputer />, title: "AI Chat", description: "Verbum recently added a new AI chat page where users can ask questions about their faith and get responses based of biblicle truth."},
  {icon: <HiOutlineArrowCircleUp />, title: "Up Coming", description: "Verbum is still in development and is adding new features really soon!"}
]

///////////// Service Cards /////////////
import { MdAttachMoney } from "react-icons/md";
import { FaUser, FaHandHoldingHeart } from "react-icons/fa";

export const services = [
  {icon: <MdAttachMoney />, title: "No Paywall", description: "All services on Verbum are completely free. No subscriptions! No paywall!"},
  {icon: <FaUser />, title: "No Accounts", description: "No signup or logins required. Enjoy, the easy and simple access of Verbum!"},
  {icon: <FaHandHoldingHeart />, title: "Infinite Filters", description: "Verbum has no filter limits or restrictions. Unlimited usage for all users!"},
]

//////////////// Callout ////////////////
export const calloutMessage = {title: "We need your help", description: "Verbum is still a work in progress and as our database continues to grow, we'd love your help in finding verses. If you'd like to submit a verse, please click the buttom."}
