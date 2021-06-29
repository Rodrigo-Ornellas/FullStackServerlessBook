import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'
// import { useHistory } from "react-router-dom";

const protectedRoute = (Comp, route = '/profile') => (props) => {

    // let History = useHistory();

    async function checkAuthState() {
        try {
            await Auth.currentAuthenticatedUser()
        } catch (err) {
            // History.push(route)
            props.history.push(route)
        }
    }
    useEffect(() => {
        checkAuthState()
    })
    return <Comp {...props} />
}

export default protectedRoute