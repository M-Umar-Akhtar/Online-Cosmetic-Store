export default function Pageimage(props) {
    const image = props.image;
    console.log(image);
  return (
    <>
      <div style={{backgroundImage: image}} className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>{props.title}</h4>
                <h2>{props.subtitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
