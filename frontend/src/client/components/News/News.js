import {React} from 'react';
import Tile from './Tile';
function News(){
    return(
        <div id="action5">
            <h3 className="section-heading">News</h3>
            <div className="tile-group">
                <Tile></Tile>
                <Tile></Tile>
                <Tile></Tile>
            </div>
        </div>
    )
}

export default News;