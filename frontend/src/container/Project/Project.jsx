import React, { useContext, useLayoutEffect } from "react";

import { Style } from "./ProjectStyle";

import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { UserContext } from "../../context/UserContext";
const Project = () => {
	const { listProject } = useContext(UserContext);
	useLayoutEffect(() => {
		const listProject = document.querySelectorAll(".project__container--item");
		listProject.forEach((item) => {
			item.addEventListener("click", () => {
				if (!item.classList.contains("active")) {
					item.classList.add("active");
				}
			});
		});
	}, [listProject]);

	return (
		<Style>
			<div className="section project" id="project">
				<div className="project__title">Project</div>
				<div className="project__container">
					{listProject.map((item, idx) => {
						return <ProjectItem data={item} key={idx} pos={idx} />;
					})}
				</div>
			</div>
		</Style>
	);
};

export default Project;
