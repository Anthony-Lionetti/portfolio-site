import { Heading, Text } from "@radix-ui/themes";
import { socials } from "../constants/Socials";

function Hero() {
  return (
    <section className="section">
      <Heading size={"9"} align={"center"} color="green">Hi I&apos;m Anthony</Heading>
      <Text size={"5"} align={'center'}>AI Engineer & Consultant</Text>
      <div className="socials">
        {socials.map((item) => {
          return <a 
          key={item.social} 
          href={item.link}
          rel="noreferrer"
          target="_blank"
          className="social__link"
          >
            {item.svg}
          </a>
        })}

      </div>
    </section>
  );
}

export default Hero;
