import "./ServicesAbout.css";

function ServicesAbout(props) {
  return (
    <div className="container">
      <div className="services_block">
        <div className="services_text_block">
          <h2 className="services_h1">{props.title}</h2>
          <p className="services_p">{props.text}</p>
        </div>
        <img className="services_image" src={props.image} alt="img" />
      </div>
      <div className="services_text">
        <div className="p_texts">
          <p>
            Приехав к нам однажды, многие наши клиенты становятся постоянными, а
            часть из них даже друзьями.
          </p>

          <p>
            А также в нашей мастерской можно отремонтировать электросамокат и
            электровелосипед.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesAbout;
