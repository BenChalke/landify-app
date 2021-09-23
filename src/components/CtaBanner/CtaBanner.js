import '../../styles/CtaBanner.scss';


function CtaBanner() {
  return (
    <div className="cta-banner">
      <div className="cta-banner__inner container">
        <div className="cta-banner__inner__content">
          <h2>Manage your projects from your mobile</h2>
          <p>Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>

          <div className="cta-banner__inner__content__download">
            <p>Get the App</p>
            <a href="#"><img src="Google-Play-Badge.png" className="img-responsive" alt="Google Play Badge" /></a>
            <a href="#"><img src="App-Store-Badge.png" className="img-responsive" alt="App Store Badge" /></a>
          </div>
        </div>
        <div className="cta-banner__inner__image">
          <img src="cta-mockup.png" className="img-responsive" alt="Mock of our app on a phone" />
        </div>
      </div>
    </div>
  );
}

export default CtaBanner;
