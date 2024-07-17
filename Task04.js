import { FaRegDotCircle } from "react-icons/fa";
import { BiMessageCheck } from "react-icons/bi";
import { IoCloudDoneOutline } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import girl1 from "./girl1.jpg";
import girl2 from "./girl2.jpg";
import emoji1 from "./emoji1.png";
import emoji2 from "./emoji2.png";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        backgroundColor: "black",
        color: "white",
        flexDirection: "column",
        paddingTop: 40,
        paddingRight: 100,
        paddingLeft: 100,
        gap: 80,
        paddingBottom: 240,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft:70,
          marginRight:70
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            fontSize: 25,
          }}
        >
          <b>
            <p>Cranbery</p>
          </b>
          <b>
            <p style={{ color: "#8F00FF" }}>.</p>
          </b>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            backgroundColor: "#4e4e4c",
            height: 40,
            marginTop: 30,
            paddingRight: 35,
            paddingLeft: 35,
            borderRadius: 30,
            paddingTop: 5,
            paddingBottom: 5,
            alignItems: "center",
          }}
        >
          <p>Platform</p>
          <p>Price</p>
          <p>Features</p>
          <p>Community</p>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#8F00FF",
              color: "white",
              paddingRight: 25,
              paddingLeft: 25,
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 7,
              marginTop: 30,
            }}
          >
            Start For Free
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"center",
          gap:150
        }}
      >
        <div>
        <div style={{display:"flex",flexDirection:"row"}}>
          <p style={{ fontSize: 60, fontStyle: "bold", margin: 0 }}>
            Manage everything
            <br />
            without any hassle
          </p><img src={emoji1} alt="" style={{display:"flex",height:60,width:60,marginTop:98}}></img></div>
          <p>
            it is for you to find a perfect card along with detailed information
            <br />
            you want and helps you use it easily
          </p>
          <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
            <button
              style={{
                backgroundColor: "#8F00FF",
                color: "white",
                borderRadius: 8,
                width: 130,
                marginTop: 20,
                height: 50,
              }}
            >
              Start for Free
            </button>
            <FaRegDotCircle style={{ marginTop: 30, height: 30, width: 30 }} />

            <p style={{ marginTop: 33, fontSize: 17 }}>Watch Video</p>
          </div>
        </div>
        <div style={{ display: "flex", flexBasis: "row", gap: 30 }}>
          <div>
            <img
              src={girl1}
              alt=" "
              style={{ borderRadius: 100, height: 320, width: 200 }}
            ></img>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 25,justifyContent:"center" ,alignItems:"center"}}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#393832",
                border: "2px solid white",
                borderRadius: 80,
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                height: 130,
                width: 130,
              }}
            >
              <p style={{ fontSize: 25, margin: 0 }}>26%</p>
              <p style={{ margin: 0, fontSize: 15 }}>progress rate</p>
            </div>
            <div>
              <img
                src={girl2}
                alt=""
                style={{ borderRadius: 8, width: 180, height: 150 }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 200,
          justifyContent: "center"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
            <div
              style={{
                padding: 10,
                color: "black",
                backgroundColor: "#FBE106",
                borderRadius: 15,
                width: 240,
              }}
            >
              <p style={{border:"1px solid #777774",borderRadius:15,paddingLeft:12,paddingBottom:3,paddingTop:3,width:130,marginLeft:13}}><FaFire style={{marginRight:6}}/>Hot deals</p>
              <div style={{display:"flex",flexDirection:"row",gap:30,justifyContent:"center",alignItems:"center",marginLeft:20}}><img src={emoji2} alt="" style={{display:"flex",height:50,width:50,backgroundColor:"purple",borderRadius:5}}></img>
              <div><p style={{margin:0}}>30 days Free!</p>
              <p style={{margin:0}}>In yearly Premium Subscription</p></div></div>
              
            </div>
            <div
              style={{
                padding: 10,
                color: "black",
                backgroundColor: "#BCE954",
                borderRadius: 15,
                width: 240,
              }}
            >
              <p style={{border:"1px solid #777774",borderRadius:15,paddingLeft:12,paddingBottom:3,paddingTop:3,width:130,marginLeft:10}}><IoBook style={{marginRight:10}}/>Trusted</p>
              <div style={{marginLeft:20}}><p>More than</p>
              <p>15K+</p></div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              color: "black",
              width: 510,
              borderRadius: 25,
              paddingTop: 5,
              paddingLeft: 17,
              paddingBottom: 20,
              paddingRight: 20,
            }}
          >
            <p style={{ fontSize: 20,marginLeft:16 }}>
              <b>Progression Rate</b>
            </p>
            <div></div>
            <div style={{ display: "flex", flexDirection: "row", gap: 40,justifyContent:"center" }}>
             <div style={{display:"flex",flexDirection:"row",gap:15,marginLeft:0}}> <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexDirection: "column",
                  backgroundColor: "#ececec",
                  border: "1px solid #4e4e4c",
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 70,
                  height: 80,
                }}
              >
                <p style={{ margin: 0 }}>Sat</p>
                <p style={{ margin: 0, fontSize: 18 }}>09%</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexDirection: "column",
                  backgroundColor: "#8F00FF",
                  border: "1px solid #4e4e4c",
                  borderRadius: 18,
                  alignItems: "center",
                  color: "white",
                  justifyContent: "center",
                  width: 70,
                  height: 80,
                }}
              >
                <p style={{ margin: 0 }}>Sat</p>
                <p style={{ margin: 0, fontSize: 18 }}>10%</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexDirection: "column",
                  backgroundColor: "#ececec",
                  border: "1px solid #4e4e4c",
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 70,
                  height: 80,
                }}
              >
                <p style={{ margin: 0 }}>Sat</p>
                <p style={{ margin: 0, fontSize: 18 }}>10%</p></div>
              </div>{" "}
              <div style={{ borderRight: "1px solid black" }}></div>
              <div style={{ alignItems: "center", marginTop: 8 }}>
                <p style={{ fontSize: 30, margin: 0 }}>+26%</p>
                <p style={{ color: "#a0a09d", margin: 0 }}>
                  From last three days
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "black",
            border: "2px solid #4e4e4c",
            borderColor: "white",
            borderRadius: 17,
            height: 300,
            padding: 20,
            width: 360,
          }}
        >
          <p style={{ fontSize: 30, margin: 0 }}>Features</p>
          <div style={{ borderBottom: "1px solid white", marginTop: 12 }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FBE106",
                  borderRadius: 50,
                  height: 40,
                  width: 40,
                  color: "black",
                  marginTop: 60,
                }}
              >
                <BiMessageCheck
                  style={{ height: 20, width: 20, marginBottom: 0 }}
                />
              </div>
              <p>Invite Team</p>
              <p style={{ margin: 0, fontSize: 12 }}>
                Can collaborate with your
                <br />
                team member
              </p>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#BCE954",
                  borderRadius: 50,
                  height: 40,
                  width: 40,
                  color: "black",
                  marginTop: 60,
                }}
              >
                <IoCloudDoneOutline
                  style={{ height: 20, width: 20, marginBottom: 3 }}
                />
              </div>
              <p>Cloud Save</p>
              <p style={{ margin: 0, fontSize: 12 }}>
                You can save your file in
                <br />
                our cloud server
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
