import Logo from '../../src/assets/logo.png'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="CodeBook" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-gear-wide-connected" />
                        <span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-search" />
                        <Link to="/cart" className=" text-gray-700 dark:text-white mr-5">
                            <span className=" text-2xl bi bi-cart-fill relative">

                                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{0}</span>
                            </span>
                        </Link>
                        <span className="cursor-pointer text-xl text-gray-700 dark:text-white bi bi-person-circle" />


                    </div>
                </div>
            </nav>


        </header>
    )
}
