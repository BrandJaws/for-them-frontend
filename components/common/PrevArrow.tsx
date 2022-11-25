const PrevArrow = (props: any) => {
  const { className, style, onClick, text } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      {text}
    </div>
  );
};
export default PrevArrow;
