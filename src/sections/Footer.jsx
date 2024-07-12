import styled from 'styled-components';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

import { contactInfo } from '../content/content';
import { devices } from '../utils/style/variables';

const FooterStyled = styled.footer`
  height: 170px;

  @media ${devices.tabletS} {
    height: auto;
  }

  .footerInner {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 20px;
    padding: 40px 0;

    @media ${devices.tabletS} {
      grid-template-columns: 1fr;
      gap: 50px;
    }
  }

  .contactItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${devices.tabletS} {
      height: 80px;
    }
  }

  .icon {
    font-size: 32px;
  }
`;

export function Footer() {
  return (
    <FooterStyled id='contact'>
      <div className="footerInner wrapLarge">
        <div className="contactItem">
          <EnvironmentOutlined className='icon' />
          <span>{contactInfo.address}</span>
        </div>
        <div className="contactItem">
          <MailOutlined className='icon'/>
          <span>{contactInfo.mail}</span>
        </div>
        <div className="contactItem">
          <PhoneOutlined className='icon' />
          <span>{contactInfo.phone}</span>
        </div>
      </div>
    </FooterStyled>
  );
}
