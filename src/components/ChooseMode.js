import {Link} from 'react-router-dom';
import {postToken} from '../requests/postToken';

export const ChooseMode = () =>{

    return(
        <div>
            <Link to ="/build_deck_mode/choose_class">
                <button>Build Deck</button>
            </Link>
            <button>Open packs</button>
            <button onClick={postToken}>get token</button>
        </div>
    )
}