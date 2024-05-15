import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="/" className="font-bold text-inherit">BINGEWATCHERS</Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/search">
            Search Movie
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/genere">
            Genres
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/nowplaying">
            NowPlaying
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
          <NavbarMenuItem>
            <Link to="/search">Search Movie</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link to="/genere">Genres</Link>
          </NavbarMenuItem>
          <NavbarItem>
          <Link to="/nowplaying">
            NowPlaying
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
