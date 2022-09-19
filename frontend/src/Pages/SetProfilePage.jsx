import React, { useContext, useEffect, useState } from "react";
import { Style } from "./SetProfilePageStyle";
import { AiFillPlusCircle } from "react-icons/ai";
import BoxAddSkill from "../components/BoxAddSkill/BoxAddSkill";
import BoxAddEducation from "../components/BoxAddEducation/BoxAddEducation";
import BoxAddProject from "../components/BoxAddProject/BoxAddProject";
import Progess from "../components/Progess";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../container/Footer/Footer";
// import { AuthContext } from '../context/AuthContext'
import * as api from "../api";
import { MdOutlineArrowBack } from "react-icons/md";

const SetProfilePage = () => {
	const {
		formDataState,
		listSkill,
		listEducation,
		handleAddSkill,
		handleAddEducation,
		changeInput,
		listProject,
		handleAddProject,
		updateProfile,
		changeProfile,
	} = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(false);
	// const { authState: isAuthenticated } = useContext(AuthContext)
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("authToken")) {
			return navigate("/login");
		}
		const solve = async () => {
			setIsLoading(true);
			const userData = await api.getProfile(localStorage.getItem("username"));

			changeProfile(userData.data);
			setIsLoading(false);
		};
		solve();
	}, []);
	const handleSubmit = async (event) => {
		event.preventDefault();
		const res = await updateProfile();

		if (res.success) {
			navigate(`/${res.user}`);
		} else {
			alert("Có lỗi ");
		}
	};
	if (isLoading) return <Progess />;
	return (
		<Style>
			{localStorage.getItem("authToken") ? (
				<div className="set-profile">
					<div className="title">
						<MdOutlineArrowBack
							onClick={() => {
								navigate(-1);
							}}
						></MdOutlineArrowBack>
						<h1>Edit Your Profile</h1>
					</div>
					<div className="form">
						<form onSubmit={handleSubmit}>
							<div className="form__control">
								<label htmlFor="name">Tên hiển thị</label>
								<input
									type="text"
									required
									id="name"
									name="name"
									placeholder=" Name"
									value={formDataState.name}
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="job">Công việc</label>
								<input
									type="text"
									required
									id="job"
									name="job"
									value={formDataState.job}
									placeholder="Công việc"
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="description">Giới thiệu bản thân</label>
								<textarea
									type="text"
									required
									rows="4"
									id="description"
									value={formDataState.description}
									name="description"
									placeholder="Giới thiệu bản thân"
									onChange={changeInput}
								></textarea>
							</div>
							<div className="form__control">
								<label htmlFor="linkFb">Link Facebook</label>
								<input
									id="linkFb"
									name="linkFb"
									value={formDataState.linkFb}
									placeholder="Facebook"
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="linkGithub">Link github</label>
								<input
									type="text"
									value={formDataState.linkGithub}
									id="linkGithub"
									name="linkGithub"
									placeholder="Link github"
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="linkTweet">Link Twitter </label>
								<input
									type="text"
									id="linkTweet"
									value={formDataState.linkTweet}
									name="linkTweet"
									placeholder="Twitter "
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="birthday">Ngày sinh</label>
								<input
									type="date"
									required
									id="birthday"
									value={formDataState.birthday}
									name="birthday"
									// placeholder="User Name"
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									required
									value={formDataState.email}
									name="email"
									placeholder="User Email"
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="phone">Số điện thoại</label>
								<input
									type="number"
									required
									id="phone"
									value={formDataState.phone}
									name="phone"
									placeholder="012345678"
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="address">Địa chỉ</label>
								<input
									type="text"
									required
									id="address"
									value={formDataState.address}
									name="address"
									placeholder="Đông Anh, Hà Nội"
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="CV">CV</label>
								<input
									type="file"
									id="CV"
									required={!formDataState.CV}
									// value={formDataState.CV}
									name="CV"
									onChange={changeInput}
								/>
							</div>
							<div className="form__control">
								<label htmlFor="avatar">Ảnh đại diện</label>
								<input
									type="file"
									id="avatar"
									// value={formDataState.avatar}
									required={!formDataState.avatar}
									name="avatar"
									onChange={changeInput}
								/>
							</div>
							<h2>Học tập</h2>
							<div className="form__education">
								{listEducation.map((item) => {
									return <BoxAddEducation data={item} />;
								})}
								<AiFillPlusCircle
									onClick={handleAddEducation}
								></AiFillPlusCircle>
							</div>
							<h2>Kĩ năng</h2>
							<div className="form__education">
								{listSkill.map((item) => {
									return <BoxAddSkill data={item} />;
								})}
								<AiFillPlusCircle onClick={handleAddSkill}></AiFillPlusCircle>
							</div>
							<h2>Project</h2>
							<div className="form__education">
								{listProject.map((item) => {
									return <BoxAddProject data={item} />;
								})}
								<AiFillPlusCircle onClick={handleAddProject}></AiFillPlusCircle>
							</div>
							<button className="beauty">Cập nhật</button>
						</form>
					</div>
				</div>
			) : (
				<div></div>
			)}
			<Footer></Footer>
		</Style>
	);
};

export default SetProfilePage;
