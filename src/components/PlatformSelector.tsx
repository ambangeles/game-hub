import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId: number | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, isLoading, error } = usePlatforms();

    const selectedPlatform = data?.results.find(
        (platform) => platform.id === selectedPlatformId
    );

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name || "Selected Platform"}
            </MenuButton>
            <MenuList>
                {isLoading && <MenuItem>Loading...</MenuItem>}
                {!isLoading &&
                    data?.results.map((platform) => (
                        <MenuItem
                            onClick={() => onSelectPlatform(platform)}
                            key={platform.id}
                        >
                            {platform.name}
                        </MenuItem>
                    ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
