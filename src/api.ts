export interface shortcut {
    "@type": string;
    "id": number;
    "title": string;
    "description": string;
}

export interface software {
    "@type": string;
    "id": number;
    "name": string;
}

export interface Collection<T> {
    "@type": "hydra-Collection";
    "hydra:member": T[];
}