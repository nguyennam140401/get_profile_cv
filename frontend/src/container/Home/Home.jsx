import React, { useContext } from 'react'
import { Style } from './HomeStyle'
// import Avatar from '../../assets/images/avatar.jpg'
import { TiArrowRightOutline } from 'react-icons/ti'
import { FiFacebook, FiGithub } from 'react-icons/fi'
import { UserContext } from '../../context/UserContext'
import dotenv from 'dotenv'
dotenv.config()
const Home = () => {
    const { formDataState } = useContext(UserContext)
    const uri = process.env.REACT_APP_URI_API || 'http://localhost:5000'
    return (
        <Style>
            <div className="section home" id="home">
                <div className="home__img">
                    <img src={`${uri}/${formDataState.avatar}`} alt="Avatar" />
                </div>
                <div className="home__content">
                    <h2 className="home__content--title">
                        Xin chào , mình là {formDataState.name}
                    </h2>
                    <p className="home__content--job">{formDataState.job}</p>
                    <p className="home__content--text">
                        {formDataState.description}
                    </p>
                    <div className="home__content--link">
                        <a
                            href={
                                formDataState.linkFb.indexOf('http://') === -1
                                    ? `http://${formDataState.linkFb}`
                                    : formDataState.linkFb
                            }
                        >
                            <FiFacebook></FiFacebook>
                        </a>
                        <a
                            href={
                                formDataState.linkGithub.indexOf('http://') ===
                                -1
                                    ? `http://${formDataState.linkGithub}`
                                    : formDataState.linkGithub
                            }
                        >
                            <FiGithub></FiGithub>
                        </a>
                    </div>
                    <div className="home__content--button">
                        <a href="#about">
                            <button className="beauty">
                                Read more{' '}
                                <TiArrowRightOutline></TiArrowRightOutline>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default Home
