"use client";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import { Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DealerLogo from "../../../../public/carDealer.jpg";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Drawer from "@mui/material/Drawer";

import { useState } from "react";
import Menu from "./menu";

function Header() {
  const [isLogined, setIsLogined] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean): void => {
    setOpen(isOpen);
  };

  return (
    <header className=" w-4/5 h-16 fixed z-1000 bg-white opacity-95 shadow flex justify-between items-center rounded-b-lg">
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
       <Menu isLogined ={isLogined} />
      </Drawer>
      <div className=" w-1/2 h-full flex items-center justify-between max-md:w-full">
        <div
          className="w-[10%] h-full hidden cursor-pointer max-md:block"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon fontSize="large" sx={{ margin: "25%" }} />
        </div>
          <Link href="/" className="w-36 h-full relative">
            <Image
              src={Logo}
              alt="logo"
              fill
              priority
              style={{
                objectFit: "cover",
              }}
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        <div className="w-[60%] h-full flex justify-center items-center max-lg:hidden">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
            fullWidth
            size="small"
            label="mark, model, year"
            variant="outlined"
          />
        </div>
      </div>

      <div className="h-full w-auto max-md:hidden flex items-center justify-between mr-2">
        <div className=" h-2/3 w-14 cursor-pointer  flex justify-center items-center relative border-r border-r-blue-300 ">
          <FavoriteBorderIcon fontSize="large" color="primary" />
        </div>
        <Link
          href="/dealers"
          className=" h-2/3 w-14 flex justify-center items-center relative border-r border-r-blue-300 "
        >
          <Image
            priority
            style={{ objectFit: "cover" }}
            fill
            src={DealerLogo}
            alt="DealerLogo"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <Link
          href="/messages"
          className=" h-2/3 w-14 flex justify-center items-center border-r border-r-blue-300 "
        >
          <CommentIcon fontSize="large" color="primary" />
        </Link>
        {isLogined ? (
          <div className="h-2/3 w-20 flex justify-center items-center text-5xl">
            <AccountBoxIcon fontSize="inherit" color="primary" />
          </div>
        ) : (
          <div className="w-1/2 h-full flex justify-center items-center">
            <Link href="/sign-in">
              <Button variant="text" sx={{ width: "80px", height: "36px" }}>
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                variant="outlined"
                sx={{ width: "100px", height: "36px" }}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        )}

        <Link
          href="/sell"
          className="h-2/3 w-40 flex justify-center items-center border-l border-l-blue-300"
        >
          <Button variant="contained" sx={{ width: "110px", height: "36px" }}>
            Sell
          </Button>
        </Link>
        <div className=" h-2/3 w-14 cursor-pointer  flex justify-center items-center border-l border-l-blue-300 max-lg:hidden">
          {<LightModeIcon color="primary" /> || <NightlightIcon />}
        </div>
      </div>
    </header>
  );
}

export default Header;
