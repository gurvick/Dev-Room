import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { logout } from './features/userSlice'

function Header() {
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='http://r67.cooltext.com/d.php?renderid=373529807142997&extension=png'
          alt=''
        />

        <div className='header__search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />
      </div>
    </div>
  )
}

export default Header
