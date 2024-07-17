import { FaArrowRight } from "react-icons/fa";
import ari from "./ari1.jpg";
import bw from "./bw.png";
import phil from "./phil.png";

const App = () => {
  return (
    <div
      style={{
        height:"100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: 40,
        paddingRight: 100,
        paddingLeft: 130,
        
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 270,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontSize: 25 ,margin:0}}>
            <b>Architk</b>
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 80 }}>
          <p>Home</p>
          <p>Features</p>
          <p>Services</p>
          <p>Project</p>
          <p>About</p>
          <b><p
            style={{
              display: "flex",
              marginLeft: 60,
              border: "1px solid black",
              height: 35,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
              paddingBottom:5
            }}
          >
            Sign in
          </p></b>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{direction:"flex"}}>
          <b>
            <p style={{ fontSize: 90, margin: 0,marginTop:40 }}>
              Have your first
              <br /> memorable
              <br />
              experience
            </p>
          </b>
          <p style={{ margin: 0, color: "#8C8C89",marginTop:20 ,fontSize:20}}>
            Monima NFT Marketplace brings artists and creators
            <br />
            together on a single platform
          </p>
          <div style={{
            border: "2px solid black",
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop:40,
            width:300,
            gap:100
          }}>
          <p style={{fontSize:18}}>
            Get early access
          </p>
          <FaArrowRight style={{backgroundColor:"black",color:"white",height:25,width:25,padding:10}}/></div>
        </div>
        <div style={{paddingRight:20}}><img src={bw} alt=" " style={{position:"absolute",marginTop:120}}/><img src={phil} alt=" " style={{position:"relative",marginLeft:40,height:650}}/></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap:50
        }}
      >
        <div>
          <p style={{margin:0,fontWeight:"bold",fontSize:28,marginTop:60}}>
            Monima NFT Marketplace
            <br />
            Brings Artists And
            <br />
            Creators.
          </p>
        </div>
        <div><img src={ari} alt="" style={{height:200,width:400,marginTop:100}}></img></div>
        <div>
          <p style={{color:"#8C8C89",fontSize:20,marginTop:60}}>
            Lorem ipsum dolor sit a consectetur
            <br />
            adipiscing elit, sed do eiusmod test
            <br />
            tempor lorem ipsum dolor sit lorem
            <br />
            ipsum dolor sit
          </p>
        </div>
      </div>
    </div>
  );
};
export default App;
