import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          BlogFolio
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/categories" className="nav-link">
            Categories
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <input
              type="search"
              placeholder="Search posts..."
              className="h-9 rounded-full border bg-background px-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button variant="default" size="sm">
            Subscribe
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-16 border-b bg-background p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/categories"
              className="text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground/70 transition-colors hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <input
                type="search"
                placeholder="Search posts..."
                className="h-9 w-full rounded-full border bg-background px-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button className="w-full" variant="default" size="sm">
              Subscribe
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}