import ShortcutsCard from "../components/Cards/ShortcutsCard.tsx";
import type {shortcut} from "../api.ts";

export default function HomePage({shortcuts, loading}: {shortcuts: shortcut[], loading: boolean}) {
    if (loading) {
        return <p>Chargement en cours...</p>;
    }

    if (!shortcuts || shortcuts.length === 0) {
        return (
            <>
                <h1 className={"title"}>Liste des shortcuts</h1>

                <p className="text-gray-500">Aucun shortcut trouvé.</p>
            </>
        );
    }

    const cards = shortcuts.map(shortcut => <ShortcutsCard shortcut={shortcut} />)

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className={"title"}>Liste des shortcuts</h1>
            </div>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4 ml-2 mr-2">
                {cards}
            </section>
        </>
    );
}