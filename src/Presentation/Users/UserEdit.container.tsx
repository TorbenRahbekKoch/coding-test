import { useEffect, useState } from "react"
import { User } from "./User"
import { useParams } from "react-router-dom"
import { UserRole } from "./UserRole"
import { UserEditPresenter } from "./UserEdit.presenter"

export function UserEditContainer() {
    const { id } = useParams()

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
    }, [])

    async function onSave(user: User) {
        const response = await fetch(
            `http://localhost:3000/users/${id}`, {
            method: "Post",
            body: JSON.stringify(user)
        })
        const json = await response.json();
        return json;
    }

    // The json-server serves an empty object when we ask for non-existing
    // users instead of a 404
    const userIsInvalid = (user == null || !Object.hasOwn(user, 'id'))
    if (userIsInvalid || roles.length == 0) {
        return <>Loading...</>
    }

    return (
        <UserEditPresenter user={user} roles={roles} onSave={onSave}></UserEditPresenter>
    )
}