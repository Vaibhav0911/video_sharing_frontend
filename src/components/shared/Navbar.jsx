import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold tracking-wide">
          VideoTube
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-sm text-zinc-300 hover:text-white">
            Home
          </Link>
          <Link to="/login" className="text-sm text-zinc-300 hover:text-white">
            Login
          </Link>
           <Link to="/watch-video/:id" className="text-sm text-zinc-300 hover:text-white">
            watch-video
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;