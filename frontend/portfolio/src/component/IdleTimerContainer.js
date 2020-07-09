import React, { useRef, useState } from 'react';
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'
import GetUser from './Helpers/GetUser'
import Cookies from 'js-cookie'



const user = GetUser()
Modal.setAppElement('#root')



function IdleTimerContainer(){
    const IdleTimerRef = useRef(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const sessionTimeOutRef = useRef(null)

   
    


    const onIdle =() => {
        setModalIsOpen(true)
        user ? sessionTimeOutRef.current = setTimeout(handleLogout, 5000 * (60 * 5) ): setModalIsOpen(false) 
        
    }

    const stayActive = ()=>{
        setModalIsOpen(false)
        clearTimeout(sessionTimeOutRef.current)
    }

    const handleLogout = () => {
        clearTimeout(sessionTimeOutRef.current)
        localStorage.clear();
        Cookies.remove('JWT')
        window.location = "/signin"
      }
    

    return(<div >
        <Modal isOpen={modalIsOpen} 
          style={{
            overlay: {zIndex:'10000'},
            content: {color: 'black'}
          }}
        
        
        >
            <h2 style={{textAlign:'center'}}>You have been idle for a while</h2>
            <h5 style={{textAlign:'center'}}>You will be logged out soon</h5>
            <div className='idletimer'>
                <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
                <button className="btn btn-secondary" onClick={stayActive} >Keep Me Signed In</button>
            </div>
        </Modal>
        <IdleTimer ref={IdleTimerRef} timeout={1000 * (60 * 15 )  } onIdle={onIdle}></IdleTimer>
        </div>)

}
export default IdleTimerContainer