import "./ServicesAbout.css";
function ServicesBlocks(props) {
  const { blocks } = props;
  return (
    <div className="container">
      <div className="color_blocks">
        {blocks.map((block) => (
          <div
            key={block.title}
            className="color_block"
            style={{ backgroundColor: block.color }}
          >
            <div>
              <div className="block_line"></div>
              <h2 className="color_block_text">{block.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesBlocks;
