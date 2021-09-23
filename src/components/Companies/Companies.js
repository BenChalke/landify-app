import '../../styles/Companies.scss';


function Companies() {
  const companies = ['Airbnb', 'FedEx', 'Google', 'Hubspot', 'Microsoft', 'Walmart'];

  return (
    <div className="companies">
      <div className="companies__background"></div>
      <div className="companies__inner">
        {companies.map((company) => {
          return(
            <div className="companies__inner__logo">
              <img src={'logos/' + company + '.svg'} alt={company + ' logo'} className="img-responsive"/>
            </div>
          )
        })
        }

      </div>
    </div>
  );
}

export default Companies;
