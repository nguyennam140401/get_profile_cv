const authModel = require("../models/auth.model");
const eduModel = require("../models/edu.model");
const projectModel = require("../models/project.model");
const skillModel = require("../models/skill.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const multer = require("multer");
const { convert } = require("../utils/base64ToFile");
const lang = require("lodash/lang");
const diskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/img");
	},
	filename: (req, file, cb) => {
		let filename = `${Date.now()}-vn-${file.originalname}`;
		cb(null, filename);
	},
});
const upload = multer({ storage: diskStorage });
const cpUpload = upload.fields([
	{ name: "CV", maxCount: 1 },
	{ name: "avatar", maxCount: 1 },
]);
const authController = {
	async createNew(req, res) {
		try {
			const { username, password } = req.body;
			if (!username || !password) {
				return res.status(400).json({
					success: false,
					message: "missing username or password",
				});
			}
			const user = await authModel.findByName(username);

			if (user) {
				return res.status(400).json({
					success: false,
					message: "user name is already in use",
				});
			}
			const hasPassword = await argon2.hash(password);
			const newUser = { username: username, password: hasPassword };
			const result = await authModel.createNew(newUser);
			return res.json({ success: true, result: result });
		} catch (error) {
			console.log(error.message);
			res.status(400).json({ success: false, error: error.message });
		}
	},
	async login(req, res) {
		try {
			const { username, password } = req.body;
			if (!username || !password) {
				return res.status(400).json({
					success: false,
					message: "missing username or password",
				});
			}
			const user = await authModel.findByName(username);
			// console.log(user, 1)
			if (user) {
				const passwordValid = await argon2.verify(user.password, password);
				if (!passwordValid) {
					return res.status(400).json({
						success: false,
						message: "incorrect username or password",
					});
				}
				const acessToken = jwt.sign(
					{ userId: user._id },
					process.env.TOKEN_SECRET
				);
				return res.json({
					success: true,
					message: "Chao mung ban da den voi chung toi",
					user,
					acessToken,
				});
			} else {
				return res.status(400).json({
					success: false,
					message: "incorrect username or password",
				});
			}
		} catch (error) {
			console.log(error.message);
			res.status(400).json({ success: false, error: error.message });
		}
	},
	async getUser(req, res) {
		// console.log(req.body, req.query)
		try {
			let result = await authModel.findByName(req.query.name);
			// console.log(result)
			result.listEdu = await Promise.all(
				result.educations.map(async (item) => {
					let x = await eduModel.findById(item);
					return x;
				})
			);
			result.listSkill = await Promise.all(
				result.skills.map(async (item) => {
					let x = await skillModel.findById(item);
					return x;
				})
			);
			result.listProject = await Promise.all(
				result.projects.map(async (item) => {
					let x = await projectModel.findById(item);
					return x;
				})
			);
			if (result) {
				return res.json({ success: true, data: result });
			} else {
				return res.json({ success: false, message: "user not found" });
			}
		} catch (error) {
			console.log(error.message);
			res.status(400).json({ success: false, error: error.message });
		}
	},

	async setupUser(req, res) {
		const listEdu = lang.cloneDeep(req.body.educations);
		const listSkill = lang.cloneDeep(req.body.skills);
		let listProject = lang.cloneDeep(req.body.project);

		listEdu.forEach((item) => {
			delete item["_id"];
		});
		listSkill.forEach((item) => {
			delete item["_id"];
		});
		listProject.forEach((item) => {
			delete item["_id"];
		});

		listProject = listProject.map((item) => {
			if (item.dataImg) {
				item.img = convert(item.dataImg);
				delete item["dataImg"];
			}
			return item;
		});
		const userObj = lang.cloneDeep(req.body);
		delete userObj["educations"];
		delete userObj["skills"];
		delete userObj["project"];
		try {
			if (!req.body.isNew) {
				const testarr = await Promise.all(
					listEdu.map(async (item) => {
						return await eduModel.changeOne(item);
					})
				);
			}
			const arrEdu =
				listEdu.length !== 0 && (await eduModel.createMany(listEdu));
			const arrSkill =
				listSkill.length !== 0 && (await skillModel.createMany(listSkill));
			const arrProject =
				listProject.length !== 0 &&
				(await projectModel.createMany(listProject));

			userObj["educations"] = Object.values(arrEdu?.insertedIds || {});
			userObj["skills"] = Object.values(arrSkill?.insertedIds || {});
			userObj["projects"] = Object.values(arrProject?.insertedIds || {});
			userObj.isNew = false;
			if (userObj.dataAvatar) {
				userObj.avatar = convert(userObj.dataAvatar);
			}
			if (userObj.dataCV) {
				userObj.CV = convert(userObj.dataCV);
			}
			delete userObj["dataAvatar"];
			delete userObj["dataCV"];
			authModel.updateOne(req.userId, userObj);
			return res.json({
				success: true,
				message: "Updated user successfully",
				user: userObj.username,
			});
		} catch (error) {
			console.log(error.message);
			return res.json({ success: false, message: error.message });
		}
	},
};
module.exports = authController;
