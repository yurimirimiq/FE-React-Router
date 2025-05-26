import { useParams } from 'react-router-dom';
import '../styles/ColorPage.css';

function ColorPage() {
  const { id } = useParams(); // URL에서 색상 이름 추출

  const pageStyle = {
    backgroundColor: id,
    height: '200vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '2rem',
    flexDirection: 'column',
  };

  return (
    <div style={pageStyle}>
      <p>이 페이지는 <strong>{id}</strong> 색상입니다 🎨</p>
    </div>
  );
}

export default ColorPage;
