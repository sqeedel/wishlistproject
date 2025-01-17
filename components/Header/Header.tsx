"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/actions/theme";
import {RootState} from "@/components/store/store"

interface ThemeStates {
    darkMode: boolean;
  }

function Header () {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme);
    const [darkTheme, setDarkTheme] = useState<ThemeStates>({ darkMode: false });
  
    useEffect(() => {
      
      const storedTheme = localStorage.getItem("darkTheme");
      if (storedTheme === "dark") {
        setDarkTheme({ darkMode: true });
      } else {
        setDarkTheme({ darkMode: false });
      }
    }, []); 
  
    
    const themeClass = darkTheme.darkMode || theme.darkMode ? "Dark" : "Light";
    const changeTheme = () => {
        console.log('clicked')
        dispatch(toggle());
    }
    
    return (
       <header>

    
      <ul>
     
        <li>
        <div className="toggleTheme" onClick={changeTheme}>
          {themeClass} Theme
        </div>
        </li>
        <li>
          <Link href="/wishes" className="createList">Создать</Link>
        </li>
        <li>
          <Link href="https://kaspi.kz/shop" className="linkMarketplace">Marketplace</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/sign-in">Login</Link>
        </li>
        <li>
          <Link href="/sign-up">Sign Up</Link>
        </li>
      </ul>
    

       </header>
    )
}

export default Header;