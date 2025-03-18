export type IAiLibraryItem = {
    id: number;
    image: string;
    user: string;
    type: "image" | "text" | "code";
    title: string;
    content: string;
    tokens: number;
};

export const aiLibraryData: IAiLibraryItem[] = [
    {
        id: 1,
        image: "/images/avatars/1.png",
        user: "Sophia Turner",
        type: "image",
        title: "AI Art Generator",
        content:
            "Create stunning digital art with AI-powered tools. Provide a prompt, and let the AI bring your vision to life.",
        tokens: 50,
    },
    {
        id: 2,
        image: "/images/avatars/2.png",
        user: "Ethan Roberts",
        type: "text",
        title: "Text Summarizer",
        content: "Summarize lengthy documents or articles into concise, easy-to-digest information.",
        tokens: 30,
    },
    {
        id: 3,
        image: "/images/avatars/3.png",
        user: "Olivia Martinez",
        type: "code",
        title: "Code Helper",
        content: "Get suggestions, refactor code, and find solutions to common programming challenges.",
        tokens: 70,
    },
    {
        id: 4,
        image: "/images/avatars/4.png",
        user: "James Cooper",
        type: "image",
        title: "Photo Enhancer",
        content: "Enhance image quality, remove noise, and upscale resolution with AI-powered enhancements.",
        tokens: 40,
    },
    {
        id: 5,
        image: "/images/avatars/5.png",
        user: "Isabella Lewis",
        type: "text",
        title: "Grammar and Style Checker",
        content: "Polish your writing with advanced grammar checks and style suggestions.",
        tokens: 20,
    },
    {
        id: 6,
        image: "/images/avatars/6.png",
        user: "Liam Carter",
        type: "code",
        title: "Code Explainer",
        content: "Understand complex code snippets with detailed explanations generated by AI.",
        tokens: 60,
    },
    {
        id: 7,
        image: "/images/avatars/7.png",
        user: "Emily Scott",
        type: "text",
        title: "Prompt Optimizer",
        content: "Optimize your AI prompts for better output and improved results.",
        tokens: 25,
    },
    {
        id: 8,
        image: "/images/avatars/8.png",
        user: "Noah Bennett",
        type: "image",
        title: "3D Model Generator",
        content: "Generate 3D models and designs with AI-driven creativity and precision.",
        tokens: 80,
    },
    {
        id: 9,
        image: "/images/avatars/9.png",
        user: "Charlotte Edwards",
        type: "text",
        title: "Story Generator",
        content: "Create captivating stories and narratives with the help of AI storytelling tools.",
        tokens: 45,
    },
    {
        id: 10,
        image: "/images/avatars/10.png",
        user: "William Harris",
        type: "image",
        title: "AI Diagram Maker",
        content: "Quickly create flowcharts, diagrams, and visualizations tailored to your needs.",
        tokens: 55,
    },
];
