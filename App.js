import { HiBars2 } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        paddingLeft: "60px",
        paddingRight: "60px",
        paddingBottom: "200px",
        paddingTop: "50px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <p style={{ margin: 0 }}>
            <b>Lyf_)</b>
          </p>{" "}
          <p style={{ margin: 0 }}>/insurance@tiropay.au</p>
        </div>
        <div style={{ display: "flex", gap: 15 }}>
          <button
            style={{
              backgroundColor: "white",
              borderRadius: "50px",
              height: "40px",
              padding: "10px",
              width: "90px",
            }}
          >
            Log In
          </button>
          <button
            style={{
              backgroundColor: "black",
              borderRadius: "50px",
              color: "white",
              height: "40px",
              padding: "10px",
              width: "100px",
            }}
          >
            Get Started
          </button>
          <HiBars2 style={{ paddingTop: 10 }} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ margin: 0, fontSize: "40px", marginTop: "60px" }}>
          <b>
            Life planning, Making
            <br />
            Easy to Turn Dream a Reality.
          </b>
        </p>
        <p>Get exclusive offers on purchase of any plans</p>
        <div style={{ display: "flex", gap: 10, marginTop: 25 }}>
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              alignItems:'center',
              border:"1px solid black",
              borderRadius:20,
              width:250,
              paddingLeft:20,
              gap:8
            }}
          >
            <MdOutlineMail />
            <input placeholder="your email" style={{border:"none"}} />
          </div>
          <button
            style={{
              backgroundColor: "black",
              borderRadius: "50px",
              color: "white",
              height: "40px",
              padding: "10px",
              width: "100px",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <p style={{ fontSize: "30px" }}>
          <b>Featured plans</b>
        </p>
        <p>Explore All</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#75BC84",
            height: "250px",
            width: "250px",
            borderRadius: "25px",
            padding: 30,
          }}
        >
          <p style={{ color: "#4e4e4c", fontWeight: "bold", fontSize: 12 }}>
            STRATEGY
          </p>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>Money Momentum</p>
          <p>
            Tract premium helps you start 
            <br />
            saver investment insights covering.
          </p>
          <div style={{ borderBottom: "1px solid #4e4e4c" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: 12, color: "#4e4e4c" }}>3 yrs CAGR</p>
              <p><b>7.20%</b></p>
            </div>
            <div>
              <FaArrowRight
                style={{
                  marginTop: 38,
                  paddingLeft: 40,
                  border: "0px solid black",
                  borderRadius: "20%",
                  padding: 8,
                  backgroundColor: "white",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            height: "250px",
            width: "250px",
            borderRadius: "25px",
            padding: 30,
          }}
        >
          <p style={{ color: "#4e4e4c", fontWeight: "bold", fontSize: 12 }}>
            PLANS
          </p>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>Long-Term</p>
          <p>
            Create a vision. To get started, 
            <br />
            saver your dream life.
          </p>
          <div style={{ borderBottom: "1px solid #4e4e4c" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: 12, color: "#4e4e4c" }}>25 yrs CAGR</p>
              <p><b>14.20%</b></p>
            </div>
            <div>
              <FaArrowRight
                style={{
                  marginTop: 38,
                  paddingLeft: 40,
                  border: "0px solid black",
                  borderRadius: "20%",
                  padding: 8,
                  backgroundColor: "white",
                  color: "black",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#AF69EF",
            height: "250px",
            width: "250px",
            borderRadius: "25px",
            padding: 30,
          }}
        >
          <p style={{ color: "#4e4e4c", fontWeight: "bold", fontSize: 12 }}>
            STRATEGY
          </p>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>Focussed</p>
          <p>
            Be focused Life planning. however, 
            <br />
            can serve as a roadmap or guide.
          </p>
          <div style={{ borderBottom: "1px solid #4e4e4c" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: 12, color: "#4e4e4c" }}>1 yr returns</p>
              <p><b>11.20%</b></p>
            </div>
            <div>
              <FaArrowRight
                style={{
                  marginTop: 38,
                  paddingLeft: 40,
                  border: "0px solid black",
                  borderRadius: "20%",
                  padding: 8,
                  backgroundColor: "white",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#FFF600",
            height: "250px",
            width: "250px",
            borderRadius: "25px",
            padding: 30,
          }}
        >
          <p style={{ color: "#4e4e4c", fontWeight: "bold", fontSize: 12 }}>
            PLANS
          </p>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>Fixed Income</p>
          <p>
            Get multiple benefits and lumpsum
            <br />
            options & Guartanteed Returns
          </p>
          <div style={{ borderBottom: "1px solid #4e4e4c" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ fontSize: 12, color: "#4e4e4c" }}>5 yrs CAGR</p>
              <p><b>8.20%</b></p>
            </div>
            <div>
              <FaArrowRight
                style={{
                  marginTop: 38,
                  paddingLeft: 40,
                  border: "0px solid black",
                  borderRadius: "20%",
                  padding: 8,
                  backgroundColor: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid #999DA0", margin: "30px" }}></div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <p>Terms Policy Customer Story</p>
        <FaArrowRight
          style={{
            paddingLeft: 40,
            border: "1px solid black",
            borderRadius: "50%",
            padding: 8,
          }}
        />
      </div>
    </div>
  );
};
export default App;
