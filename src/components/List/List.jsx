import "./List.css";

const List = ({ direction, children }) => {
  return (
    <div className="list" style={{ flexDirection: `${direction}` }}>
      {children}
    </div>
  );
};

export default List;
