import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="flex flex-row items-center absolute right-0 top-0 mr-4 mt-4">
      {colorMode === "light" && (
        <IconButton
          onClick={toggleColorMode}
          icon={<FaMoon />}
          className="mx-4 hover:cursor-pointer hover:opacity-70"
          aria-label={"Toggle dark mode"}
          variant="ghost"
        />
      )}
      {colorMode === "dark" && (
        <IconButton
          onClick={toggleColorMode}
          icon={<FaSun />}
          className="mx-4 hover:cursor-pointer hover:opacity-70"
          aria-label={"Toggle dark mode"}
          variant="ghost"
        />
      )}

      <a
        className="bg-transparent"
        href="https://github.com/asegestam/cutest-tyson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon as={FaGithub} w={6} h={6} className="hover:opacity-70" />
      </a>
    </div>
  );
};

export default Header;
