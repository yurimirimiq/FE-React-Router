import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  const colors = ['red', 'blue', 'orange', 'pink', 'yellow'];

  return (
    <div className="container">
      <h2>React 색상 선택</h2>
      <hr />
      <div className="color-buttons">
        {colors.map((color) => (
          <button
            key={color}
            style={{
              backgroundColor: color,
              color: color === 'yellow' ? 'black' : 'white',
              margin: '5px',
              padding: '10px 0px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            onClick={() => navigate(`/color/${color}`)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
