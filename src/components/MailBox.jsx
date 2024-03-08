// rafce

const MailBox = ({ users, boxTitle, mailBoxCount = 0 }) => {
  const styleObj = {
    border: '1px solid black',
    padding: '20px',
    borderRadius: '10px',
    backgroundCalor:
      mailBoxCount === 0 ? 'rgba(202, 0, 51, 0.4' : 'rgba(0, 0, 0, 0.04',
    lineHeigh: 1.25,
  };
  return (
    <div style={styleObj}>
      <h2>{boxTitle}</h2>
      {mailBoxCount === 0 ? (
        <p>
          <b>Наразі немає доступних скриньок для замовлення</b>
        </p>
      ) : (
        <p>Кількість активних поштових скриньок: {mailBoxCount}</p>
      )}

      <ul>
        {users.map(({ id, userEmail }) => {
          return <li key={id}>Email: {userEmail}</li>;
        })}
      </ul>
    </div>
  );
};

export default MailBox;
