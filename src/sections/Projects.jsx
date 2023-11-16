import styled from 'styled-components';

import { Project } from '../components';
import { projectsData } from '../content/projects';

const ProjectsStyled = styled.section`
  background-color: pink;
`;

export function Projects() {
  return (
    <ProjectsStyled id="projects" className="sectionVertPadding">
      <h2 className="inWrap">projects</h2>
      {projectsData.map(project => (
        <Project key={project.title} projectInfo={project} />
      ))}
      {/* <Project projectInfo={projectsData[0] } /> */}
    </ProjectsStyled>
  );
}
