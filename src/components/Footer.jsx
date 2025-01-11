import { Flex, Text } from "@radix-ui/themes";
import rpi from "../../public/rpi.svg"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

function Footer() {
  return (
    <footer className="footer">
      <Text color="gray">~ Anthony Lionetti ~</Text> 
      <a href="mailto:lionetti.tech@gmail.com" className="footer-email">
        <EnvelopeClosedIcon color="green" style={{height:"1rem", width:"1rem"}} />
        <Text>Lionetti.tech@gmail.com</Text>
      </a> 
      <Flex align={"center"} gap={"2"}>
        <Text color="gray">Courtesy of my</Text>
        <img src={rpi} className="rpi-img" />
      </Flex>
    </footer>
  );
}

export default Footer;
