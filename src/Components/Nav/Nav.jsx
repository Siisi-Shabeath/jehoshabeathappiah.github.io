import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {MdOutlineMessage} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
      <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active':''}><AiOutlineUser/></a>
      <a href='#Experience' onClick={() => setActiveNav('#Experience')}className={activeNav === '#Experience' ? 'active': ''}><BiBook/></a>
      <a href='#Skills' onClick={() => setActiveNav('#Skills')}className={activeNav === '#Skills' ? 'active': ''}><GiSkills/></a>
      <a href='#Portfolio' onClick={() => setActiveNav('#Portfolio')}className={activeNav === '#Portfolio' ? 'active': ''}><VscFolderLibrary/></a>
      <a href='#Contact' onClick={() => setActiveNav('#Contact')}className={activeNav === '#Contact' ? 'active': ''}><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav