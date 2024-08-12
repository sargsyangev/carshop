import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CallIcon from "@mui/icons-material/Call";
import CommentIcon from "@mui/icons-material/Comment";
import { Button } from "@mui/material";

function ContactSection() {
  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="h-2/3 w-1/5 flex justify-center items-center text-9xl">
        <AccountBoxIcon fontSize="inherit" color="primary" />
      </div>
      <div className="w-4/5 h-full flex items-center justify-center gap-x-3 max-md:flex-col max-md:justify-center max-md:gap-1">
        <Button
          className="capitalize  w-32 h-10"
          variant="contained"
          startIcon={<CallIcon />}
        >
          Call seller
        </Button>
        <Button
          className="capitalize w-48 h-10"
          variant="contained"
          startIcon={<CommentIcon />}
        >
          Write to the seller
        </Button>
      </div>
    </div>
  );
}

export default ContactSection;
