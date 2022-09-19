import { createContext, useState } from 'react'
import lang from 'lodash/lang'
import { setupProfile } from '../api'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [formDataState, setFormDataState] = useState({
        name: '',
        job: '',
        description: '',
        address: '',
        linkFb: '',
        linkGithub: '',
        linkTweet: '',
        linkYouTube: '',
        birthday: '',
        phone: '',
        email: '',
        CV: '',
        avatar: '',
        dataCV: '',
        dataAvatar: '',
    })
    const [listEducation, setListEducation] = useState([])
    const [listSkill, setListSkill] = useState([])
    const [listProject, setListProject] = useState([])
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = (error) => reject(error)
        })
    const changeInput = (e) => {
        const field = e.target.name
        const value = e.target.value
        if (field === 'CV') {
            toBase64(e.target.files[0]).then((data) => {
                setFormDataState({
                    ...formDataState,
                    [field]: value,
                    dataCV: data,
                })
                return
            })
        }
        if (field === 'avatar') {
            toBase64(e.target.files[0]).then((data) => {
                // item.dataAvatar = data
                setFormDataState({
                    ...formDataState,
                    [field]: value,
                    dataAvatar: data,
                })
                return
            })
        }
        setFormDataState({ ...formDataState, [field]: value })
    }

    const generateID = function () {
        return Math.random().toString(36).substr(2, 9)
    }
    const handleAddEducation = () => {
        const eduItem = {
            id: generateID(),
            title: '',
            timeStart: null,
            timeEnd: null,
        }
        setListEducation([...listEducation, eduItem])
    }
    const changeInforEducation = (event, id) => {
        const field = event.target.name
        const value = event.target.value
        let newList = lang.cloneDeep(listEducation)
        newList = newList.map((item) => {
            return item.id === id ? { ...item, [field]: value } : item
        })

        setListEducation(newList)
    }
    const handleAddSkill = () => {
        const skillItem = {
            id: generateID(),
            title: '',
            time: null,
            detail: [],
            textDetail: '',
        }
        setListSkill([...listSkill, skillItem])
    }

    const handleAddProject = () => {
        const projectItem = {
            id: generateID(),
            title: '',
            img: '',
            dataImg: '',
            description: '',
            tech: [],
            textTech: '',
            link: '',
        }
        setListProject([...listProject, projectItem])
    }

    const changeInforProject = async (event, id) => {
        const field = event.target.name
        const value = event.target.value
        let newList = lang.cloneDeep(listProject)
        newList = newList.map((item) => {
            if (item.id === id) {
                item = { ...item, [field]: value }
                item.tech = item.textTech.trim().split(',')
                if (field === 'img') {
                    toBase64(event.target.files[0]).then((data) => {
                        item.dataImg = data
                    })
                }
            }
            return item
        })

        setListProject(newList)
    }
    const changeInforSkill = (event, id) => {
        const field = event.target.name
        const value = event.target.value
        let newList = lang.cloneDeep(listSkill)
        newList = newList.map((item) => {
            if (item.id === id) {
                item = { ...item, [field]: value }

                item.detail = item.textDetail.trim().split(',')
            }
            return item
        })
        setListSkill(newList)
    }

    const removeProjectItem = (id) => {
        let newList = lang.cloneDeep(listProject)
        newList.forEach((item, idx) => {
            if (item.id === id) {
                newList.splice(idx, 1)
            }
        })

        setListProject(newList)
    }
    const removeSkillItem = (id) => {
        let newList = lang.cloneDeep(listSkill)
        newList.forEach((item, idx) => {
            if (item.id === id) {
                newList.splice(idx, 1)
            }
        })

        setListSkill(newList)
    }
    const removeEduItem = (id) => {
        let newList = lang.cloneDeep(listEducation)
        newList.forEach((item, idx) => {
            if (item.id === id) {
                newList.splice(idx, 1)
            }
        })

        setListEducation(newList)
    }
    const updateProfile = async () => {
        const userInfor = {
            ...formDataState,
            skills: [...listSkill],
            educations: [...listEducation],
            project: [...listProject],
        }

        const result = await setupProfile(userInfor)

        return result
    }
    const changeProfile = (data) => {
        setFormDataState({ ...data })
        setListSkill(data.listSkill)
        const arrProject = data.listProject.map((item) => {
            return { ...item }
        })
        setListProject(arrProject)
        setListEducation(data.listEdu)
    }
    const data = {
        formDataState,
        listSkill,
        listEducation,
        handleAddSkill,
        handleAddEducation,
        changeInput,
        removeSkillItem,
        removeProjectItem,
        listProject,
        handleAddProject,
        changeInforEducation,
        changeInforProject,
        changeInforSkill,
        updateProfile,
        removeEduItem,
        setListEducation,
        setListProject,
        setListSkill,
        setFormDataState,
        changeProfile,
    }
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}
export default UserContextProvider
