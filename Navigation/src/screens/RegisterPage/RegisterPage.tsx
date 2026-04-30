import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";

const RegisterPage = () => {
    return (
        <AuthTemplate
        title ="Register"
        subtitle="Create a new account">
            <LoginForm/>
        </AuthTemplate>
    )
}

export default RegisterPage;