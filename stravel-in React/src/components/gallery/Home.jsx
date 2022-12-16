import React from "react";
import { Link } from "react-router-dom";
 class Home extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       error: null,
       isLoaded: false,
       HomeHeading: [],
       HomeBox: [],
       Homelink: "",
     };
   }
   componentDidMount() {
     fetch("https://apiforstravel.herokuapp.com/gallery")
       .then((res) => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             HomeHeading: result.HomeHeading,
             HomeBox: result.HomeBox,
             Homelink: result.Homelink,
           });
         },
         (error) => {
           this.setState({
             isLoaded: true,
             error,
           });
         }
       );
   }
   render() {
     return (
       <section className="gallery" id="home">
         <h1 className="heading">
           {this.state.HomeHeading.map((HomeHeading) => {
             return (
               <span key={HomeHeading.id} className={HomeHeading.className}>
                 {HomeHeading.text}
               </span>
             );
           })}
         </h1>
         <div className="box-container">
           {this.state.HomeBox.map((HomeBox) => {
             return (
               <Link to={this.state.Homelink} className="box" key={HomeBox.id}>
                 <img src={HomeBox.src} alt={HomeBox.h3} />
                 <div className="content">
                   <h3>Tổng hợp</h3>
                   <p>Tổng hợp những bức ảnh</p>
                   <p>đẹp nhất của Stravel</p>
                 </div>
               </Link>
             );
           })}
         </div>
       </section>
     );
   }
 }

export default Home