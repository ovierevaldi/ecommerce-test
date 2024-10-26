'use client'

import React, { useState } from 'react'
import LoginPage from '../../components/LoginPage'
import RegisterPage from '../../components/RegisterPage';
import { AuthType } from '@/enum/enums';


export default function AuthPage() {
    const [auth, setAuth] = useState(AuthType.Login);

    function changeAuthType(state: AuthType){
        setAuth(state)
    }

    return (
        <div>
            {auth == AuthType.Login && <LoginPage handleChangeAuth={changeAuthType}></LoginPage>}
            {auth == AuthType.Register && <RegisterPage handleChangeAuth={changeAuthType}></RegisterPage>}
        </div>
    )
}
