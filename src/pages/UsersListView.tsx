import { Table } from "@mantine/core";
import { User } from "./User";

export function UsersListView({users}: Props) {

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

export interface Props {
    users : User[]
}