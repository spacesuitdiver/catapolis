import React, { useEffect, useState } from "react";

// const bogusCats = ["Chester", "Garfield", "Tony"];

const Cats = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetch("/api/cats")
      .then((response) => response.json())
      .then((data) => setCats(data));
  }, []);
  return (
    <>
      <h1>Adopt a friend</h1>
      {cats.map((cat) => (
        <article>
          <img src={cat.imageURL} />
          <h2>{cat.name}</h2>
          <p>{cat.description}</p>
        </article>
      ))}
    </>
  );
};

export default Cats;
