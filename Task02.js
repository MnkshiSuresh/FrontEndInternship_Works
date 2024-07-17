import mon from "./mon.png";
import drop from "./drop.png";
import ncr from "./ncr.png";
import phi from "./phi.png";
import up from "./up.png";
import icon from "./icon.jpeg";
import call from "./call.jpeg";
import boat from "./boat.jpeg";
import arrow from "./arrow.jpeg";
import teamwork from "./teamwork.jpeg";

import { AiFillSlackCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        paddingTop: 19,
        paddingBottom: 120,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#f4f4f4",
        
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <AiFillSlackCircle
              style={{ height: 20, width: 20, marginTop: 18 }}
            />
            <p>/ hello@essential.io</p>
          </div>
        </div>
        <div>
          <p>Product . Resources . Our Work</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <p>FAQ</p>
          <button
            style={{ borderRadius: 30, width: 140, height: 40, marginTop: 8 }}
          >
            Download API
          </button>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #d4d4d3", marginTop: 10 }}></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 30,
          textAlign: "center",
        }}
      >
        <p>__API INTEGRATION__</p>
        <p style={{ fontSize: 57, margin: 0 ,fontFamily: 'Cormorant, serif' }}>
          The Essential API That Help
          <br />
          Connecting the Team
        </p>
        <p>
          A platform delivering ultra-fast, dynamic & personalised project
          experiences.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 30,
            marginTop: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              height: 140,
              width: 200,
              borderRadius: 20,
            }}
          >
            <div
              style={{
                height: 20,
                width: 20,
                border: "0.7px solid #d4d4d3",
                borderRadius: 7,
                display: "flex",
                marginLeft: 140,
              }}
            ></div>
            <img src={icon} alt="" style={{ height: 60, width: 60 }} />
            Group Chat
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              height: 140,
              width: 200,
              borderRadius: 20,
            }}
          >
            <div
              style={{
                height: 20,
                width: 20,
                border: "0.7px solid #d4d4d3",
                borderRadius: 7,
                display: "flex",
                marginLeft: 140,
              }}
            ></div>
            <img src={arrow} alt="" style={{ height: 60, width: 60 }} />
            Instant Mail
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              height: 140,
              width: 200,
              borderRadius: 20,
            }}
          >
            <div
              style={{
                height: 20,
                width: 20,
                border: "0.7px solid #d4d4d3",
                borderRadius: 7,
                display: "flex",
                marginLeft: 140,
                backgroundColor: "black",
              }}
            >
              <TiTick
                style={{ color: "white", marginLeft: 2.5, marginTop: 2 }}
              />
            </div>
            <img src={boat} alt="" style={{ height: 60, width: 60 }} />
            File Boat
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              height: 140,
              width: 200,
              borderRadius: 20,
            }}
          >
            <div
              style={{
                height: 20,
                width: 20,
                border: "0.7px solid #d4d4d3",
                borderRadius: 7,
                display: "flex",
                marginLeft: 140,
              }}
            ></div>
            <img src={call} alt="" style={{ height: 60, width: 60 }} />
            Call Manage
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              height: 140,
              width: 200,
              borderRadius: 20,
            }}
          >
            <div
              style={{
                height: 20,
                width: 20,
                border: "0.7px solid #d4d4d3",
                borderRadius: 7,
                display: "flex",
                marginLeft: 140,
              }}
            ></div>
            <img src={teamwork} alt="" style={{ height: 60, width: 60 }} />
            Teamwork
          </div>
        </div>
        <button
          style={{
            backgroundColor: "black",
            borderRadius: 40,
            color: "white",
            height: 50,
            width: 200,
            marginTop: 50,
          }}
        >
          Get Started -- It's Free
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 70,
            marginTop: 30,
          }}
        >
          <p style={{ display: "flex", gap: 10 }}>
            <TiTick style={{ marginTop: 3 }} />
            Free Signup
          </p>
          <p style={{ display: "flex", gap: 10 }}>
            <TiTick style={{ marginTop: 3 }} />
            No Credit Card Required
          </p>
          <p style={{ display: "flex", gap: 10 }}>
            <TiTick style={{ marginTop: 3 }} />
            Cancel Anytime
          </p>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #d4d4d3", marginTop: 10 }}></div>
      <div
        style={{
          display: "flex",
          gap: 130,
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <img
          src={ncr}
          alt=""
          style={{ width: 100, height: 30, marginTop: 10 }}
        />
        <img src={mon} alt="" style={{ width: 110, height: 60 }} />
        <img
          src={phi}
          alt=""
          style={{ width: 130, height: 35, marginTop: 10 }}
        />
        <img src={drop} alt="" style={{ width: 120, height: 50 }} />
        <img
          src={up}
          alt=""
          style={{ width: 100, height: 30, marginTop: 10 }}
        />
      </div>
    </div>
  );
};
export default App;
