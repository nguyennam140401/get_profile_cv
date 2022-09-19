import React, { useContext } from "react";
// import { AiFillPlusCircle } from 'react-icons/ai'
import { UserContext } from "../../context/UserContext";
import { FaTimesCircle } from "react-icons/fa";
const BoxAddProject = ({ data }) => {
	const { changeInforProject, removeProjectItem } = useContext(UserContext);
	return (
		<div className="form__control">
			<input
				type="text"
				value={data.title}
				name="title"
				onChange={(event) => {
					changeInforProject(event, data.id);
				}}
				placeholder="Tên sản phẩm"
			/>
			<input
				type="file"
				// value={data.img}
				required={!data.img}
				name="img"
				onChange={(event) => {
					changeInforProject(event, data.id);
				}}
			/>
			<div className="form__control--detail">
				<h4>Công nghệ</h4>
				<div className="detail__tech">
					{data.tech.map((item) => {
						return <span>{item}</span>;
					})}
				</div>
				<textarea
					type="text"
					value={data.textTech}
					placeholder="Ngôn ngữ, thư viện,... sử dụng"
					name="textTech"
					onChange={(event) => {
						changeInforProject(event, data.id);
					}}
				></textarea>
				<textarea
					type="text"
					rows={3}
					value={data.description}
					name="description"
					onChange={(event) => {
						changeInforProject(event, data.id);
					}}
					placeholder="Giới thiệu sản phẩm"
				/>
				<input
					type="text"
					value={data.link}
					name="link"
					onChange={(event) => {
						changeInforProject(event, data.id);
					}}
					placeholder="Link to project"
				/>
			</div>
			<FaTimesCircle
				onClick={() => {
					removeProjectItem(data.id);
				}}
			></FaTimesCircle>
		</div>
	);
};

export default BoxAddProject;
