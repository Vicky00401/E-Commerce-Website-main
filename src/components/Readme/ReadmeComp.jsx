import * as React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { motion } from "framer-motion";
import { BsExclamation } from "react-icons/bs";
import profilePic from "./profilePic2.1.png";
import Footer from "./Footer";

const ReadmeComponent = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenReadme, setHasSeenReadme] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenReadme");
      if (!hasSeen) {
        setOpen(true);
      }
    }, 3000);
  }, []);

  const handleOpen = () => {
    setHasSeenReadme(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHasSeenReadme(true);
    localStorage.setItem("hasSeenReadme", "true");
  };

  return (
    <>
    <h1>check the github repo</h1>
    <a href=""></a>
         
    </>
  );
};

export default ReadmeComponent;
