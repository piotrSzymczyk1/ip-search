import { useEffect, useState } from "react"
import { connect } from "react-redux";
import { getIpLocation } from '../store/actions/ipLocationSearchActions'
import { getIpUrlSearch } from '../store/actions/ipUrlSearchActions'
import { Row, Col, Container } from "react-bootstrap"
import LocationMap from "../components/locationMap"
import SearchList from "../components/searchList";
import SearchBox from "../components/searchBox"
import SearchBar from "../components/searchBar"
import { isURL } from "../utils/helpers"
import isIp from "is-ip";
//NOTE: is-ip library used for it's complex and deep checks whether the address is actually an IP. RegExp wouldn't be enough in this case
const Main = (props) => {
useEffect(() => {
    props.getIpLocation()
}, [])
const [inputValue, setInputValue] = useState("")
const [isInputValid, setIsInputValid] = useState(true)

const handleInputChange = (event) => {
    setInputValue(event.target.value)
    if(isIp(event.target.value)){
        setIsInputValid(true)
    }else if(isURL(event.target.value)){
        setIsInputValid(true)
    }else if(!event.target.value){
        setIsInputValid(true)
    }else{
        setIsInputValid(false)
    }
}
const handleSearchClick = () => {
    if(isIp(inputValue)){
        setIsInputValid(true)
        props.getIpUrlSearch(inputValue)
    }else if(isURL(inputValue)){
        setIsInputValid(true)
        props.getIpUrlSearch(inputValue)
    }else{
        setIsInputValid(false)
    }
}

    return (
        <Container fluid>
            <Row className="p-5">
                <Col md={12} lg={3}>
                    <SearchList title="Search History" data={props.ipUrlSearch.ipUrlSearchDataHistory}/>
                </Col>
                <Col md={12} lg={9}>
                    <Row>
                        <Col md={12} lg={8}>
                            <LocationMap title="Current Location Map" type="location" data={props.ipLocationSearch}/>
                        </Col>
                        <Col md={12} lg={4}>
                            <SearchBox title="Current Location Data" type="location" data={props.ipLocationSearch}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <SearchBar isLoading={props.ipUrlSearch.ipUrlSearchPending} handleChange={handleInputChange} inputValue={inputValue} handleSearchClick={handleSearchClick} isInputValid={isInputValid}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} lg={8}>
                            {Object.keys(props.ipUrlSearch.ipUrlSearchData).length > 0 ? <LocationMap title="Search Results Map" type="search" data={props.ipUrlSearch.ipUrlSearchData && props.ipUrlSearch.ipUrlSearchData.type && props.ipUrlSearch}/> : <h5 className="text-center">No Searches Performed Yet</h5>}
                        </Col>
                        <Col md={12} lg={4}>
                            {Object.keys(props.ipUrlSearch.ipUrlSearchData).length > 0 ? <SearchBox title="Search Results Data"  type="search" data={props.ipUrlSearch.ipUrlSearchData && props.ipUrlSearch.ipUrlSearchData.type && props.ipUrlSearch}/> : <h5 className="text-center">No Searches Performed Yet</h5>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps = (state) => ({
   ipLocationSearch: state.ipLocationSearchReducer,
   ipUrlSearch: state.ipUrlSearchReducer
});
  
const mapDispatchToProps = {
    getIpLocation,
    getIpUrlSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);