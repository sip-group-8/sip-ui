import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Logo from "/components/logo";
import { useAppContext } from "/context/state";
import { useRouter } from "next/router";

const Links = [
  { title: "Juegos", path: "games" },
  { title: "Estadisticas", path: "scoreboard" },
  //   { title: "Equipo", path: "team" },
  { title: "Canje", path: "prizes" },
  { title: "Login", path: "login" },
  { title: "Home", path: "home" },
  { title: "Beneficios", path: "beneficios" },
  // { title: "Home2", path: "newhome" },
];

const NavLink = ({ path, children }) => (
  <NextLink href={`/${path.toLowerCase()}`}>
    <Link
      px={2}
      py={1}
      color="white"
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("rgba(255,0,0,0.1)", "rgba(255,0,0,0.2)"),
      }}
    >
      {children}
    </Link>
  </NextLink>
);

export default function Simple() {
  const { user } = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <Box px={1}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Logo />
            </Box>
            <HStack as={"nav"} spacing={4}>
              {Links.map((link) => {
                if (user.nombre && link.path == "login") return null;
                return (
                  <NavLink key={link.path} path={link.path}>
                    {link.title}
                  </NavLink>
                );
              })}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {user && user.nombre && (
              <Menu>
                {user.puntos} Puntos
                <MenuButton
                  marginLeft="16px"
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  onClick={() => router.push("/profile")}
                >
                  <Avatar
                    size={"sm"}
                    name={`${user.nombre} ${user.apellido}`}
                  />
                </MenuButton>
              </Menu>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
