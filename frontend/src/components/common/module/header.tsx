'use client';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { parseCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { destroyCookie, parseCookies } from 'nookies';
import { useDispatch } from 'react-redux';
import { json } from 'stream/consumers';


const pages = ['카운터','게시판목록','게시글목록', '사용자목록'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [showProfile, setShowProfile] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  

  useEffect(()=>{
    console.log('헤더 useeffect 쿠키 : ' + parseCookies().accessToken)
    if(parseCookies().accessToken){
      setShowProfile(true)
    }else{
      setShowProfile(false)
    }
  },[parseCookies().accessToken])


  return (<>
  </>)
  }
export default Header;