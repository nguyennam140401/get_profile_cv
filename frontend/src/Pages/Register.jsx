// import React from 'react'
import { Style } from "./LoginStyle";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../api";
import Progess from "../components/Progess";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik, Field } from "formik";
const Login = () => {
	const [formDataState, setFormDataState] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});
	const formSchema = yup.object().shape({
		username: yup.string().required("Không được để trống trường này"),
		password: yup.string().required("Không được để trống trường này"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password")], "Mật khẩu không khớp ")
			.required("Không được để trống trường này"),
	});
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const changeInput = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		setFormDataState({ ...formDataState, [field]: value });
	};
	const handleRegister = async (data) => {
		// console.log(e);
		// e.preventDefault();
		setIsLoading(true);
		const res = await register(data);
		if (res.success) {
			alert("Bạn đã đăng kí thành công");
			navigate("/login");
		}
		setIsLoading(false);
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
						onSubmit={handleRegister}
					>
						{({ errors, touched, handleSubmit }) => {
							console.log(errors);
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
											<label htmlFor="confirmPassword">Confirm Password</label>
											<Field name="confirmPassword" type="password" />
											{touched.confirmPassword && errors.confirmPassword && (
												<p className="error">{errors.confirmPassword}</p>
											)}
										</div>

										<div className="form__control">
											<button className="beauty" onClick={handleSubmit}>
												Register
											</button>
										</div>
										<p>
											Bạn đã có tài khoản?{" "}
											<Link to="/login">Đăng nhập ngay</Link>
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
