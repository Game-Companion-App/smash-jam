import React, {useState} from 'react';
import profile_icon from '../../assets/default_profile_icon.png'
import close_icon from '../../assets/close_icon.png'
import './Profile.css'

function Profile(props) {
  const [sidebarFull, setSidebarFull] = useState('300px')
  const [sidebarMini, setSidebarMini] = useState('0px')
  const [authVisibility, setAuthVisibility] = useState('hidden')
  const [authBox, setAuthBox] = useState('login')


  const toggleAuth = () => {
    authVisibility === 'hidden' ? setAuthVisibility('visible') : setAuthVisibility('hidden')
  }
  
  return (
    <>

      {/* sidebar closed */}
      <img  src={profile_icon}
            onClick={() => {
              setSidebarMini('100px')
              setSidebarFull('0px')
            }}
            style={{transform: `translateX(${sidebarMini})`}}
            alt='default profile'
            className='profile-closed'/>
    
      {/* sidebar open */}
      <div  className='profile-open'
            style={{transform: `translateX(${sidebarFull})`}}>

        {/* profile header */}
        <div className='user-info'>
          <div alt='default profile' className='profile-pic'></div>
          <div>
            <p>Username</p>
            <p>email@email.com</p>
          </div>
          <img  src={close_icon} alt='' 
                className='close-sidebar'
                onClick={() => {
                  setSidebarFull('300px')
                  setSidebarMini('0px')
                }}/>
        </div>

        {/* authentication toggle */}
        <div className='profile-links'>
          <p  className='profile-link-item'
              onClick={() => {
                toggleAuth()
                setAuthBox('login')
              }}>Login</p>
          <p>/</p>
          <p  className='profile-link-item'
              onClick={() => {
                toggleAuth()
                setAuthBox('register')
              }}>Sign Up</p>
        </div>
          <div className={`${authVisibility}`}>
            {authBox === 'login' ?
                <div className={`auth-box login ${authVisibility}`}>
                  <div>Username:</div> <input placeholder='Username or Email'></input>
                  <div>Password:</div> <input placeholder='Password' type='password'></input>
                </div>
              :
                <div className={`auth-box register ${authVisibility}`}>
                  <div>Username:</div> <input placeholder='Username'></input>
                  <div>Email:</div> <input placeholder='Email'></input>
                  <div>Password:</div> <input placeholder='Password' type='password'></input>
                </div>
            }
          </div>

        {/* my tournaments */}
        <div className='profile-links'>
          <p  className='profile-link-item'
              // onClick={() => {}}
          >My Tournaments</p>
        </div>

        {/* main characters */}
        <p className='section'>Main Character(s):</p>
        <div className='mains'>
          <img className='main-pics' alt=''/>
          <p>Mario</p>
        </div>
        <div className='mains'>
          <img className='main-pics' alt=''/>
          <p>Yoshi</p>
        </div>

        {/* user stats */}
        <p className='section'>Stats:</p>


      </div>
    </>
  );
}

export default Profile;