import "./WorkExperience.css";

const WorkExperience = () => {

  const items = JSON.parse(import.meta.env.VITE_WORK_EXPERIENCE)

  return (
    <div className="work-experience">
      <h1 className="header">Work Experience</h1>
      <div className="work-items">
        {items.map((item) => (
          <div className="item" key={Math.random()}>
            <img src={`/images/${item.image}`} alt="logo" className="logo" />
            <div className="item-content">
              <div className="item-header">
                <h2 className="no-margin">{item.title}</h2>
                <h4 className="no-margin">{item.company}</h4>
                <p className="no-margin text-muted">{item.date}</p>
              </div>
              <p className="no-margin">{item.description}</p>
            </div>
          </div>
        ))}
      </div>  
    </div>    
  );
};

export default WorkExperience;
