"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	
	const handleBack = () => {
		window.location.href = "/";
	};
	return (
		<>
			<div> <section> {/* form open */} <div className="form"> {/* heading open */} <div className="heading"> <h3> Hi! Let's know you! <span>Register your account.</span> </h3> </div> {/* heading close */} {/* inputBox open */} <div className="inputBox"> <label htmlFor="name">Name</label> <input type="text" placeholder="For ex.  Mashiur Rahman" id="name" required /> </div> {/* inputBox close */} {/* inputBox open */} <div className="inputBox"> <label htmlFor="emailid">Email</label> <input type="email" placeholder="For ex. mashiur@gmail.com" required /> </div> {/* inputBox close */} {/* inputBox open */} <div className="inputBox"> <label htmlFor="username">Username</label> <input type="text" placeholder="For ex. s4mashiur" id="username" required /> </div> {/* inputBox close */} {/* inputBox open */} <div className="inputBox"> <label htmlFor="password">Password</label> <input type="password" placeholder="Minimum 8 characters" required /> </div> {/* inputBox close */} {/* inputBox open */} <div className="clientLogin"> <span> Or Continue with </span> <img src="images/google.png" alt="google" /> <a href="https://www.linkedin.com/in/s4mashiur" target="_blank"> <img src="images/linkedin.png" alt="facebook" /> </a> </div> {/* inputBox close */} {/* inputBox open */} <div className="inputBox"> <button>Register</button> </div> {/* inputBox close */} </div> {/* form close */} </section> <style dangerouslySetInnerHTML={{__html: "html {\n font-size: 20px;\n}\n\n* {\n margin: 0;\n padding: 0;\n box-sizing: border-box;\n font-family: \"Poppins\", sans-serif;\n}\n\nbody {\n background-color: #080710;\n}\n\nsection {\n display: flex;\n justify-content: center;\n align-items: center;\n min-height: 100vh;\n padding: 20px;\n width: 100%;\n background-color: #080710;\n}\n\nsection::before {\n content: \"\";\n position: absolute;\n width: 200px;\n height: 200px;\n background: linear-gradient(to right, #ff512f, #f09819);\n\n border-radius: 50%;\n transform: translate(-9.5rem, -17.5rem);\n}\n\nsection::after {\n content: \"\";\n position: absolute;\n width: 200px;\n height: 200px;\n background: linear-gradient(to right, #e100ff, #fd99f8);\n border-radius: 50%;\n transform: translate(9.5rem, 17.9rem);\n}\n\n.form {\n padding: 50px 35px;\n position: relative;\n z-index: 1;\n width: 100%;\n max-width: 450px;\n background: rgba(255, 255, 255, 0.07);\n border: 2px solid rgba(255, 255, 255, 0.1);\n box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);\n backdrop-filter: blur(10px);\n border-radius: 10px;\n overflow: hidden;\n color: #ffffff;\n letter-spacing: 0.5px;\n}\n\n.heading {\n font-size: 32px;\n font-weight: 500;\n line-height: 42px;\n}\n\n.heading h3 span {\n display: block;\n font-size: 19px;\n font-weight: 300;\n color: #e5e5e5;\n}\n\nlabel {\n display: block;\n margin-top: 30px;\n font-size: 16px;\n font-weight: 500;\n}\n\ninput {\n display: block;\n border: none;\n height: 50px;\n width: 100%;\n color: #e5e5e5;\n background-color: rgba(255, 255, 255, 0.07);\n border-radius: 3px;\n padding: 0 10px;\n margin-top: 5px;\n font-size: 14px;\n font-weight: 300;\n}\n\n::placeholder {\n color: #e5e5e5;\n}\n\n.clientLogin {\n display: flex;\n justify-content: center;\n align-items: center;\n margin-top: 15px;\n margin-bottom: 15px;\n}\n\n.clientLogin span {\n margin-right: 10px;\n font-size: 16px;\n}\na > img,\nimg {\n display: flex;\n width: 50px;\n margin: 20px 10px;\n cursor: pointer;\n}\nbutton {\n border: none;\n width: 100%;\n background-color: #ffffff;\n color: #080710;\n padding: 15px 0;\n font-size: 18px;\n font-weight: 600;\n border-radius: 5px;\n cursor: pointer;\n}\n\n/* Developed with love by  Mashiur Rahman */" }} /> </div>

					
		</>
	);
}
