import type { PageSlug } from "../App";

interface Props {
    onNavClick: (page: PageSlug) => void;
}

export default function Header({onNavClick}: Props) {
    return (
        <header className="bg-gradient-to-r from-yellow-400 to-blue-600 text-white p-4 mb-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">Shortcuts</h1>
                    <nav>
                        <ul className="flex gap-2">
                            <button className="text-white hover:text-yellow-200 px-2" onClick={() => onNavClick('home')}>Accueil</button>
                            <button className="text-white hover:text-yellow-200 px-2" onClick={() => onNavClick('software')}>Logiciels</button>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}