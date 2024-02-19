import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                "Order by relevance"
            </MenuButton>
            <MenuList>
                {/* {isLoading && <MenuItem>Loading...</MenuItem>}
                {error && <MenuItem>{error}</MenuItem>}
                {!isLoading &&
                    data.map((platform) => (
                        <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                    ))} */}
                    <MenuItem>123</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
