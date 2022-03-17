import { firebaseApp } from '@lib/data/firebase'
import { useEffect, useState } from 'react'

// const { user } = useUser()
const useUser = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        try {
            firebaseApp.auth().onAuthStateChanged(firebaseUser => setUser(firebaseUser))
        } catch (error) {
            console.warn(`Warning: ${error.message || error}`)
        }
    }, [])
    return { user }
}
export default useUser