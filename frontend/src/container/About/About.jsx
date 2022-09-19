import React, { useContext } from "react";
// import AboutImg from '../../assets/images/about.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Style } from "./AboutStyle";
// import CV from '../../assets/CV_My_CV.pdf'
import { FiDownload } from "react-icons/fi";
import { UserContext } from "../../context/UserContext";
import dotenv from "dotenv";
dotenv.config();
const About = () => {
	const { formDataState } = useContext(UserContext);
	const uri = process.env.REACT_APP_URI_API || "http://localhost:5000";
	return (
		<Style>
			<div className="section about" id="about">
				<div className="about__title">About</div>
				<div className="about__container">
					<div className="about__container--img animation animation-left">
						<img src={`${uri}/${formDataState.avatar}`} alt="Avatar" />
					</div>
					<div className="about__container--infor animation animation-right">
						<h2>Một số thông tin về mình</h2>
						<p className="infor-item">
							<span>
								<MdKeyboardArrowRight /> Birthday:
							</span>{" "}
							{formDataState.birthday}
						</p>
						<p className="infor-item">
							<span>
								<MdKeyboardArrowRight /> Phone:
							</span>{" "}
							{formDataState.phone}
						</p>
						<p className="infor-item">
							<span>
								<MdKeyboardArrowRight /> Email:
							</span>{" "}
							{formDataState.email}
						</p>
						<p className="infor-item">
							<span>
								<MdKeyboardArrowRight /> Address:
							</span>{" "}
							{formDataState.address}
						</p>
						<div className="infor-cv">
							<a
								// href={CV}
								href={`${uri}/${formDataState.CV}`}
								download
								target="_blank"
								rel="noreferrer"
							>
								<button className="beauty">
									Dowload CV <FiDownload></FiDownload>
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Style>
	);
};

export default About;
