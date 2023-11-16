import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectStyled = styled.div``;

export function Project({ projectInfo }) {
  return (
    <ProjectStyled>
      <div>
        <h3>{projectInfo.title}</h3>
        <p>{projectInfo.description}</p>
      </div>
    </ProjectStyled>
  );
}

Project.propTypes = {
  projectInfo: PropTypes.object,
};
