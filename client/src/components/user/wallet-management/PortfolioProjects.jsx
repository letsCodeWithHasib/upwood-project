import { usersPortfolio } from "../../../assets/data"; // Importing user portfolio data
import ProjectItem from "../common/ProjectItem"; // Importing ProjectItem component

/**
 * PortfolioProjects Component
 * Displays a grid of projects from the user's portfolio using the ProjectItem component.
 */
const PortfolioProjects = () => {
  return (
    <div className="shadow-custom rounded-lg p-10 grid grid-cols-2 gap-5 my-5">
      {/* Mapping through usersPortfolio to render each ProjectItem */}
      {usersPortfolio.map((portfolioProject, index) => (
        // Providing a unique key for each item to help React identify changes
        <ProjectItem key={index} item={portfolioProject} />
      ))}
    </div>
  );
};

export default PortfolioProjects; // Exporting the component for use in other parts of the application
