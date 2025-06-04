import InputFields from "../components/InputFields";

function Login() {
    return (
        <main className="h-screen flex items-center justify-center">
            <section className="border p-5 rounded-md">
                <form className="flex flex-col gap-5">
                    <h1 className="text-center text-4xl">Login</h1>
                    <InputFields label="Email" inputId="emailInput" placeholder="example@gmail.com" inputType="text" />
                    <InputFields label="Password" inputId="pwdInput" placeholder="********" inputType="text" />
                    <button type="submit" className="cursor-pointer border">Login</button>
                </form>
            </section>
        </main>
    )
}

export default Login