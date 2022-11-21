import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {useStateValue} from "./StateProvider.jsx"
import { actionTypes } from "./reducer.jsx"


function Search({ HideButtons = false }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();

    dispatch ({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })

    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__input--icon"></SearchIcon>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <div className="icon-right">
          <MicIcon className="search-icon"></MicIcon>
          <CameraAltIcon className="search-icon"></CameraAltIcon>
        </div>
      </div>
      {!HideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttons--hidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttons--hidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
