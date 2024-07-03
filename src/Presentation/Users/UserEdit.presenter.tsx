import { Button, Checkbox, Group, Image, List, Paper, Radio, Select, Stack, Text, TextInput } from "@mantine/core"
import { EyeColor, Gender, HairColor, User } from "./User"
import { UserRole } from "./UserRole"
import { useImmer } from "use-immer"

function capitalize(str: string): string {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}


export function UserEditPresenter({ user, roles, onSave }: Props) {

    const [editUser, setEditUser] = useImmer(user)

    function userHasRole(user: User, role: UserRole): boolean {
        return user.roles.find(userRole => userRole == role.id) != null
    }

    function toggleRole(role: UserRole, active: boolean) {
        const index = editUser.roles.findIndex(userRole => userRole == role.id)
        const hasRole = index >= 0
        setEditUser(user => {

            if (hasRole && !active) {
                user.roles.splice(index, 1)
            }

            if (!hasRole && active) {
                user.roles.push(role.id)
            }
        })
    }

    return (
        <Paper shadow="sm" p={'lg'} mb="md" withBorder bg={'gray.1'} w={'220'}>
            <Stack>
                <Image src={`/uploads/${user.avatar}`} alt={`Avatar for ${user.name}`} />
                <TextInput
                    label="Name"
                    placeholder="Enter user's name to filter list"
                    value={editUser.name}
                    onChange={e => setEditUser(user => { user.name = e.target.value })} />

                <Select
                    label="Hair Colour"
                    placeholder="Pick value to filter list"
                    data={['Black', 'Brown', 'Blonde', 'Red', 'Grey']}
                    value={capitalize(editUser.hair)}
                    onChange={e => setEditUser(user => { user.hair = (e?.toLowerCase() as HairColor) })}
                />

                <Select
                    label="Eye Colour"
                    placeholder="Pick value"
                    data={['Brown', 'Blue', 'Green', 'Grey']}
                    value={capitalize(editUser.eyes)}
                    onChange={e => setEditUser(user => { user.eyes = (e?.toLowerCase() as EyeColor) })}
                />

                <Select
                    label="Gender"
                    placeholder="Pick value"
                    data={['Male', 'Female']}
                    value={capitalize(editUser.gender)}
                    onChange={e => setEditUser(user => { user.gender = (e?.toLowerCase() as Gender) })}
                />

                <Radio.Group
                    label="Glasses"
                    defaultValue={editUser.glasses ? 'true' : 'false'}
                    onChange={glasses => setEditUser(user => { user.glasses = (glasses == 'true') })}
                >
                    <Group>
                        <Radio label="Glasses" value="true" />
                        <Radio label="No Glasses" value="false" />
                    </Group>
                </Radio.Group>

                <Text>Roles:</Text>

                <List listStyleType="none">

                    {roles.map(role => (
                        <List.Item key={role.id}>
                            <Checkbox
                                label={role.description}
                                checked={userHasRole(editUser, role)}
                                onChange={event => toggleRole(role, event.currentTarget.checked)}
                            >

                            </Checkbox>
                        </List.Item>))
                    }
                </List>

                <div>
                    <Button my={'md'} onClick={() => onSave(editUser)}>
                        Save
                    </Button>
                </div>

            </Stack>
        </Paper>
    )
}

export interface Props {
    user: User
    roles: UserRole[]
    onSave: (user: User) => void
}