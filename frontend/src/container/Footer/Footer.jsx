import React, { useContext } from "react";
import { Style } from "./FooterStyle";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
const Footer = () => {
	const {
		logout,
		authState: { isAuthenticated },
	} = useContext(AuthContext);
	return (
		<Style>
			<div className="footer">
				Made by Nguyễn Văn Nam
				{isAuthenticated ? (
					<div className="footer_option">
						<Link to="/setProfile">Chỉnh sửa tài khoản</Link>
						<div onClick={logout}>Logout</div>
					</div>
				) : (
					<Link to="/login" className="footer_option">
						Tạo tài khoản cho riêng mình ?
					</Link>
				)}
			</div>
		</Style>
	);
};

export default Footer;
