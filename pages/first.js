import Head from 'next/head'
import React, { useEffect } from 'react'
import style from '../styles/User.module.css'

const first = () => {
    return (
        <div>
            <Head>
                <title>Dushyant first</title>
            </Head>
            <form method='post' action='/api/hello' onSubmit={(e) => {
                e.preventDefault()
            }} className={`${style.form} ${style.container}`}>
                <label htmlFor='user'>Name</label>
                <input type='text' id='user' name='username' placeholder='email' />
                <br />
                <input type='password' name='password' placeholder='password' />
                <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default first