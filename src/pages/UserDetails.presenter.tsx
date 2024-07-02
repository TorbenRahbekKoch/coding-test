import { Button, Image, List, Paper, Stack, Text, Title } from "@mantine/core"
import { User } from "./User"
import { UserRole } from "./UserRole"
import { lookupRoles } from "./lookupRoles"


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
                <Button
                    size={'xs'}
                    fullWidth
                    variant={'outline'}
                    color={'grape'}
                    component={'a'}
                    href={`/users/edit/${user.id}`}
                >
                    Edit
                </Button>
            </Stack>
        </Paper>
    )
}

export interface Props {
    user: User
    roles: UserRole[]
}