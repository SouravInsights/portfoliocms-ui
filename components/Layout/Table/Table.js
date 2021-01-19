import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  Button,
  Stack,
  Heading,
  Select,
} from "@chakra-ui/react";

import "./Table.module.scss";

import { FaEllipsisV } from "react-icons/fa";

const Table = ({
  headers = [],
  items = [],
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
    <Box width="100%" bg={bg} color={color} rounded="lg" p={5}>
      <table className="chakra-ui-table">
        <thead>
          <tr>
            {selectable ? (
              <th data-column="global-selector">
                <Checkbox
                  isChecked={localSelected.length === itemsIds.length}
                  onChange={(e) => setCheckedItems(e.target.checked)}
                />
              </th>
            ) : (
              ""
            )}

            {headers.map((head, i) => (
              <th className="chakra-ui-table" key={i} data-column={head.id}>
                {head.title}
              </th>
            ))}
            <th className="chakra-ui-table" data-column="item-actions"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              {selectable ? (
                <td data-column="global-selector">
                  <Checkbox
                    defaultIsChecked={selected.includes(item.id)}
                    isChecked={localSelected.includes(item.id)}
                    onChange={(e) => setCheckedItem(item.id, e.target.checked)}
                  />
                </td>
              ) : (
                ""
              )}

              {Object.keys(item).map((column, c) => (
                <td key={c} data-column={headers[c]}>
                  {item[headers[c].id]}
                </td>
              ))}
              <td data-column="item-actions">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Table;
