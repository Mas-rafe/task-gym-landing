"use client";

import { useState } from "react";

const Register = () => {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async () => {
        try {
            const formData = new FormData();

            formData.append("first_name", form.first_name);
            formData.append("last_name", form.last_name);
            formData.append("email", form.email);
            formData.append("password", form.password);
            formData.append("password_confirmation", form.password_confirmation);
            formData.append("terms", "true");

            const res = await fetch(
                "https://apitest.thewarriors.team/api/register",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await res.json();
            console.log(data);

            if (res.ok) {
                alert("OTP sent to your email");
                // NEXT STEP: show OTP input (we'll do next)
            } else {
                alert(data.message || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
            <div className="w-full  max-w-md space-y-4">

                <h1 className="text-3xl font-bold">Register</h1>

                <div className="border-2 bg-white p-4 rounded-3xl">
                    <input name="first_name" placeholder="First Name" onChange={handleChange} className="w-full p-2 text-black" />
                    <input name="last_name" placeholder="Last Name" onChange={handleChange} className="w-full p-2 text-black" />
                    <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 text-black" />
                    <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 text-black" />
                    <input name="password_confirmation" type="password" placeholder="Confirm Password" onChange={handleChange} className="w-full p-2 text-black" />

                    <button
                        onClick={handleRegister}
                        className="w-full bg-[#71AC16] py-2 rounded"
                    >
                        Register
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Register;