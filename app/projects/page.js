import { assets } from "@/assets";
import ProjectsClient from "./ProjectsClient";
import { projectsListingMetadata } from "@/config/seo";

// /projects and /projects?category=... each get their own title + description.
export function generateMetadata({ searchParams }) {
  return projectsListingMetadata(searchParams);
}

// Server component: the project list is read here, on the server, so the big
// assets file and asset manifest are NOT shipped to the browser.
export default function ProjectsPage() {
  return <ProjectsClient gallery={assets.projectGallery} />;
}