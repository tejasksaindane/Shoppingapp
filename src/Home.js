import React from 'react'
import "./Home.css"
import Product from "./Product"
import video1  from "./Aakruti/samsung.mp4"

const Home = () => {
    return (
        <div className="home">

            <div className="home__container">
                <img className= "home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/vivo/2021/Jan/GW/Carnival/D19959167_WL_VIVO_carnival_Jan_Tall_Hero_1500x600._CB411131795_.jpg" alt=""/>
            </div>

            <div className="home__row">
                {/* product 2*/}
                <Product className="home__expand" title="Google Pixel 5 5G (Sorta Sage, 8GB RAM, 128GB Storage)" 
                price={ 69750}
                image="https://m.media-amazon.com/images/I/71tkGDmhN3L._AC_UY327_FMwebp_QL65_.jpg"
                rating={4}
                />
                <Product className="home__expand" title="OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)" 
                price={29999}
                image="https://images-na.ssl-images-amazon.com/images/I/61xeAF6pAoL._SL1500_.jpg"
                rating={4}
                />
                <Product className="home__expand" title="Samsung Galaxy Note 20 Ultra 5G (Mystic Black, 12GB RAM, 256GB Storage) with No Cost EMI" 
                price={104999}
               image="https://images-na.ssl-images-amazon.com/images/I/816LQ5R1iOL._SL1500_.jpg"
                rating={5}
                />
                <Product className="home__expand" title="New Apple iPhone 12 Mini (128GB) - Blue" 
                price={79800}
                image="https://m.media-amazon.com/images/S/gladiator-image-upload-prod/1/A21TJRUUN4KGV/d51449d041d09be535d419cea244c9a0._CR0,0,400,400_AC_SL180_QL70_.jpg"
                rating={5}
                />
            </div>
             
            <div className="home__row">
                <Product title="CEYLONMINE Silver and American Diamond Couple Ring for Unisex-adult (White)"
                price={5698}
                image="https://images-na.ssl-images-amazon.com/images/I/51jhgfOSffL._UL1100_.jpg"
                rating={3}
                />
                <Product title="Peora Silver Plated 2 Pcs His and Her Heart Shape Matching Promise Couple Rings "
                price={7491}
                image="https://images-na.ssl-images-amazon.com/images/I/719DUKaMV5L._UL1500_.jpg"
                rating={4}
                />
                <Product title="Mahi Rhodium Plated Couple Ring Set With Cubic Zirconia and Crystal FRCO1103032R"
                price={8750}
                image="https://images-na.ssl-images-amazon.com/images/I/71hrBgK8-gL._UL1500_.jpg"
                rating={2}
                />
                <Product title="Dc Jewels Sterling Silver Couple Ring For Men & Women"
                price={11999}
                image="https://images-na.ssl-images-amazon.com/images/I/61YA%2BaBA6wL._UL1200_.jpg"
                rating={4}
                />
            </div>

            <div className="home__row">
                <Product title="Fossil Grant Chronograph Analog Black Dial Men's Watch - FS4832"
                price={14000}
                image="https://images-na.ssl-images-amazon.com/images/I/71GhdYtz8cL._UL1500_.jpg"
                rating={4}
                />
                <Product title="Titan Neo Iv Analog Black Dial Men's Watch NM1805NM01 / NL1805NL01"
                price={12999}
                image="https://images-na.ssl-images-amazon.com/images/I/710zxbTsuVL._UL1500_.jpg"
                rating={3}
                />
                <Product title="Fastrack 38044PP01 Trendies Analog Watch - For Men"
                price={8600}
                image="https://m.media-amazon.com/images/I/71CEEzbDS-L._AC_UL480_FMwebp_QL65_.jpg"
                rating={4}
                />
                <Product title="Lamkei Army Black Blue Analouge Digital Blue Silicon Strap Sport Watch for Men- CB-1030"
                price={3500}
                image="https://images-na.ssl-images-amazon.com/images/I/91v2ujz-QCL._UX522_.jpg"
                rating={2}
                />    
            </div>

          <div className="home__row">
             <div className="home__video">
                <video className ="home__video" src={video1} autoPlay muted ></video>    
            </div>
          </div>

        </div>
    )
}



export default Home;