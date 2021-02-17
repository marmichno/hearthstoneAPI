import {ShowCards} from './ShowCards';
import {Deck} from './Deck';

export const CreateDeck = (state) =>{

    const choosenClass = state.location.state.class;
    const classIndex = state.location.state.index

    return(
        <div className="createDeckMainContainer">
            <ShowCards choosenClass={choosenClass} classIndex={classIndex}/>
            <Deck classIndex={classIndex}/>
        </div>
    )
}