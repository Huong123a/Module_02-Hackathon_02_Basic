import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Reviews TA Béc Cọp</h1>
        <div className="search">
          <input type="text" placeholder="search here..." />
          <button>Search</button>
        </div>
      </div>
      <div className="content">
        <div className="card bg-sub">
          <textarea
            className="bg-sub"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <div className="desc">
            <p>date</p>
            <button>
              Remove <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
        <div className="card ">
          <textarea
            className="bg-main"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <div className="desc">
            <p>200 left</p>
            <button>
              ADD <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
