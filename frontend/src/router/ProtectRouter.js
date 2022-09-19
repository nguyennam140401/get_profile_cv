import React, { useContext, Fragment } from 'react'
import { Route, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const ProtecteRoute = ({ element: Component, ...rest }) => {
    const {
        authState: { isAuthenticated },
    } = useContext(AuthContext)
    const navigate = useNavigate()
    if (!isAuthenticated) {
        navigate('/login')
    }
    return (
        <Fragment>
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated ? (
                        <>
                            <Component {...rest} {...props}></Component>
                        </>
                    ) : (
                        <Navigate to="/login"></Navigate>
                    )
                }
            />
        </Fragment>
    )
}

export default ProtecteRoute
