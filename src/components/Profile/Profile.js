import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {login} from '../../redux/userReducer'
import profileButton from '../../assets/profile_button.png'
import closeIcon from '../../assets/close_icon.png'
import './Profile.scss'

function Profile(props) {
  const [sidebarFull, setSidebarFull] = useState('300px')
  const [sidebarMini, setSidebarMini] = useState('0px')
  const [authVisibility, setAuthVisibility] = useState('hidden')
  const [authBox, setAuthBox] = useState('auth-login')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profileUsername, setProfileUserame] = useState('')
  const [profileEmail, setProfileEmail] = useState('')

  useEffect(() => {
    axios.get('/auth/user').then(user => {
      const {user_name, user_email} = user.data
      props.login(user_name, user_email)
    })
    
    setProfileUserame(props.user_name)
    setProfileEmail(props.user_email)
  }, [props])
  
  const register = () => {
    axios.post('/auth/register', {user_name: username, user_email: email, user_password: password}).then(res => {
      const {user_name, user_email} = res.data
      props.login(user_name, user_email)
    }).catch(() => alert('Email or username already exists'))
  }
  const login = () => {
    axios.post('/auth/login', {user_email: email, user_password: password}).then(res => {
      const {user_name, user_email} = res.data
      props.login(user_name, user_email)
    }).catch(() => alert('Incorrect email or password'))
  }

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
            <p style={{fontSize: '20px'}}>{profileUsername || 'Please login'}</p>
            <p>{profileEmail || ''}</p>
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
                  <input placeholder='Email' onChange={ev => setEmail(ev.target.value)} value={email} ></input>
                  <input placeholder='Password' type='password' onChange={ev => setPassword(ev.target.value)} value={password} ></input>
                  <button onClick={() => {
                    login()
                    setUsername('')
                    setEmail('')
                    setPassword('')
                  }}> Login </button>
                </div>
              :
                <div className={`auth-box ${authVisibility}`}>
                  <input placeholder='Username' onChange={ev => setUsername(ev.target.value)} value={username} ></input>
                  <input placeholder='Email' onChange={ev => setEmail(ev.target.value)} value={email} ></input>
                  <input placeholder='Password' type='password' onChange={ev => setPassword(ev.target.value)} value={password} ></input>
                  <button onClick={() => {
                    register()
                    setUsername('')
                    setEmail('')
                    setPassword('')
                  }} > Create Account </button>
                </div>
            }
          </div>

        {/* my tournaments */}
        <div className='profile-links'>
          <p  className='profile-link-item'
              // onClick={() => {}}
          >My Tournaments</p>
        </div>

      </div>
    </>
  );
}

const mapStateToProps = reduxState => {
  const {user_name, user_email} = reduxState
  return {user_name, user_email}
}

export default connect(mapStateToProps, {login})(Profile);