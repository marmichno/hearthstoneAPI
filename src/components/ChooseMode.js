import {Link} from 'react-router-dom';
import {postToken} from '../requests/postToken';

export const ChooseMode = () =>{

    return(
        <div className="chooseModeMainContainer">
            <div className="headerContainer">

                <h1>Choose mode</h1>
                <p>App made using blizzard hearthstone API</p>

                <div className="buttonsContainer">
                    <Link to ="/build_deck_mode/choose_class">
                        <button><b>Build Deck</b></button>
                    </Link>
                    <Link to ="/open_packs_mode/choose_pack">
                        <button><b>Open Packs</b></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}