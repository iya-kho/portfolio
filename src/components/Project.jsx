import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { fonts} from '../utils/style/variables';

import { Laptop } from './Laptop';

const ProjectStyled = styled.article`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const ProjectInner = styled.div`
  height: 650px;
  display: flex;

  h3,
  h4,
  p,
  li {
    color: #fff;
    line-height: 1.5;
  }

  h3 {
    font-size: 30px;
    margin-bottom: 20px;
  }

  h4 {
    margin: 20px 0;
    text-transform: uppercase;
  }

  .right {
    width: 60%;
    display: flex;
    align-items: center;
  }

  .left {
    width: 40%;
  }

  .laptop {
    width: 60%;
    margin: 0 auto;
  }

  .skills li {
    line-height: 2.5;
  }

  .checkIcon {
    margin-right: 7px;
  }

  #buttonWeb {
    margin-right: 40px;
  }

  #buttonWeb,
  #buttonCode {
    font-family: ${fonts.primary};
  }

  #buttonWeb:hover {
    color: #fff;
    border-color: #fff;
  }

  #buttonCode:hover {
    border-color: #d9d9d9;
    color: rgba(0, 0, 0, 0.88);
  }

  .buttons {
    margin-top: 20px;
    display: flex;
  }

  .button {
    height: 60px;
    width: 190px;
    border-radius: 0;
    text-transform: uppercase;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export function Project({ projectInfo, className }) {
  return (
    <ProjectStyled className={className}>
      <ProjectInner className="inWrap">
        <div className="left">
          <h3>{projectInfo.title}</h3>
          <p className="description">{projectInfo.description}</p>
          <h4>Development tools</h4>
          <ul className="skills">
            {projectInfo.skills.map((skill, index) => (
              <li key={skill + index}>
                <CheckOutlined className="checkIcon" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
          <div className="buttons">
            <Button
              ghost
              href={projectInfo.webLink}
              target="_blank"
              id="buttonWeb"
              className="button"
            >
              See it online
            </Button>
            <Button
              type="default"
              href={projectInfo.codeLink}
              target="_blank"
              id="buttonCode"
              className="button"
            >
              Check out the code
            </Button>
          </div>
        </div>
        <div className="right">
          <Laptop imgPath={`/images/projects/${projectInfo.picture}`} className="laptop" />
        </div>
      </ProjectInner>
    </ProjectStyled>
  );
}

Project.propTypes = {
  projectInfo: PropTypes.object,
  className: PropTypes.string,
};
