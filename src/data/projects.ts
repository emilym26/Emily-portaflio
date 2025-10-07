export interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Gestor de tareas",
    description: "Aplicación fullstack con React y Node.js.",
    image: "/images/task-manager.png",
    github: "https://github.com/tuusuario/task-manager",
    demo: "https://task-manager.vercel.app",
  },
  {
    title: "API de E-commerce",
    description: "API REST con Express y PostgreSQL.",
    image: "/images/api.png",
    github: "https://github.com/tuusuario/ecommerce-api",
  },
];
