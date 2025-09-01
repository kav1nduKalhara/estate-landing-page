export interface ProjectData {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
    rating: number;
    stars: string;
}

export const recentProjects: ProjectData[] = [
    {
        id: 1,
        title: "Sobha Hearland II Villas",
        description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
        image: "/19.svg",
        alt: "Sobha Hearland II Villas house",
        rating: 4.83,
        stars: "/Stars.png"
    },
    {
        id: 2,
        title: "Sobha Hearland II Villas",
        description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
        image: "/20.svg",
        alt: "Sobha Hearland II Villas house",
        rating: 4.83,
        stars: "/Stars.png"
    },
    {
        id: 3,
        title: "Sobha Hearland II Villas",
        description: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
        image: "/21.svg",
        alt: "Sobha Hearland II Villas house",
        rating: 4.83,
        stars: "/Stars.png"
    }
];