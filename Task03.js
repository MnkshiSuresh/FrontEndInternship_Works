import sc from "./sc.png";
import { TiTick } from "react-icons/ti";
import { FaApple } from "react-icons/fa";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F9DCC5",
        paddingTop: 40,
        paddingRight: 100,
        paddingLeft: 100,
        paddingBottom: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap:650
        }}
      >
        {" "}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={sc}
            alt=""
            style={{ height: 40, width: 40, marginTop: 8 }}
          />
          <p>/hello@dmat.bank</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <p>iBanking</p>
          <p>Payment</p>
          <p>Account</p>
          <div
            style={{
              width: 160,
              height: 60,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "black",
              color: "white",
              borderRadius: 10,
              gap: 10,
              justifyContent: "center",
            }}
          >
            <FaApple style={{ height: 40, width: 40, marginTop: 6 }} />
            <div style={{ marginTop: 5 }}>
              <p
                style={{
                  margin: 0,
                  marginTop: 6,
                  marginRight: 10,
                  fontSize: 11,
                }}
              >
                Download on the
              </p>
              <p style={{ margin: 0, fontSize: 15 }}>
                <b>App Store</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
          marginTop: 40,
          marginLeft: 100,
        }}
      >
        <div style={{ fontSize: 60, fontWeight: "bolder", marginTop: 4 }}>
          10
        </div>
        <div style={{ margin: 0, marginLeft: 15, fontSize: 20 }}>
          <p>
            Years of
            <br />
            Excellence in Finance
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap:350,
          width: "100%",
        }}
      >
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              display: "flex",
              position: "absolute",
              backgroundColor: "#E5A186",
              borderRadius: "50%",
              height: 460,
              width: 460,
              marginLeft:70
            }}
          ></div>
          <div
            style={{
              display: "flex",
              position: "relative",
              color: "black",
              flexDirection: "column",
              marginTop: 100,
              gap: 15,
              marginLeft: 100,
            }}
          >
            <p style={{ fontWeight: "bold", margin: 0 }}>----Net Banking</p>
            <p style={{ fontWeight: "bold", fontSize: 60, margin: 0 }}>
              Demat.Bank
            </p>
            <p style={{ margin: 0, fontSize: 60 }}>Lithuania</p>
            <div>
              <p
                style={{
                  display: "flex",
                  margin: 0,
                  backgroundColor: "black",
                  color: "white",
                  height: 40,
                  width: 150,
                  marginTop: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 6,
                  marginBottom: 6,
                }}
              >
                Learn Now--
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            height: 400,
            width: 350,
            backgroundColor: "black",
            color: "white",
            borderRadius: 15,
            display: "flex",
            flexDirection: "column",
            paddingTop: 30,
            paddingLeft: 30,
            paddingRight: 30,
            marginTop:50
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold", fontSize: 25 }}>
            Login Now
          </p>
          <p style={{ marginTop: 20 }}>Customer ID</p>
          <div
            style={{ borderRadius: 5, width: 300, height: 40, marginTop: 20 ,backgroundColor:"white",color:"black"}}
          ><p>490.892.812-007</p><TiTick style={{color:"green",backgroundColor:"#4FC978", marginLeft:270,marginTop:10,borderRadius:"50%",width:20,height:20}}/></div>
          <input
            placeholder="Enter passcode"
            style={{ borderRadius: 5, width: 300, height: 40, marginTop: 20 }}
          />
          <p>By login you agree to our terms and conditions</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              style={{
                backgroundColor: "#E5A186",
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 20,
                paddingRight: 10,
                borderRadius: 7,
                width: 170,
                height: 40,
                marginTop:20
              }}
            >
              Login Now ---
            </button>
            <p style={{color:"#E5A186",textDecoration:"underline",marginLeft:30,marginTop:30}}>Forgot Password</p>
          </div>{" "}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap:760,
          width: "100%",
          marginTop: 40,
          justifyContent:"center",
          alignItems:"center",
          color:"#3944bc"
        }}
      >
        <p>Terms & Conditions | Privacy Policy</p>
        <p> Instagram | Facebook</p>
      </div>
    </div>
  );
};
export default App;
