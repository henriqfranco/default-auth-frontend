import InputFields from "../components/InputFields";
import { GrUserNew } from "react-icons/gr";

function Register() {
    return (
        <main className="h-screen flex items-center justify-center">
            <section className="border p-5 rounded-md">
                <form className="flex flex-col gap-5 items-center">
                    <h1 className="text-center text-4xl">Register</h1>
                    <InputFields label="Username" inputId="usernameInput" placeholder="johnnylenny" inputType="text" />
                    <InputFields label="Email" inputId="emailInput" placeholder="example@gmail.com" inputType="text" />
                    <InputFields label="Password" inputId="pwdInput" placeholder="********" inputType="text" />
                    <InputFields label="First Name" inputId="firstNameInput" placeholder="John" inputType="text" />
                    <InputFields label="Last Name" inputId="lastNameInput" placeholder="Lennon" inputType="text" />
                    <p className="text-sm text-left w-full">Already have an account?</p>
                    <button type="submit" className="cursor-pointer border flex items-center w-fit px-5 py-2 rounded-md hover:text-black hover:bg-white transition-all"><GrUserNew />Register</button>
                </form>
            </section>
        </main>
    )
}

export default Register