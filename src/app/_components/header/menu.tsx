import Link from "next/link";
import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import GavelIcon from "@mui/icons-material/Gavel";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

function Menu({ isLogined }: { isLogined: boolean }) {
  return (
    <div>
      {isLogined === true ? (
        <Link
          href="/login"
          className=" w-full h-20 flex items-center pl-4 cursor-pointer bg-gray-100 hover:opacity-50"
        >
          <AccountBoxIcon sx={{ fontSize: "64px" }} color="primary" />
          <p className=" text-3xl">Sign In</p>
        </Link>
      ) : (
        <></>
      )}
      <div className="mt-2 w-full h-72 flex flex-col">
        <Link href="/dealers" className="menu-item">
          <DirectionsCarFilledIcon fontSize="large" color="primary" />
          <p className=" text-base ml-2">Dealers</p>
        </Link>
        <Link href="/advertisement" className="menu-item">
          <AddModeratorIcon fontSize="large" color="primary" />
          <p className=" text-base ml-2">Advertisement</p>
        </Link>
        <Link href="/rules" className="menu-item">
          <GavelIcon fontSize="large" color="primary" />
          <p className=" text-base ml-2">Terms of Use</p>
        </Link>
        <Link href="/help" className="menu-item">
          <HelpCenterIcon fontSize="large" color="primary" />
          <p className=" text-base ml-2">Help</p>
        </Link>
        <Link href="/contact" className="menu-item">
          <ContactPhoneIcon fontSize="large" color="primary" />
          <p className=" text-base ml-2">Contact</p>
        </Link>
      </div>
      <div className="w-full h-12 flex pl-4 mt-10 border-b border-b-gray-200">
        <Link href="https://www.facebook.com" target="_blank">
          <FacebookIcon
            fontSize="large"
            color="primary"
            sx={{ cursor: "pointer" }}
          />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <InstagramIcon
            fontSize="large"
            color="error"
            sx={{ marginLeft: "4px", cursor: "pointer" }}
          />
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <TwitterIcon
            fontSize="large"
            color="primary"
            sx={{ marginLeft: "4px", cursor: "pointer" }}
          />
        </Link>
        <Link href="https://web.telegram.org/" target="_blank">
          <TelegramIcon
            fontSize="large"
            color="primary"
            sx={{ marginLeft: "4px", cursor: "pointer" }}
          />
        </Link>
        <Link href="https://www.linkedin.com/" target="_blank">
          <LinkedInIcon
            fontSize="large"
            color="primary"
            sx={{ marginLeft: "4px", cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="w-full h-8 mt-6 pl-4 text-xs border-b border-b-gray-200 mr-11">
        <p>©2024 CarShop | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Menu;
