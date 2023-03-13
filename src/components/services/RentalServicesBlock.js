import "./RentalServicesBlock.css";

function RentalServicesBlock(props) {
  return (
    <div className="container">
      <div className="rental_block">
        <img className="rental_image" src={props.image} alt="img" />
        <div className="rental_text_block">
          <p className="rentalTitle_p">{props.title}</p>
          <p className="rental_p">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default RentalServicesBlock;
