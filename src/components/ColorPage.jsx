import { useParams } from 'react-router-dom';

function ColorPage() {
  const { id } = useParams();

  return (
    <div
      style={{
        backgroundColor: id,
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p
        style={{
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          margin: 0,
        }}
      >
        {id} 배경 페이지입니다😃🖌️
      </p>
    </div>
  );
}

export default ColorPage;
