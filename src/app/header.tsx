export default function Header (){
    return ( 
        <header className="flex justify-between">
            {/*logo*/}
            <div>
                <h2 className="font-semibold text-2xl text-yellow-300 bg-blue-900">
                    Logo
                

    
                </h2>
            </div>
            {/*button*/}
            <nav>
                <ul className="flex gap-x-4 bg-blue-900">
                    <li className="text-yellow-300">
                        <a href="./home">Home</a>
                        
                    </li>
                    <li className="text-yellow-300">
                        <a href="./about">About</a>
                    </li>
                    <li className="text-yellow-300">
                        <a href="./contact">Contact</a>
                    </li>
                    <li className="text-yellow-300">
                        <a href="./services">Services</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}