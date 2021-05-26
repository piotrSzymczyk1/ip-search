import { ListGroup } from "react-bootstrap";

const SearchList = ({ data, title }) => {
//InnerHeight used for screen adaptaion
  return (
    <div>
      <h5 className="text-center mb-3">{title}</h5>
      <ListGroup className="adaptiveSearchList" style={{maxHeight: window.innerHeight - 155}}>
        {data.map((value, index) => (
          <ListGroup.Item key={index}>{value}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SearchList;
