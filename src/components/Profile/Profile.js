import React, {useState} from 'react';
import profileButton from '../../assets/profile_button.png'
import closeIcon from '../../assets/close_icon.png'
import './Profile.scss'

function Profile(props) {
  const [sidebarFull, setSidebarFull] = useState('300px')
  const [sidebarMini, setSidebarMini] = useState('0px')
  const [authVisibility, setAuthVisibility] = useState('hidden')
  const [authBox, setAuthBox] = useState('auth-login')


  const toggleAuth = () => {
    authVisibility === 'hidden' ? setAuthVisibility('visible') : setAuthVisibility('hidden')
  }
  
  return (
    <>

      {/* sidebar closed */}
      <div className='profile-closed'>
        <img  src={profileButton}
              onClick={() => {
                setSidebarMini('100px')
                setSidebarFull('0px')
              }}
              style={{transform: `translateX(${sidebarMini})`}}
              alt='default profile'/>
        <svg>
          <polygon points='0 0, 40 85, 120 85, 120 0' style={{fill: 'red'}}></polygon>
        </svg>
      </div>
    
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
          <img  src={closeIcon} alt='' 
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
                  setAuthBox('auth-login')
                }}>Login</p>
            <p>-</p>
            <p  className='profile-link-item'
                onClick={() => {
                  toggleAuth()
                  setAuthBox('auth-register')
                }}>Sign Up</p>
          </div>

          <div className={`${authVisibility}`}>
            {authBox === 'auth-login' ?
                <div className={`auth-box ${authVisibility}`}>
                  <input placeholder='Username or Email'></input>
                  <input placeholder='Password' type='password'></input>
                  <button>Login</button>
                </div>
              :
                <div className={`auth-box ${authVisibility}`}>
                  <input placeholder='Username'></input>
                  <input placeholder='Email'></input>
                  <input placeholder='Password' type='password'></input>
                  <button>Create Account</button>
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
          <img alt=''/>
          <p>Mario</p>
        </div>
        <div className='mains'>
          <img alt=''/>
          <p>Yoshi</p>
        </div>

        {/* user stats */}
        <p className='section'>Stats:</p>


      </div>
    </>
  );
}

export default Profile;