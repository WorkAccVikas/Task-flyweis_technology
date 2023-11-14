const Badge = () => {
  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <div className={randomNumber > 50 ? "New" : "Old"}>
      {randomNumber > 50 ? "New" : "Old"}
    </div>
  );
};


export default Badge;
