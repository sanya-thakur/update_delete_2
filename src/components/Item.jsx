const Item = ({ item, onDelete }) => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <span>{item.name}</span>
        <div>
          <button onClick={() => console.log("Edit clicked for", item.id)}>Edit</button>
          <button onClick={() => onDelete(item.id)} style={{ marginLeft: "5px", color: "red" }}>
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default Item;
  