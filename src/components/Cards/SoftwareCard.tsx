import type {software} from "../../api.ts";

export default function SoftwareCard({ software }: { software: software }) {
    return (
        <article className={`card-button`}>
            <div className="flex flex-col">
                <h2>{software.name}</h2>
            </div>
        </article>
    )
}