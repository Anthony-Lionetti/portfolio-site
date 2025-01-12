import { DropdownMenu, Heading, IconButton, TabNav } from "@radix-ui/themes"
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {
    BookmarkIcon,
    HamburgerMenuIcon,
    HomeIcon,
    MoonIcon,
    Pencil1Icon,
    SunIcon,
} from "@radix-ui/react-icons";
import "../styles/components/toggle_group.css"
import { useTheme } from "../context/ThemeContext";
import { useLocation } from "wouter";

export default function Nav() {
  return (
    <nav className="nav">
        <a href="/" style={{all:"unset", cursor:"pointer"}}>
            <Heading size={"6"}>Lionetti.me</Heading>
        </a>

        <NavigationLinks />
    </nav>
  )
}

function NavigationLinks() {
    const [location] = useLocation()
    return (
        <>
        {/* Mobile */}
            <div className="mobile-nav">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <IconButton variant="soft">
                            <HamburgerMenuIcon />
                        </IconButton>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content variant="soft" align="end">
                        <DropdownMenu.Item asChild>
                            <a href="/"><HomeIcon /> Home</a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item asChild>
                            <a href="/bookshelf"><BookmarkIcon/> Books</a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item asChild>
                            <a href="/posts"><Pencil1Icon/>Posts</a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item asChild>
                           <ThemeToggle />
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
            
            {/* Desktop*/}
            <div className="desktop-nav">
                <TabNav.Root size={"2"}>
                    <TabNav.Link href="/" active={location === "/"}>
                        <Heading size="3">Home</Heading>
                    </TabNav.Link>
                    <TabNav.Link href="/bookshelf" active={location === "/bookshelf"}>
                        Books 
                    </TabNav.Link>
                    <TabNav.Link href="/posts" active={location === "/posts"}>
                        Posts 
                    </TabNav.Link>
                </TabNav.Root>
                
                <ThemeToggle />
            </div>
        </>
    );
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
        style={{marginInline:"auto"}}
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

