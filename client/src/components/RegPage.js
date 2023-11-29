"use client"
import React from 'react'
import Reg from '../style/Reg.module.css'

export default function Regpage({ GenRoomId, ConnectionBtnText, setRoom, setEmail, email, room, handleSubmitForm }) {
    return (
        <div className={Reg.main}>
            <div className={Reg.loginbox}>
                <h2>Welcome</h2>
                {GenRoomId && <h2>Room Id : {GenRoomId}</h2>}

                <div className={Reg.userbox}>
                    <input type="text" name="code" id="code" required="" value={room}
                        onChange={(e) => setRoom(e.target.value)} />
                    <label htmlFor="code">Enter Room Code</label>

                </div>

                <button onClick={handleSubmitForm}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {ConnectionBtnText}
                </button>
            </div>
        </div>

    )
}