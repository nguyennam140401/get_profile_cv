import React, { useEffect, useContext, useState } from "react";
import Home from "../container/Home/Home";
import Navigation from "../container/Navigation/Navigation";
import Contact from "../container/Contact/Contact";
import About from "../container/About/About";
import Project from "../container/Project/Project";
import Skills from "../container/Skills/Skills";
import Education from "../container/Education/Education";
import Footer from "../container/Footer/Footer";
import Progess from "../components/Progess";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import * as api from "../api";
const ProfilePage = () => {
	const navigate = useNavigate();
	const params = useParams();
	const { changeProfile } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);
	const eventScroll = () => {
		const listSection = document.querySelectorAll(".section");
		const listAnimation = document.querySelectorAll(".animation");
		if (listSection) {
			listSection.forEach((section) => {
				if (section.getBoundingClientRect().top <= 100) {
					document.querySelector(".nav a.active").classList.remove("active");
					const listLink = document.querySelectorAll(".nav a");
					listLink.forEach((item) => {
						if (
							item.getAttribute("href") ===
							"#" + section.getAttribute("id")
						) {
							item.classList.add("active");
						}
					});
				}
			});
		}
		if (listAnimation) {
			listAnimation.forEach((item) => {
				if (item.getAttribute("data-delay")) {
					let timeDelay = item.getAttribute("data-delay");

					item.style.transitionDelay = timeDelay * 0.1 + "s";
				}
				if (item.getBoundingClientRect().top < window.outerHeight - 150) {
					item.classList.add("animation-start");
				}
			});
		}
	};
	useEffect(() => {
		const solve = async () => {
			setIsLoading(true);
			try {
				const name = params.id || "nguyennam";
				const userData = await api.getProfile(name);
				changeProfile(userData.data);
				setIsLoading(false);
			} catch (error) {
				navigate("/page/404");
				console.log(error);
			}
		};
		solve();
		window.addEventListener("scroll", eventScroll);
		return () => {
			window.removeEventListener("scroll", eventScroll);
		};
	}, []);
	if (isLoading) return <Progess />;
	return (
		<div className="App">
			<Navigation />
			<Home />
			<About />
			<Education />
			<Skills />
			<Project />
			<Contact />
			<Footer></Footer>
		</div>
	);
};

export default ProfilePage;
