import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  //   Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export const Navbar = ({
  isShelterLogin,
  setIsShelterLogin,
  isUserLogin,
  setIsUserLogin,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 4 }}
        px={{ base: 10 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            marginBottom={0}
          >
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          {isShelterLogin || isUserLogin ? (
            <Link to='/' style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                _hover={{
                  color: 'teal.500',
                }}
                onClick={async () => {
                  try {
                    if (isShelterLogin) {
                      const response = await fetch(
                        'http://localhost:5000/animalshelter/logout',
                        {
                          method: 'POST',
                        }
                      );
                      if (response.ok) {
                        setIsShelterLogin(false);
                        alert('log out succesfull');
                      } else {
                        throw new error('Shelter logout failed!');
                      }
                    } else if (isUserLogin) {
                      const response = await fetch(
                        'http://localhost:5000/owner/logout',
                        {
                          method: 'POST',
                        }
                      );
                      if (response.ok) {
                        setIsUserLogin(false);
                        alert('log out succesfull');
                      } else {
                        throw new error('Logout failed!!');
                      }
                    } else {
                      return;
                    }
                  } catch (error) {
                    console.error(error);
                  }
                }}
              >
                Log out
              </Button>
            </Link>
          ) : (
            <Link
              to='/user/login'
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Button
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                _hover={{
                  color: 'teal.500',
                }}
              >
                Sign In
              </Button>
            </Link>
          )}

          <Link to='/user/register'>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'teal.400'}
              _hover={{
                bg: 'teal.300',
                color: 'white',
              }}
            >
              Sign Up
            </Button>
          </Link>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("blue.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={'row'} spacing={20} justifyContent={'center'}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                to={navItem.href ?? '#'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'underline',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Link to={href ?? "#"}>
        <Flex
          py={2}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </Link>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "About us",
    children: [
      {
        label: "Centennial College Pet Adoption",
        subLabel: "Adopt the pet that you want",
        href: "/about/centennial",
      },
      {
        label: `Staff's`,
        subLabel: "We are centennial college students",
        href: "/about/staff",
      },
    ],
    href: "/about",
  },
  {
    label: "Find Pet",
    children: [
      {
        label: "Dogs",
        subLabel: "We have several breeds of dogs",
        href: "/pets/dogs",
      },
      {
        label: "Cats",
        subLabel: "We have several breeds of dogs",
        href: "/pets/cats",
      },
    ],
    href: "/pets",
  },

  {
    label: `FAQ's`,
    href: "/faqs",
  },

  {
    label: "Shelter",
    href: "/shelter",
    children: [
      {
        label: "Login as a shelter",
        subLabel: "We have several breeds of dogs",
        href: "/shelter/login",
      },
      {
        label: "Register your shelter now",
        subLabel: "Register now",
        href: "/shelter/register",
      },
    ],
  },
];

export default Navbar;
