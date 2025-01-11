import { Flex, Text } from "@radix-ui/themes";
import rpi from "../../public/rpi.svg"

function Footer() {
  return (
    <footer className="footer">
      <Text color="gray">~ By Anthony Lionetti ~</Text>
      <Flex align={"center"} gap={"2"}>
        <Text color="gray">Courtesy of my</Text>
        <img src={rpi} className="rpi-img" />
      </Flex>
    </footer>
  );
}

export default Footer;
