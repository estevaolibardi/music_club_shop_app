import { Link } from "react-router-dom";
import {
  NavContainer,
  ContainerUpLink,
  ContainerDownLink,
  Div,
} from "./styles";
import ButtonLogin from "../ButtonLogin";
import { useState } from "react";
import ModalLogin from "../ModalLogin";
import { motion } from "framer-motion";
import { FaShopify } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";

const NavBar = ({ open, wrapperFunc, setModalLoginUp, ModalLoginUp }) => {
  return (
    <NavContainer open={open} wrapperFunc={wrapperFunc}>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <ContainerDownLink>
          <div>
            <Link to="/about">
              {" "}
              <FaShopify /> Shop
            </Link>

            <Link to="/contact">
              {" "}
              <FaRegComments /> Social
            </Link>
          </div>
        </ContainerDownLink>
        <ContainerUpLink>
          <div>
            <Div>
              <div onClick={wrapperFunc}>
                {" "}
                <FaMusic /> Cifras
              </div>
            </Div>
            <Link to="/register">
              {" "}
              <FaGuitar /> Aulas
            </Link>
            <Link to="/register">
              {" "}
              <FaRegNewspaper /> Notícias
            </Link>
          </div>
        </ContainerUpLink>
      </motion.ul>
    </NavContainer>
  );
};

export default NavBar;
