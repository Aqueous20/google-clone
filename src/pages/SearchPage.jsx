import React from "react";
import { useStateValue } from "../components/StateProvider";
import "./SearchPage.css";
import useGoogleSearch from "../components/useGoogleSearch";
//import response from "../response.js";
import Homelogo from "../assets/Google-Logo.svg";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // live api call
  const { data } = useGoogleSearch(term);

  //mock api call const data = response;
  console.log(data);
  return (
    <div className="search__page">
      <div className="search__page--header">
        <Link to="/">
          <img className="search__page--logo" src={Homelogo} alt="binge sake" />
        </Link>
        <div className="search__page--header_body">
          <Search HideButtons></Search>
          <div className="search__page--options">
            <div className="search__page--options-left">
              <div className="search__page--option">
                <SearchIcon></SearchIcon>
                <Link to="/all">All</Link>
              </div>
              <div className="search__page--option">
                <DescriptionIcon></DescriptionIcon>
                <Link to="/news">News</Link>
              </div>
              <div className="search__page--option">
                <ImageIcon></ImageIcon>
                <Link to="/images">Images</Link>
              </div>
              <div className="search__page--option">
                <LocalOfferIcon></LocalOfferIcon>
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="search__page--option">
                <RoomIcon></RoomIcon>
                <Link to="/maps">Maps</Link>
              </div>
              <div className="search__page--option">
                <MoreVertIcon></MoreVertIcon>
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="search__page--options-right">
              <div className="search__page--option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search__page--option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="search__page--results">
          <p className="search__page--result-count">
            About {data?.searchInformation.formattedTotalResults}rsults (
            {data?.searchInformation.formattedSearchTime}) for {term}
          </p>

          {data?.items.map(item => (
            <div className="search__page--result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&(
                    <img className="search__page--result-image" src={
                        item.pagemap?.cse_image[0]?.src
                    } alt=" binge sake" />
                )}
                {item.displayLink}
              </a>
              <a className="search__page--result-title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="search__page--result-snippet">
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
