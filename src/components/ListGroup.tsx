function ListGroup() {
  const cities = ["뉴욕", "서울", "파리", "도쿄"];

  return (
    <>
      <h1>세계 주요 관광 도시</h1>
      <ul className="list-group">
        {cities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
