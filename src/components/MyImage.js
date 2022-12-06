import myLogo from '../logo.svg';

function MyImage(props){

  return (
    <img src={props.myImageURL} alt="react logo" />
  );
}

export default MyImage;