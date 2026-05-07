import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";

const handleLogin = () => {
    console.log("Tap en iniciar sesión")
}

const LoginPage = () => {
    return (
        <AuthTemplate
        title ="Login">
            <LoginForm onSubmit={handleLogin}/>
        </AuthTemplate>
    )
}

export default LoginPage;