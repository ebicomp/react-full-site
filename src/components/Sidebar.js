import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const isShown = true;
  return (
    <SidebarContainer>
      <aside className={`sidebar ${isShown ? "show-sidebar" : ""}`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="comfySloth" />
          <button className="close-btn">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(link => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a src={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background: white;
    transition: var(--transition);
    transform: translate(-100%);
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 10;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    .close-btn {
      background: transparent;
      border: transparent;
      font-size: 2rem;
      color: var(--clr-red-dark);
      transition: var(--transition);
      cursor: pointer;
    }
    .close-btn:hover {
      color: var(--clr-red-light);
    }
  }

  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    a {
      text-align: left;
      padding: 1rem;
      display: block;
      color: var(--clr-grey-2);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      color: var(--clr-grey-3);
      cursor: pointer;
      :hover {
        padding: 1rem 2rem;
        background: var(--clr-grey-10);
        color: var(--clr-grey-2);
      }
    }
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
