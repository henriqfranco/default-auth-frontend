import InputFields from "../components/InputFields";
import { MdLogin } from "react-icons/md";

function Login() {
    return (
        <main className="h-screen flex items-center justify-center">
            <section className="border p-5 rounded-md">
                <form className="flex flex-col gap-5 items-center">
                    <h1 className="text-center text-4xl">Login</h1>
                    <InputFields label="Email" inputId="emailInput" placeholder="example@gmail.com" inputType="text" />
                    <InputFields label="Password" inputId="pwdInput" placeholder="********" inputType="text" />
                    <button type="submit" className="cursor-pointer border flex items-center w-fit px-5 py-2 rounded-md hover:text-black hover:bg-white transition-all"><MdLogin />Login</button>
                </form>
            </section>
        </main>
    )
}

export default Login