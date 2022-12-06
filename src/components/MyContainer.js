import DisplayName from "./DisplayName";

function MyContainer(props){
  return (
    <div className="container">
      <h1><i>{props.children}</i></h1>
      <DisplayName firstName="Jack" bob="Fischer" career={props.career} />
      <DisplayName firstName="JP" bob="Schnabel" career={props.career} />
    </div>
  );
}

export default MyContainer;