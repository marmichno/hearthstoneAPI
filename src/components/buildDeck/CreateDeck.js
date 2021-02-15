import {ShowCards} from './ShowCards';
import {Deck} from './Deck';

export const CreateDeck = (state) =>{

    const choosenClass = state.location.state.class;

    return(
        <div className="createDeckMainContainer">
            <ShowCards choosenClass={choosenClass}/>
            <Deck/>
        </div>
    )
}