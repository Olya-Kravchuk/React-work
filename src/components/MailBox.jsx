// rafce

const MailBox = ({ boxUsers, boxTitle, mailBoxCount = 0 }) => {
  return (
    <div>
      <h2>{boxTitle}</h2>
      {mailBoxCount === 0 ? (
        <p>
          <b>Наразі немає доступних скриньок для замовлення</b>
        </p>
      ) : (
        <p>Кількість активних поштових скриньок: {mailBoxCount}</p>
      )}

      <ul>
        {boxUsers.map(({ id, userEmail }) => {
          return <li key={id}>Email: {userEmail}</li>;
        })}
      </ul>
    </div>
  );
};

export default MailBox;
