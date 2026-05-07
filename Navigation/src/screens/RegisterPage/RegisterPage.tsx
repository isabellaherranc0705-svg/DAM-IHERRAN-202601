import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";

const handleRegister = () => {
    console.log("Tap en registro")
}

const RegisterPage = () => {
    return (
        <AuthTemplate
        title ="Register"
        subtitle="Create a new account">
            <RegisterForm onSubmit={handleRegister}/>
        </AuthTemplate>
    )
}

export default RegisterPage;