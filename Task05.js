import { FaSearch } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import drone from "./drone.png";
const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: 30,
            marginTop: 10,
          }}
        >
          <b><p style={{ color: "#313130", margin: 0 }}>devign</p></b>
          <b><p style={{ color: "#F04A00", margin: 0 }}>edge</p></b>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
          <div>
            <p>Consumer</p>
            <div style={{ borderBottom: "2px solid #F04A00" }}></div>
          </div>
          <div>
            <p>Professional</p>
            <div style={{ borderBottom: "2px solid #d4d4d3" }}></div>
          </div>
          <div>
            <p>Enterprise</p>
            <div style={{ borderBottom: "2px solid #d4d4d3" }}></div>
          </div>
          <div>
            <p>Explore</p>
            <div style={{ borderBottom: "2px solid #d4d4d3" }}></div>
          </div>
          <div>
          
            <p>Support</p>
            <div style={{ borderBottom: "2px solid #d4d4d3" }}></div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 30,
            marginTop: 20,
          }}
        >
          <FaSearch style={{ height: 18, width: 18,marginTop:2,color:"#676764" }} />
          <RiDeleteBin6Line style={{ height: 20, width: 20,color:"#676764" }} />
          <IoPersonSharp style={{ height: 20, width: 20,color:"#676764" }} />
        </div>
      </div>
      <div
        style={{
          height: 30,
          width: 30,
          backgroundColor: "#B4B4B2",
          marginTop: 60,
          marginLeft: 300,
          opacity: 0.7,
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          height: 300,
          width: 300,
          backgroundColor: "#B4B4B2",
          marginBottom: 400,
          marginTop: 90,
          opacity: 0.2,
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 500,
            marginTop: 120,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", fontSize: 80 }}>
            <p style={{ color: "#313130", margin: 0 }}>
              <b>Drone</b>
            </p>
            <b>
              <p style={{ color: "#F04A00", margin: 0 }}>.</p>
            </b>
          </div>
          <p style={{ fontSize: 20, marginLeft: 2 }}>
            Fly through the sky in ways that seem impossible.
            <br />
            We never lost our passion for flying, and with DJI
            <br />
            FPV.
          </p>
          <p style={{ fontSize: 20, marginLeft: 2 }}>
            With this immersive and inituitive aerial platform,
            <br />
            get ready to go into the beyond.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 60,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 15,
              }}
            >
              <p style={{ color: "#777774", margin: 0, fontSize: 20 }}>USD</p>
              <p style={{ margin: 0 }}>$1,299</p>
            </div>
            <p
              style={{
                display: "flex",
                backgroundColor: "#F04A00",
                color: "white",
                height: 50,
                width: 180,
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <RiDeleteBin6Line style={{ height: 20, width: 20 }} />
              Buy Now
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 25,
              marginTop: 60,
            }}
          >
            <div
              style={{ width: 8, height: 8, backgroundColor: "#F04A00" }}
            ></div>
            <div
              style={{ width: 8, height: 8, backgroundColor: "#FF6700" }}
            ></div>
            <div
              style={{ width: 8, height: 8, backgroundColor: "#FF7415" }}
            ></div>
            <div
              style={{ width: 8, height: 8, backgroundColor: "#FAB972" }}
            ></div>
            <div
              style={{ width: 8, height: 8, backgroundColor: "#FED8B1" }}
            ></div>
          </div>
        </div>
        <div>
          <img
            src={drone}
            alt=" "
            style={{ width: 900, height: 600, position: "absolute" }}
          ></img>
          <div
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#F04A00",
              position: "absolute",
              marginTop: 150,
              marginLeft: 450,
              opacity: 0.6,
            }}
          ></div>
          <div
            style={{
              height: 400,
              width: 400,
              backgroundColor: "#F04A00",
              position: "absolute",
              marginTop: 200,
              marginLeft: 500,
              opacity: 0.15,
            }}
          ></div>
        </div>
      </div>
      
    </div>
  );
};
export default App;
