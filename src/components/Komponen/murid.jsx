import React, {useState} from 'react'
import '../../assets/css/murid.css'
import CircleStat from './circleStat';
import MuridDetail from './muridDetail';

const murids = [
    { name: 'Fika Nafiyah', days: 26 },
    { name: 'Ridwan Kamil', days: 16 },
    { name: 'Ayu Nindiya', days: 7 },
    { name: 'Riski Ridho', days: 12 },
    { name: 'Syafana Adib', days: 29 }
  ];

const Murid = () => {

    const [selectedMurid, setSelectedMurid] = useState(null);

    const handleCardClick = (murid) => {
        setSelectedMurid(murid);
    };

    const handleBackClick = () => {
        setSelectedMurid(null);
    };

  return (
    <div>

    <div className="murid-page">
      {selectedMurid ? (
        <div className="murid-detail">
          <button className="muridbtn" onClick={handleBackClick}>Back</button>
          <h4 className='fw-bold'>{selectedMurid.name}</h4>
          <p>Days: {selectedMurid.days}</p>
          <p>Dates: 1 - 28 July 2022</p>
          <MuridDetail/>
        </div>
      ) : (
        <div className="murid-list">
          {murids.map((murid, index) => (
            <div 
              key={index} 
              className="murid-card" 
              onClick={() => handleCardClick(murid)}
            >
              <CircleStat days={murid.days} />
              <div className="murid-name">{murid.name}</div>
              <div className="murid-dates">1 - 28 July 2022</div>
            </div>
          ))}
        </div>
      )}
    </div>
      
    </div>
  )
}


export default Murid
