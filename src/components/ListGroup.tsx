function ListGroup() {
  let cities = ["뉴욕", "서울", "파리", "도쿄"];
  cities = [];

  /* const message = cities.length === 0 ? <p>도시 데이터 없음</p> : null;

  function getMessage() {
    return cities.length === 0 ? <p>도시 데이터 없음</p> : null;
  } */

  return (
    <>
      <h1>세계 주요 관광 도시</h1>
      {cities.length === 0 && <p>도시 데이터 없음</p>}
      <ul className="list-group">
        {cities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
