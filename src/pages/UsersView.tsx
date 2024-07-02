import { Button, Card, Group, Image, Table, Title } from "@mantine/core";
import { User } from "./User";

export function listView(users: User[]) {
    const tableRows = users.map(user =>
        <Table.Tr key={user.id}>
            <Table.Td>{user.name}</Table.Td>
            <Table.Td>{user.hair}</Table.Td>
            <Table.Td>{user.eyes}</Table.Td>
            <Table.Td>{user.gender}</Table.Td>
            <Table.Td>{user.glasses ? 'yes' : 'no'}</Table.Td>
        </Table.Tr>
    )

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Hair</Table.Th>
                    <Table.Th>Eyes</Table.Th>
                    <Table.Th>Gender</Table.Th>
                    <Table.Th>Glasses</Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
                {tableRows}
            </Table.Tbody>
        </Table>)
}

export function gridView(users: User[]) {
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