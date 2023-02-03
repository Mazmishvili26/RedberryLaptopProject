import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Landing from "../src/pages/Landing Page/Landing";
import Create from "./pages/Create Page/Create";
import List from "./pages/List Page/List";
import Success from "./pages/Success Page/Success";
import Unique from "./pages/Unique Page/Unique";

// apiLinks
const team = "https://pcfy.redberryinternship.ge/api/teams";
const position = "https://pcfy.redberryinternship.ge/api/positions";
const brandsAPI = "https://pcfy.redberryinternship.ge/api/brands";

function App() {
  const [teams, setTeams] = useState([]);
  const [positionData, setPositionData] = useState([]);
  const [brands, setBrands] = useState([]);

  // getTeam

  useEffect(() => {
    const getTeamData = async function () {
      const response = await axios.get(team);
      const data = response.data.data;
      setTeams(data);
    };
    getTeamData();
  }, []);

  // getPosition

  useEffect(() => {
    const getPositionData = async function () {
      const response = await axios.get(position);
      const data = response.data.data;
      setPositionData(data);
    };
    getPositionData();
  }, []);

  // getBrands Data

  useEffect(() => {
    const getBrandsData = async function () {
      const response = await axios.get(brandsAPI);
      const data = response.data.data;
      setBrands(data);
    };
    getBrandsData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/createInfo"
          element={
            <Create teams={teams} positionData={positionData} brands={brands} />
          }
        ></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route
          path="list/unique/:uniqueID"
          element={
            <Unique teams={teams} positionData={positionData} brands={brands} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
