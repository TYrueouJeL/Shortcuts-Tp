import type {shortcut} from "../../api.ts";

export default function ShortcutsCard({ shortcut }: { shortcut: shortcut }) {
    return (
        <article className={`card-button`}>
            <div className="flex flex-col">
                <h2>{shortcut.title}</h2>
                <p className="text-sm text-gray-500">Description : {shortcut.description}</p>
            </div>
        </article>
    )
}