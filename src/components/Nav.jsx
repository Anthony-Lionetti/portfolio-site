import { Heading, TabNav } from "@radix-ui/themes"
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {
    MoonIcon,
    SunIcon,
} from "@radix-ui/react-icons";
import "../styles/components/toggle_group.css"
import { useTheme } from "../../context/ThemeContext";
import { useLocation } from "wouter";

export default function Nav() {
  const [location] = useLocation()
  return (
    <nav className="nav">
        <a href="/" style={{all:"unset"}}>
            <Heading size={"6"}>Lionetti.me</Heading>
        </a>
            {/* AI Basics, BookShelf*/}
        <div className="nav-group">
            <TabNav.Root size={"2"}>
                <TabNav.Link href="/" active={location === "/"}>
                    <Heading size="3">Home</Heading>
                </TabNav.Link>
                <TabNav.Link href="/bookshelf" active={location === "/bookshelf"}>
                    My Bookshelf 
                </TabNav.Link>
                <TabNav.Link href="/fundamentals" active={location === "/fundamentals"}>
                    AI Fundamentals 
                </TabNav.Link>
            </TabNav.Root>
            
            <ThemeToggle />
        </div>
    </nav>
  )
}


function ThemeToggle() {
    const { appearance, setAppearance } = useTheme();
    
    return (

	<ToggleGroup.Root
		className="ToggleGroup"
		type="single"
		defaultValue={appearance}
		aria-label="Text alignment"
        value={appearance}
        onValueChange={(appearance) => {
            if (appearance) setAppearance(appearance);
        }}
	>
		<ToggleGroup.Item
			className="ToggleGroupItem"
			value="light"
			aria-label="sun"
		>
			<SunIcon />
		</ToggleGroup.Item>
		<ToggleGroup.Item
			className="ToggleGroupItem"
			value="dark"
			aria-label="moon"
		>
			<MoonIcon />
		</ToggleGroup.Item>
	</ToggleGroup.Root>
    );
}

