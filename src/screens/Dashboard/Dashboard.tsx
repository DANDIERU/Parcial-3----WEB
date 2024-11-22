import "./dashboard.css";
import { useEffect } from "react";
import { getPoemsAPI } from "../../services/poetry";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";


export const Dashboard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const allPoems = useSelector((state: RootState) => state.poems.allPoems)

  useEffect(() => {
    const doFetch = async () => {
      const poemsData = await getPoemsAPI()
      dispatch(updatePoems(poemsData))
    }
    doFetch()
  })
  
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        
      </div>
    </div>
  );
};

/*{allPoemsData.map((poem) => (
  <div key={allPoems.indexOf(poem)} className="poem-card">
    <h2 className="poem-title">{poem.title}</h2>
    <p className="poem-excerpt">{poem.lines[0]}...</p>
    <button className="poem-button" >
      More
    </button>
  </div>
))}*/








