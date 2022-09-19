import React from "react";
import dotenv from "dotenv";
dotenv.config();
const ProjectItem = ({ data, pos }) => {
	const uri = process.env.REACT_APP_URI_API || "http://localhost:5000";
	const hiddenDetail = () => {
		document
			.querySelector(".project__container--item.active")
			.classList.remove("active");
	};
	return (
		<div
			className="project__container--item animation animation-top"
			data-delay={`${pos}`}
		>
			<div className="item__img">
				<img src={`${uri}/${data.img}`} alt="Weather App" />
			</div>
			<h4 className="item__title">{data.title}</h4>
			<div className="item__infor" onClick={hiddenDetail}>
				<div
					className="contain"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="contain__infor--title">
						<span>Name:</span> {data.name}
					</div>
					<div className="contain__infor--tech">
						<div className="tech__item">
							<h3>Giới thiệu</h3>
							<div className="tool">{data.description}</div>
						</div>
						<div className="tech__item">
							<h3>Công Nghệ</h3>
							{data.tech.map((item, idx) => {
								return (
									<div key={idx} className="tool">
										{item}
									</div>
								);
							})}
							{/* <div className="tool">ReactJS</div> */}
						</div>
					</div>
					<div className="contain__infor--link">
						<a
							target="_blank"
							href={
								data.link.indexOf("http") === -1
									? `http://${data.link}`
									: data.link
							}
						>
							<button className="beauty">Xem Chi Tiết</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
