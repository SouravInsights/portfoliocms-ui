import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
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
              <th key={i} data-column={head.id}>
                {head.title}
              </th>
            ))}
            <th data-column="item-actions"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, headerId) => (
            <tr key={headerId}>
              {selectable ? (
                <td data-column="global-selector">
                  {console.log("I'm trying to log headerId")}
                  {console.log(headerId)}
                  {console.log(item.id)}
                  <Checkbox
                    defaultIsChecked={selected.includes(item.id)}
                    isChecked={localSelected.includes(item.id)}
                    onChange={(e) => setCheckedItem(item.id, e.target.checked)}
                  />
                </td>
              ) : (
                ""
              )}

              {console.log("I'm trying to log items")}
              {console.log(item)}

              {Object.keys(item).map((column, i) => (
                <td key={i} data-column={headers[i]}>
                  {console.log(i)}
                  {console.log("I'm trying to console the projectId.title")}
                  {console.log(column)}
                  {item[headers[i].id]}
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
