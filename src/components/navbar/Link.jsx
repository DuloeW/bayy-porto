const Link = (props) => {
  return (
    <>
      <span>
        <a href={props.path} >{props.name}</a>
      </span>
    </>
  );
};

export default Link;
