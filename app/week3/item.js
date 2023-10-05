export default function Item(props) {
    return (
      <div className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2">
        <p> {props.name}</p>
        <p>{props.quantity}</p>
        <p>{props.category}</p>
      </div>
    );
  }