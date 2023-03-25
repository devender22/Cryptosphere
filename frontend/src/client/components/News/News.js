import { React,useEffect,useState } from "react";
import Tile from "./Tile";
import axios from "axios";
import Navbar from "../Navbar";
import BackToTopButton from "../BackToTopButton";
import Footer from "../Footer";
function News() {

    const [resdata,setResdata]=useState([]);
  function getNews(){
    var url = "https://newsapi.org/v2/everything?q=ethereum&apiKey=2d65f1e441a94520b9177287ea1c3ace&searchIn=title&language=en&sortBy=publishedAt";
    axios
      .get(url)
      .then((response) => {
        var articles=response.data.articles;
        // console.log(articles);
        let arr=[];
        const newsSet = new Set();

        let idx=0;
        let count=0;

        while(count<5){
          if(!newsSet.has(articles[idx].title)){
            newsSet.add(articles[idx].title);
            arr.push(articles[idx]);
            count++;
          }
          idx++;
        }
        setResdata(resdata.concat(arr));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(getNews,[]);

  return (
    <div id="action5" className="Main">
      <Navbar c={4}></Navbar>
      <h3 className="section-heading" style={{ width: "6%" }}>
        News
      </h3>
      <div className="tile-group">
        {
            resdata.map((article,index)=>{
                return (<Tile key={index} full={article.url} title={article.title} img={article.urlToImage} content={article.content} time={article.publishedAt} source={article.source.name}></Tile>)
            })
        }

      </div>
      <Footer></Footer>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default News;
