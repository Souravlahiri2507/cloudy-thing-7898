import React from "react";
import {
  Heading,
  Box,
  Flex,
  Input,
  UnorderedList,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Img,
  Divider,
  Button,
} from "@chakra-ui/react";

const NavMiddle = () => {
  return (
    <Box position="absolute" zIndex="1" w="full">
      <Box bgColor="white" p="15px">
        <Flex justifyContent="space-around">
          <Box>
            <Heading as="h2" fontSize="30px" color="#F6411C" fontFamily="cursive">
              pepperroast
            </Heading>
          </Box>
          <Box>
            <Input
              placeholder="What can we help you find?"
              w="700px"
              p="10px"
              border="1px solid black"
              bg="whitesmoke"
            />
          </Box>
          <Box>
            <UnorderedList listStyleType="none">
              <Flex gap="18px">
                <ListItem>
                  <Button bg="white">
                    <Img src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" />
                  </Button>
                </ListItem>
                <ListItem>
                <Button bg="white">
                  <Img src="https://ii1.pepperfry.com/images/svg/icon-profile-21.svg?v=1" />
                  </Button>
                </ListItem>
                <ListItem>
                  <Menu>
                  <Button bg="white">
                    <Img src="https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg" />
                    </Button>
                  </Menu>
                </ListItem>
                <ListItem>
                <Button bg="white">
                  <Img src="https://ii1.pepperfry.com/images/svg/icon-cart-21.svg" />
                  </Button>
                </ListItem>
              </Flex>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
      <hr />
      <Box>
        <Flex justifyContent="space-around">
          <Box>
            <Menu>
              <MenuButton
                fontFamily="serif"
                p="10px 10px 10px 30px"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Furniture
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>3 seater sofas</MenuItem>
                <MenuItem>2 seater sofas</MenuItem>
                <MenuItem>1 seater sofas</MenuItem>
                <MenuItem>3 seater Recliners</MenuItem>
                <MenuItem>2 seater Recliners</MenuItem>
                <MenuItem>1 seater Recliners</MenuItem>
                <MenuItem>Arm Chairs</MenuItem>
                <MenuItem>Rocking Chairs</MenuItem>
                <MenuItem>Recliners</MenuItem>
                <MenuItem>Cafe Chairs</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                fontFamily="serif"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Home Decors
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>3 seater sofas</MenuItem>
                <MenuItem>2 seater sofas</MenuItem>
                <MenuItem>1 seater sofas</MenuItem>
                <MenuItem>3 seater Recliners</MenuItem>
                <MenuItem>2 seater Recliners</MenuItem>
                <MenuItem>1 seater Recliners</MenuItem>
                <MenuItem>Arm Chairs</MenuItem>
                <MenuItem>Rocking Chairs</MenuItem>
                <MenuItem>Recliners</MenuItem>
                <MenuItem>Cafe Chairs</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                fontFamily="serif"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Lamps & Lightings
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Floor Lamps</MenuItem>
                <MenuItem>Shelf Lamps</MenuItem>
                <MenuItem>Night Lamps</MenuItem>
                <MenuItem>Study Lamps</MenuItem>
                <MenuItem>Kids Lighting</MenuItem>
                <MenuItem>Kids Room Lamps</MenuItem>
                <MenuItem>Picture Lamps</MenuItem>
                <MenuItem>Lamps & Tops</MenuItem>
                <MenuItem>Smart Lamps</MenuItem>
                <MenuItem>Smart Bulbs</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                fontFamily="serif"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Kitchen & Dinings
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>2 seater sofas</MenuItem>
                <MenuItem>1 seater sofas</MenuItem>
                <MenuItem>3 seater Recliners</MenuItem>
                <MenuItem>2 seater Recliners</MenuItem>
                <MenuItem>1 seater Recliners</MenuItem>
                <MenuItem>Arm Chairs</MenuItem>
                <MenuItem>Rocking Chairs</MenuItem>
                <MenuItem>Recliners</MenuItem>
                <MenuItem>Cafe Chairs</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                fontFamily="serif"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Shoes
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Floor Lamps</MenuItem>
                <MenuItem>Shelf Lamps</MenuItem>
                <MenuItem>Night Lamps</MenuItem>
                <MenuItem>Study Lamps</MenuItem>
                <MenuItem>Kids Lighting</MenuItem>
                <MenuItem>Kids Room Lamps</MenuItem>
                <MenuItem>Picture Lamps</MenuItem>
                <MenuItem>Lamps & Tops</MenuItem>
                <MenuItem>Smart Lamps</MenuItem>
                <MenuItem>Smart Bulbs</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                fontFamily="serif"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Handbags
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>2 seater sofas</MenuItem>
                <MenuItem>1 seater sofas</MenuItem>
                <MenuItem>3 seater Recliners</MenuItem>
                <MenuItem>2 seater Recliners</MenuItem>
                <MenuItem>1 seater Recliners</MenuItem>
                <MenuItem>Arm Chairs</MenuItem>
                <MenuItem>Rocking Chairs</MenuItem>
                <MenuItem>Recliners</MenuItem>
                <MenuItem>Cafe Chairs</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                fontFamily="serif"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Jewelry
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Floor Lamps</MenuItem>
                <MenuItem>Shelf Lamps</MenuItem>
                <MenuItem>Night Lamps</MenuItem>
                <MenuItem>Study Lamps</MenuItem>
                <MenuItem>Kids Lighting</MenuItem>
                <MenuItem>Kids Room Lamps</MenuItem>
                <MenuItem>Picture Lamps</MenuItem>
                <MenuItem>Lamps & Tops</MenuItem>
                <MenuItem>Smart Lamps</MenuItem>
                <MenuItem>Smart Bulbs</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                fontFamily="serif"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Beauty
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>2 seater sofas</MenuItem>
                <MenuItem>1 seater sofas</MenuItem>
                <MenuItem>3 seater Recliners</MenuItem>
                <MenuItem>2 seater Recliners</MenuItem>
                <MenuItem>1 seater Recliners</MenuItem>
                <MenuItem>Arm Chairs</MenuItem>
                <MenuItem>Rocking Chairs</MenuItem>
                <MenuItem>Recliners</MenuItem>
                <MenuItem>Cafe Chairs</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                fontFamily="serif"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Home
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Floor Lamps</MenuItem>
                <MenuItem>Shelf Lamps</MenuItem>
                <MenuItem>Night Lamps</MenuItem>
                <MenuItem>Study Lamps</MenuItem>
                <MenuItem>Kids Lighting</MenuItem>
                <MenuItem>Kids Room Lamps</MenuItem>
                <MenuItem>Picture Lamps</MenuItem>
                <MenuItem>Lamps & Tops</MenuItem>
                <MenuItem>Smart Lamps</MenuItem>
                <MenuItem>Smart Bulbs</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                fontFamily="serif"
                color="black"
                _hover={{ color: "#F6411C" }}
              >
                Bed & Bath
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>2 seater sofas</MenuItem>
                <MenuItem>1 seater sofas</MenuItem>
                <MenuItem>3 seater Recliners</MenuItem>
                <MenuItem>2 seater Recliners</MenuItem>
                <MenuItem>1 seater Recliners</MenuItem>
                <MenuItem>Arm Chairs</MenuItem>
                <MenuItem>Rocking Chairs</MenuItem>
                <MenuItem>Recliners</MenuItem>
                <MenuItem>Cafe Chairs</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <Divider orientation="horizontal" />
      </Box>
    </Box>
  );
};

export default NavMiddle;
