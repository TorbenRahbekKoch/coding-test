import { useEffect, useState } from 'react';
import {
  Button,
  Collapse,
  Group,
  Pagination,
  Paper,
  Radio,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

// Immer is so nice at handling individual property changes
// to complex objects and useImmer encapsulates useState and immer.
// See: https://immerjs.github.io/immer/example-setstate
import { useImmer } from "use-immer";

import { EyeColor, Gender, Glasses, HairColor, User, UserFilter, buildFilter, defaultFilter } from './user-filtering';
import { gridView, listView } from './UsersView';
import { parsePageCount } from './parsePageCount';

function buildPagination(currentPage: number, pageSize: number): string {
  return `_page=${currentPage}&_limit=${pageSize}`
}

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [userFilter, setUserFilter] = useImmer<UserFilter>(defaultFilter)
  const [opened, { toggle }] = useDisclosure(false);
  const [showingGrid, toggleShowingGrid] = useDisclosure(true)
  const [pageCount, setPageCount] = useState(10)
  const [currentPage, setcurrentPage] = useState(1)

  const pageSize = 3 
    
  useEffect(() => {
    fetch(`http://localhost:3000/users?${buildFilter(userFilter)}&${buildPagination(currentPage, pageSize)}`)
      .then((response) => {
        const serverPageCount = parsePageCount(response.headers)
        if (serverPageCount < currentPage) {
          setcurrentPage(1)
        }
        setPageCount(serverPageCount)        
        return response.json()
      })
      .then((data) => setUsers(data));
  }, [userFilter, currentPage])

  return (
    <>
      <h1>Users</h1>

      <Button my={'md'} onClick={toggle}>
        {opened ? 'Hide filters' : 'Show Filters'}
      </Button>

      <Collapse in={opened}>
        <Paper shadow="sm" p={'lg'} mb="md" withBorder bg={'gray.1'}>
          <Stack gap={10}>
            <TextInput
              label="Name"
              placeholder="Enter user's name to filter list"
              value={userFilter?.name}
              onChange={e => setUserFilter(filter => { filter.name = e.target.value })} />
            <Select
              label="Hair Colour"
              placeholder="Pick value to filter list"
              data={['Black', 'Brown', 'Blonde', 'Red', 'Grey']}
              onChange={e => setUserFilter(filter => { filter.hair = (e?.toLowerCase() as HairColor) })}
            />
            <Select
              label="Eye Colour"
              placeholder="Pick value"
              data={['Brown', 'Blue', 'Green', 'Grey']}
              onChange={e => setUserFilter(filter => { filter.eyes = (e?.toLowerCase() as EyeColor) })}
            />
            <Select
              label="Gender"
              placeholder="Pick value"
              data={['Male', 'Female']}
              onChange={e => setUserFilter(filter => { filter.gender = (e?.toLowerCase() as Gender) })}
            />
            <Radio.Group
              label="Glasses?"
              defaultValue="all"
              onChange={e => setUserFilter(filter => { filter.glasses = (e?.toLowerCase() as Glasses) })}
            >
              <Group>
                <Radio label="All" value="all" />
                <Radio label="Glasses" value="glasses" />
                <Radio label="No Glasses" value="no-glasses" />
              </Group>
            </Radio.Group>
          </Stack>
        </Paper>
      </Collapse>

      <div>
        <Button my={'md'} onClick={toggleShowingGrid.toggle}>
          {showingGrid ? 'List' : 'Grid'}
        </Button>
      </div>

      <Pagination 
        value={currentPage} 
        total={pageCount} 
        withEdges={true} 
        onChange={newPage => setcurrentPage(newPage)}></Pagination>

      {showingGrid
        ? gridView(users)
        : listView(users)}

    </>
  );
}