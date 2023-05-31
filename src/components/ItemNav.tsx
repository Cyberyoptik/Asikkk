import { useTheme } from 'next-themes'
import ItemLogo from '../components/ItemLogo'
export default function ItemNav() {
    const { theme, setTheme } = useTheme()
    return (
        <>
            <nav className="border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-none">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <ItemLogo />
                    <button id="mega-menu-full-cta-button" data-collapse-toggle="mega-menu-full-cta" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mega-menu-full-cta" aria-expanded="false">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                    </button>
                    <div id="mega-menu-full-cta" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            <li>
                                <a href="/" className="block py-2 text-gray-900 dark:text-gray-50 text-lg">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 text-gray-900 dark:text-gray-50 text-lg">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 text-gray-900 dark:text-gray-50 text-lg">Contact</a>
                            </li>
                            <li>
                                <button onClick={() => {
                                    setTheme(theme === 'dark' ? 'light' : 'dark')
                                }} className="py-2">
                                    <img src="../icon/sun.svg" width={35} className="hidden dark:block text-lg" />
                                    <img src="../icon/moon.svg" width={35} className="dark:hidden text-lg" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
