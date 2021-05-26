import { Card } from "react-bootstrap";
const SearchBox = ({ title, data, type }) => {
    let ipData,
    dataError,
    locationData,
    timeZoneData,
    currencyData,
    connectionData,
    languageData;
    if(type === "location" && data){
        const {ipLocationData, ipLocationError} = data
        const {location, time_zone, currency, connection} = ipLocationData
        locationData = location
        timeZoneData = time_zone
        currencyData = currency
        connectionData = connection
        ipData = ipLocationData
        dataError = ipLocationError
        languageData = location && location.languages
    }else if(type === "search" && data){
        const {ipUrlSearchData, ipUrlSearchError} = data
        const {location, time_zone, currency, connection} = ipUrlSearchData
        locationData = location
        timeZoneData = time_zone
        currencyData = currency
        connectionData = connection
        ipData = ipUrlSearchData
        dataError = ipUrlSearchError
        languageData = location && location.languages
    }
  return (
    <div>
    <h5 className="text-center mb-3">{title}</h5>
    <Card className="my-3">
      <Card.Body style={{height: 350, overflow: "scroll"}} key="searchBoxBodyKey">
        {ipData && Object.entries(ipData).map(([key, value]) => key !== "location" && key !== "time_zone" && key !== "currency" && key !== "connection" && <Card.Text key={`${value}${key}`}><b className="capitalize">{key.replaceAll("_", " ")}</b>: {value}</Card.Text>)}
        {locationData && Object.entries(locationData).map(([key, value]) => key !== "languages" && <Card.Text key={`${value}${key}`}><b className="capitalize">{key.replaceAll("_", " ")}</b>: {value}</Card.Text>)}
       {/* //NOTE: Edge case, all children in this case have a key prop, however React doesn't read the keys */}
       {languageData && languageData.map((val, index) => 
          <>
            <Card.Text key={`${val.code}${index}`}><b className="capitalize">Code</b>: {val.code}</Card.Text>
            <Card.Text key={`${val.name}${index}`}><b className="capitalize">Name</b>: {val.name}</Card.Text>
            <Card.Text key={`${val.native}${index}`}><b className="capitalize">Native</b>: {val.native}</Card.Text>
          </>         
        )}        
        {timeZoneData && Object.entries(timeZoneData).map(([key, value]) => <Card.Text key={`${value}${key}`}><b className="capitalize">{key.replaceAll("_", " ")}</b>: {value}</Card.Text>)}
        {currencyData && Object.entries(currencyData).map(([key, value]) => <Card.Text key={`${value}${key}`}><b className="capitalize">{key.replaceAll("_", " ")}</b>: {value}</Card.Text>)}
        {connectionData && Object.entries(connectionData).map(([key, value]) => <Card.Text key={`${value}${key}`}><b className="capitalize">{key.replaceAll("_", " ")}</b>: {value}</Card.Text>)}
        {!ipData && <h6>No Data Available</h6>}
      </Card.Body>
    </Card>
    </div>
  );
};
export default SearchBox;
