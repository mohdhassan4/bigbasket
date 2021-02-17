import React, {Component} from 'react';
import S1 from './Image/s1.webp';
import S2 from './Image/s2.webp';
import S3 from './Image/s3.webp';
import S4 from './Image/s4.webp';
import S5 from './Image/s5.webp';
import S6 from './Image/s6.webp';

class Slider  extends Component {
  state ={
      Slide: [
        
        {Img : S2},
        {Img : S3},
        {Img : S4},
        {Img : S1},
        {Img : S6},
      ],
      No: [
        
        {no : "0"},
        {no : "1"},
        {no : "2"},
        {no : "3"},
        {no : "4"},
        {no : "5"},
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
        return (
          <div class = "container-field mt-3"  >
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                {newNo}
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                 <img src={S5} class="d-block w-100"  alt="First slide"></img>
                </div>
                {newSlide}
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

          </div>

          );
      }
    }
      export default Slider;
