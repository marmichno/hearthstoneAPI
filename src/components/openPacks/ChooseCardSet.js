import { useEffect, useState } from 'react';
import { getSets } from '../../requests/getSets';
import { useHistory } from 'react-router-dom';
import darkmoonFaire from '../../resources/images/cardPacks/madness-at-the-darkmoon-faire.png';
import scholomanceAcademy from '../../resources/images/cardPacks/scholomance-academy.png';
import ashesOfOutland from '../../resources/images/cardPacks/ashes-of-outland.png';
import descentOfDragons from '../../resources/images/cardPacks/descent-of-dragons.png';
import saviorsOfUldum from '../../resources/images/cardPacks/saviors-of-uldum.png';
import riseOfShadows from '../../resources/images/cardPacks/rise-of-shadows.png';
import rastakhansRumble from '../../resources/images/cardPacks/rastakhans-rumble.png';
import theBoomsdayProject from '../../resources/images/cardPacks/the-boomsday-project.png';
import theWitchwood from '../../resources/images/cardPacks/the-witchwood.png';
import koboldsAndCatacombs from '../../resources/images/cardPacks/kobolds-and-catacombs.png';
import knightsOfTheFrozenThrone from '../../resources/images/cardPacks/knights-of-the-frozen-throne.png';
import journeyToUngoro from '../../resources/images/cardPacks/journey-to-ungoro.png';
import meanStreetsOfGadgetzan from '../../resources/images/cardPacks/mean-streets-of-gadgetzan.png';
import whispersOfTheOldGods from '../../resources/images/cardPacks/whispers-of-the-old-gods.png';
import theGrandTournament from '../../resources/images/cardPacks/the-grand-tournament.png';
import goblinsVsGnomes from '../../resources/images/cardPacks/goblins-vs-gnomes.png';
import classic from '../../resources/images/cardPacks/classic.png';

export const ChooseCardSet = () => {

    const [sets, setSets] = useState(undefined);
    let history = useHistory();

    const packsImages = 
    [darkmoonFaire, scholomanceAcademy, ashesOfOutland, descentOfDragons, saviorsOfUldum, riseOfShadows, rastakhansRumble,
    theBoomsdayProject, theWitchwood, koboldsAndCatacombs, knightsOfTheFrozenThrone, journeyToUngoro, meanStreetsOfGadgetzan, 
    whispersOfTheOldGods, theGrandTournament, goblinsVsGnomes, classic]

    useEffect( async () => {
        const getSetsResponse = await getSets();
        setSets(getSetsResponse);
        console.log(getSetsResponse);
    }, []);

    const choosePack = (e) => {
        const id = e.target.dataset.index;

        const location = {
            pathname: '/choose_card_set/open_packs',
            state: {
                set: sets[id],
                cardPack: packsImages[id]
            }
        }
        
        history.push(location);
    }


    if(sets !== undefined){
        return(
            <div className="packExpansionMainContainer">
                <div className="chooseExpansionContainer">
                    {
                        sets.map((value, index) => {

                            return  <div key={index} data-index={index} className="setContainer">
                                        <div 
                                            data-index={index} 
                                            onClick={choosePack}
                                            className= "setImage"
                                            style = {{backgroundImage: `url(${packsImages[index]})`}}>
                                        </div>
                                        <div 
                                            data-index={index} 
                                            onClick={choosePack}
                                            className="setName">{sets[index].name}
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }else{
        return null;
    }
}