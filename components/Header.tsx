import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img className="w-40 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/1280px-Medium_%28website%29_logo.svg.png" alt="" />
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white-bg bg-green-600 px-4 py-1 rounded-full">Follow</h3>
                <Link href="/sholat">
                    <a>Sholat</a>
                </Link>
            </div>
        </div>

        <div className="flex items-center space-x-5 text-green-600">
            <h3>
                Sign In
            </h3>
            <h3 className="border px-4 py-1 rounded-full border-green-600">
                Get Started
            </h3>
        </div>
    </header>
  )
}

export default Header