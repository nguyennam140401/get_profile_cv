import React, { useContext, useState } from "react";
import { Style } from "./LoginStyle";
import { Link } from "react-router-dom";
import Progess from "../components/Progess";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import * as api from "../api";
import { Field, Formik } from "formik";
import * as yup from "yup";
const Login = () => {
	const [formDataState, setFormDataStatee] = useState({
		username: "",
		password: "",
	});
	const formSchema = yup.object().shape({
		username: yup.string().required("Không được để trống trường này"),
		password: yup.string().required("Không được để trống trường này"),
	});
	const [isLoading, setIsLoading] = useState(false);
	const {
		login,
		authState: { isAuthenticated },
	} = useContext(AuthContext);
	const { changeProfile } = useContext(UserContext);
	useContext(UserContext);
	const navigate = useNavigate();
	const changeInput = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		setFormDataStatee({ ...formDataState, [field]: value });
	};
	if (isAuthenticated) {
		navigate("/");
	}
	const handleLogin = async (data) => {
		// e.preventDefault();
		setIsLoading(true);
		const res = await login(data);
		setIsLoading(false);
		if (res.success) {
			const userData = await api.getProfile(res.user.username);

			changeProfile(userData.data);
			alert("Đăng nhập thành công");
			if (res.user.isNew) {
				navigate("/setProfile");
			} else {
				navigate(`/${userData.data.username}`);
			}
		} else {
			alert("Đăng nhập thất bại");
		}

		return function cleanup() {};
	};
	return (
		<Style>
			<div className="login">
				<div className="title">Hello</div>
				{isLoading && <Progess />}
				<div className="form">
					<Formik
						initialValues={formDataState}
						validationSchema={formSchema}
						onSubmit={handleLogin}
					>
						{({ errors, touched, handleSubmit }) => {
							return (
								<>
									<form>
										<div className="form__control">
											<label htmlFor="username">Your Name</label>
											<Field name="username" />
											{touched.username && errors.username && (
												<p className="error">{errors.username}</p>
											)}
										</div>
										<div className="form__control">
											<label htmlFor="password">Your Password</label>
											<Field name="password" type="password" />
											{touched.password && errors.password && (
												<p className="error">{errors.password}</p>
											)}
										</div>

										<div className="form__control">
											<button className="beauty" onClick={handleSubmit}>
												Login
											</button>
										</div>
										<p>
											Bạn chưa có tài khoản?{" "}
											<Link to="/register">Đăng ký ngay</Link>
										</p>
									</form>
								</>
							);
						}}
					</Formik>
				</div>
			</div>
		</Style>
	);
};

export default Login;
