import React from 'react';
import Navbar from './Navbar';


function Blog() {
  return (
    <div className="col-lg-12">
    <div className="BlogPage">
      <div className="row">
        {/*1st column*/}
        <div className="col-lg-3">
        <h5>Harrison Favour</h5>
        <Navbar></Navbar>
        </div>
        {/*1st column ends*/}
         {/*2nd column*/}
        
          <div className="col-lg-7">
          <div className="letstalk">
          <a class="btn btn-primary" href="https://gmail.com" role="button">Let's Talk</a>
          </div>
          <div className="BlogContent">
          <div className="vl"></div>
          <div className="col-lg-11">
            <h1>Blog</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras lectus magna sodales aenean 
              condimentum auctor aliquet.In eros sed malesuada sit. Orci, potenti adipiscing pharetra, ut nunc amet
                eget. 
              Imperdiet vel nisl nisl elit morbi tincidunt turpis convallis elementum.
              </p>
              <div className="cardBody">
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="..." alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Dynamo</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <a href="https://www.medium.com" className="Read">
                     Read
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src="..." alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Dynamo</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <a href="https://www.medium.com" className="Read">
                      Read
                    </a>
                  </div>
                </div>
                </div>
                <div className="more">
                <a href="https://www.medium.com" className="MoreArticles">
                      More Articles</a>
                      </div>
          </div> 
          </div>
          </div>
      {/*2nd column ends*/}
       {/* 3rd column */}
       <div className="col-lg-2">
            <div className="App_right_sidebar">
            
            <a href="https://github.com"><i class="fa fa-github"></i></a>
            <a href="https://twitter.com"><i class="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/feed/"><i class="fa fa-linkedin"></i></a>
            <a href="https://gmail.com"><i class="fa fa-envelope"></i></a>
            </div>
        </div>
        {/*3rd column ends*/}
      </div>
    </div>
    </div>
  );
}

export default Blog
