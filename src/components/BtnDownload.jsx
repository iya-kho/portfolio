import styled from 'styled-components';
import { DownloadOutlined } from '@ant-design/icons';

const BtnStyled = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  cursor: pointer;

  .downLoadText {
    font-size: 18px;
    font-weight: 700;
  }

  .iconDownload {
    font-size: 25px;
  }
`;

export function BtnDownload() {
  const onButtonClick = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/assets/CV_Iya_KHOROVA_techwriter.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BtnStyled className="btnDownload" onClick={onButtonClick}>
      <span className="downLoadText">Download CV in pdf</span>
      <DownloadOutlined className="iconDownload" />
    </BtnStyled>
  );
}
