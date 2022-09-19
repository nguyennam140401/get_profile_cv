import React, { useContext } from 'react'
import { Style } from './EducationStyle'
// import { MdOutlineSchool } from 'react-icons/md'
import EduItem from '../../components/Edu/EduItem'
import { UserContext } from '../../context/UserContext'
const Education = () => {
    // const [eduState] = useState([
    //     {
    //         work: 'Information Technology',
    //         location: 'Hanoi university of Industry',
    //         icon: MdOutlineSchool,
    //         timeStart: '2019',
    //         timeEnd: 'Nay',
    //     },

    // ])
    const { listEducation } = useContext(UserContext)

    return (
        <Style>
            <div className="section education" id="education">
                <div className="education__title">Education</div>
                <div className="education__data">
                    {listEducation &&
                        listEducation.map((item, idx) => {
                            return <EduItem key={idx} pos={idx} data={item} />
                        })}
                </div>
            </div>
        </Style>
    )
}

export default Education
