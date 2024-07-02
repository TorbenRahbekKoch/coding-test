import { Image, List, Paper, Stack, Text, Title } from "@mantine/core"
import { User } from "./User"
import { UserRole } from "./UserRole"


function lookupRoles(user: User, roles: UserRole[]): string[] {
    // For each role in user, look it up in roles
    // and then remove any empty, just in case
    return user.roles
        .map(roleId => {
            const role = roles.find(role => role.id == roleId)
            return role != null
                ? role.description
                : ''
        })
        .filter(role => role != '')
}

// The UserDetailsPresenter does not care how it is rendered, since
// it gets all the information it needs in Props.
export function UserDetailsPresenter({ user, roles }: Props) {

    return (
        <Paper shadow="sm" p={'lg'} mb="md" withBorder bg={'gray.1'} w={'220'}>
            <Stack>
                <Image src={`/uploads/${user.avatar}`} alt={`Avatar for ${user.name}`} />
                <Title my={'md'} order={4}>
                    {user.name}
                </Title>

                <Text my={'md'}>
                    Eyes: {user.eyes}
                </Text>
                <Text my={'md'}>
                    Hair: {user.hair}
                </Text>
                <Text my={'md'}>
                    Gender: {user.gender}
                </Text>
                <Text my={'md'}>
                    Gender: {user.gender}
                </Text>
                <Text my={'md'}>
                    Glasses: {user.glasses ? 'yes' : 'no'}
                </Text>
                <Text>Roles:</Text>
                <List>
                    {lookupRoles(user, roles).map(role => <List.Item>{role}</List.Item>)}
                </List>
            </Stack>
        </Paper>
    )
}

export interface Props {
    user: User
    roles: UserRole[]
}