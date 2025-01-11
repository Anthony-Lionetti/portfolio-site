import { Heading, TabNav } from "@radix-ui/themes"
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {
    MoonIcon,
    SunIcon,
} from "@radix-ui/react-icons";
import "../styles/components/toggle_group.css"

export default function Nav() {
  return (
    <nav className="nav">
        <a href="/" style={{all:"unset"}}>
            <Heading size={"6"}>Lionetti.me</Heading>
        </a>
            {/* AI Basics, BookShelf*/}
        <div className="nav-group">
            <TabNav.Root size={"2"}>
                <TabNav.Link href="/" active>
                    <Heading size="3">Home</Heading>
                </TabNav.Link>
                <TabNav.Link href="/bookshelf" >
                    My Bookshelf 
                </TabNav.Link>
                <TabNav.Link href="/ai-fundamentals" >
                    AI Fundamentals 
                </TabNav.Link>
            </TabNav.Root>
            
            <ThemeToggle />
        </div>
    </nav>
  )
}


const ThemeToggle = () => (
	<ToggleGroup.Root
		className="ToggleGroup"
		type="single"
		defaultValue="light"
		aria-label="Text alignment"
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

