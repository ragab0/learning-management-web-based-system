/**
 * a global file:
 * -- used whenever we want to import any asset like
 *    [customers imgs, metnors imgs, svg components imgs,....any file in the asset folder];
 */
import Customer1 from "./customersImgs/cust1.png";
import Customer2 from "./customersImgs/cust2.png";
import Customer3 from "./customersImgs/cust3.png";
import Customer4 from "./customersImgs/cust4.png";
import Customer5 from "./customersImgs/cust5Heigh.png";

import Mentor1 from "./mentorsImgs/mentor1.png";
import Mentor2 from "./mentorsImgs/mentor2.png";
import Mentor3 from "./mentorsImgs/mentor3.png";
import Mentor10 from "./mentorsImgs/mentor10.png";
import Mentor11 from "./mentorsImgs/mentor11.png";

import LogoIcon from "./svgsComps/LogoIcon";
import QuoteIcon from "./svgsComps/QuoteIcon";
import SearchIcon from "./svgsComps/SearchIcon";
import ShoppingIcon from "./svgsComps/ShoppingIcon";
import GoogleIcon from "./svgsComps/GoogleIcon";

import Course1 from "./course1.png";
import Course2 from "./course2.png";
import HomeIntro from "./home-intro.png";
import Login from "./login.png";
import Signup from "./signup.png";
import Heart from "./svgsComps/Heart";
import Notification from "./svgsComps/Notification";

/**
 * exporting the imgs sources that will apply on the src tag inside the <img /> elements;
 * 01 to import: `import {imgsSrcs} from "pathOfThisFolder/thisFileName"`
 * 02 to import: `import {imgsSrcs} from "pathOfThisFolder"` as the fileName is optional while its name is "index.js";
 *
 * && to extract a speicifc imgs of the object:
 * 01 const {Customer1} = imgsSrcs;
 *
 * && to use it:
 * 01 <img src={Customr1} alt="customer-01 img" />
 *
 */

export const imgsSrcs = {
  Customer1,
  Customer2,
  Customer3,
  Customer4,
  Customer5,

  Mentor1,
  Mentor2,
  Mentor3,
  Mentor10,
  Mentor11,

  Course1,
  Course2,
  HomeIntro,
  Login,
  Signup,
};

/**
 * Exporting the components imgs which is JSX-based (react component || .js file returns a markup);
 * && to use it after the import:
 * 01 <LogoIcon myStyleProp1={myValue} ... />
 *
 */

export const imgsComps = {
  HeartIcon: Heart,
  NotificationIcon: Notification,
  LogoIcon,
  QuoteIcon,
  SearchIcon,
  ShoppingIcon,
  GoogleIcon,
};
