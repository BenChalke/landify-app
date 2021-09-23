import '../../styles/Features.scss';


function Features() {
  const features = [
    {
      id: 1,
      title: "Robust workflow",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      logo: "robust.svg"
    },
    {
      id: 2,
      title: "Flexibility",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      logo: "flexibility.svg"
    },
    {
      id: 3,
      title: "User friendly",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      logo: "user-friendly.svg"
    },
    {
      id: 4,
      title: "Mulitple layouts",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      logo: "layouts.svg"
    },
    {
      id: 5,
      title: "Better components",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      logo: "components.svg"
    },
    {
      id: 6,
      title: "Well organised",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      logo: "organised.svg"
    }
  ];

  return (
    <div className="features">
      <div className="features__inner container">
        <div className="features__inner__header">
          <h2>Tailor-made features</h2>
          <p>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
        </div>
        <div className="features__inner__content">
          {features.map((feature) => {
            return(
              <div className="features__inner__content__item">
                <img src={'icons/' + feature.logo} alt={feature.title + ' icon'} className="img-responsive"/>
                <h5>{feature.title}</h5>
                <p>{feature.content}</p>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}

export default Features;
