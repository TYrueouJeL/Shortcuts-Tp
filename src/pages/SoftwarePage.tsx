import SoftwareCard from "../components/Cards/SoftwareCard.tsx";
import type {software} from "../api.ts";

export default function SoftwarePage({software, loading}: {software: software[], loading: boolean}) {
    if (loading) {
        return <p>Chargement en cours...</p>;
    }

    if (!software || software.length === 0) {
        return (
            <>
                <h1 className={"title"}>Liste des software</h1>

                <p className="text-gray-500">Aucun software trouvé.</p>
            </>
        );
    }

    const cards = software.map(software => <SoftwareCard software={software} />)

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className={"title"}>Liste des software</h1>
            </div>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 my-4 ml-2 mr-2">
                {cards}
            </section>
        </>
    );
}