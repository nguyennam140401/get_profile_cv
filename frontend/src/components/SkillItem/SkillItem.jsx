import React from 'react'
import { RiPagesLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
const SkillItem = ({ data, pos }) => {
    // const show = (el) => {
    //     el.classList.toggle('active')

    // }
    // useEffect(() => {
    //     item.addEventListener('click', show(el))
    //     return () => {
    //         cleanup
    //     }
    // }, [])
    return (
        <div
            className="skill__container--item animation animation-top"
            data-delay={`${pos}`}
        >
            <div className="icon">
                <RiPagesLine></RiPagesLine>
            </div>
            <div className="infor">
                <div className="infor__title">
                    <h3>{data.title}</h3>
                    <p>{data.time}</p>
                </div>
                <div className="infor__detail">
                    {data.detail.map((item, idx) => {
                        return (
                            <div key={idx} className="infor__detail--item">
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="option">
                <MdKeyboardArrowDown></MdKeyboardArrowDown>
            </div>
        </div>
    )
}

export default SkillItem
