import React,{Component} from 'react';
import S1 from './Image/ss1.webp';
import S2 from './Image/ss2.webp';
import S3 from './Image/ss3.webp';
import A1 from './Image/a1.webp';
import A2 from './Image/a2.webp';
import A3 from './Image/a3.png';
import A4 from './Image/a4.webp';
import A5 from './Image/a5.webp';
import A6 from './Image/a6.webp';
import './css/slider.css';
class Slider  extends Component {
  state ={
    Slide : [
        {Img : S2},
        {Img : S3},
        
      ],
      List :[
        {Img : A1},
        {Img : A2},
        {Img : A3},
        {Img : A4},
        {Img : A5},
        {Img : A6},
      ],
      No: [
        
        {no : "0"},
        {no : "1"},
        {no : "2"},
      
      ]
  };
  render(){
        const newSlide = this.state.Slide.map( slide => {
              return(
                <div class="carousel-item ">
                <img src={slide.Img} class="d-block w-100"  alt="First slide"></img>
              </div>
                
              );
          });
          const newNo = this.state.No.map( no => {
            return(
              <li data-target="#carouselExampleIndicators" data-slide-to={no.no}></li>
            );
        });
        const newList = this.state.List.map( list => {
          return(
            <img id="img3" src={list.Img} alt="hello"></img>
          );
      });
    return (
      <div class = "container-fluid mt-3"  >
<div class="row">
<div class="col-10 offset-1 mt-3 mb-4">
<div id="Category">
{newList}
</div>
</div>

<div class="col-10 offset-1 mt-3 mb-4">
      <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          {newNo}


        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={S1} class="d-block image w-100"  alt="First slide"></img>
          </div>
         {newSlide}
      

        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
</div></div>
      </div>

          );
      }
    }
      export default Slider;
