import React from 'react'
// import Axios from 'axios'
import {
    Button,
    
} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import './home.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
   render () {
       return(
           <div>
                <div class="header">
                    <img className='image' src="logo.png" alt="" />
                    <div >
                            <Button className='btn-header'href="/login" variant="outline">Artikel</Button>
                            <Button className='btn-header' href="/sylabus" variant="outline">Program Pendidikan</Button>
                            <Button className='btn-header' href="/login" variant="outline">Donasi</Button>
                            <Button className='btn-header' href="/patner" variant="outline">Join Patner</Button>
                    </div>
                </div>
                <div className='div-1'>
                    <div className='div-1a'>
                        <div style={{ color:'#0F2C67', fontSize:'50px', fontWeight:'bold', marginBottom:'1.5rem', width:'20vw'}}>Belajar dimanapun, Kapanpun.</div>
                        <p>Temukan materi yang tepat untuk mengasah skill yang kamu miliki</p>
                        <div className='btn-regis'>
                            <Button variant="warning" style={{color:'white', width:'13vw', borderRadius:'10px'}}>Register</Button>
                            <Button variant="outline-secondary" style={{color:'#0F2C67', width:'13vw',borderRadius:'10px' }}>Card Event</Button>
                        </div>
                    </div>
                    <img className='div-1b' src="foto2.png" alt="" />
                </div>
                
           </div>
       )
   }
}

export default HomePage