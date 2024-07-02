import { Button, Card, Group, Image, Title } from "@mantine/core";
import { User } from "./User";

export function UsersGridView({users}: Props) {
    return (
        <Group>
            {users.map(user => (
                <Card radius={'md'} withBorder key={user.id} w={'220'}>
                    <Card.Section>
                        <Image src={`/uploads/${user.avatar}`} alt={`Avatar for ${user.name}`} />
                    </Card.Section>
                    <Title my={'md'} order={4}>
                        {user.name}
                    </Title>
                    <Button
                        size={'xs'}
                        fullWidth
                        variant={'outline'}
                        color={'grape'}
                        component={'a'}
                        href={`/users/view/${user.id}`}
                    >
                        View
                    </Button>
                </Card>
            ))}
        </Group>)

}

export interface Props {
    users : User[]
}