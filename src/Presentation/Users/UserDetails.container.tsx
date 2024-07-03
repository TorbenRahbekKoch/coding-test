import { useEffect, useState } from "react"
import { User } from "./User"
import { useParams } from "react-router-dom"
import { UserDetailsPresenter } from "./UserDetails.presenter"
import { UserRole } from "./UserRole"

// I have split the UserDetails page into a container and
// a presenter. The container manages communication with the
// outside world, and is allowed to know that it is
// rendered by a router.
export function UserDetailsContainer() {
    const {id} = useParams()
    const [roles, setRoles] = useState<UserRole[]>([])
    const [user, setUser] = useState<User | undefined>(undefined)

    useEffect(() => {
        fetch('http://localhost:3000/roles')
            .then(response => response.json())
            .then(data => setRoles(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
    },[])

    // The json-server serves an empty object when we ask for non-existing
    // users instead of a 404
    const userIsInvalid = (user == null || !Object.hasOwn(user, 'id'))
    if (userIsInvalid || roles.length == 0) {
        return <>Loading...</>
    }

    return (
        <UserDetailsPresenter user={user} roles={roles}></UserDetailsPresenter>
    )
}