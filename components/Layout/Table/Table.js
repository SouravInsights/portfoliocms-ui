import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

import "./Table.module.scss";
import { FaEllipsisV } from "react-icons/fa";

const ProjectTable = ({
  headers = [],
  items,
  selected = [],
  selectable = false,
  bg = "secondary.card",
  color = "gray.800",
}) => {
  let itemsIds = items.map((item) => item.id);

  let [localSelected, setLocalSelected] = useState(selected);
  const setCheckedItems = (isChecked) => {
    setLocalSelected([]);
    if (isChecked === true) {
      setLocalSelected(itemsIds);
    }
  };

  const setCheckedItem = (item, isChecked) => {
    isChecked
      ? setLocalSelected([...localSelected, item])
      : setLocalSelected(localSelected.filter((i) => i !== item));
  };

  return (
    <Box width="100%" alignContent="center" bg={bg} color={color}>
      <Table>
        <Thead>
          <Tr>
            {selectable ? (
              <Th data-column="global-selector">
                <Checkbox
                  isChecked={localSelected.length === itemsIds.length}
                  onChange={(e) => setCheckedItems(e.target.checked)}
                />
              </Th>
            ) : (
              ""
            )}

            {headers.map((head, i) => (
              <Th key={i} data-column={head.id}>
                {head.title}
              </Th>
            ))}
            <th data-column="item-actions"></th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item, headerId) => (
            <Tr key={headerId}>
              {selectable ? (
                <Td data-column="global-selector">
                  {console.log("Here's what inside headerId:", headerId)}
                  {console.log("Here's what inside item.id:", item.id)}
                  <Checkbox
                    defaultIsChecked={selected.includes(item.id)}
                    isChecked={localSelected.includes(item.id)}
                    onChange={(e) => setCheckedItem(item.id, e.target.checked)}
                  />
                </Td>
              ) : (
                ""
              )}

              {console.log("Here's what inside item:", item)}

              {Object.keys(headers).map((column, i) => (
                <Td key={i} data-column={headers[i]}>
                  {console.log("Here's what inside i:", i)}

                  {console.log(
                    "Here's what inside item[headers[i]:",
                    item[headers[i]]
                  )}
                  {item[headers[i].id]}
                </Td>
              ))}

              <Td data-column="item-actions">
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<FaEllipsisV />}
                  ></MenuButton>
                  <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProjectTable;
