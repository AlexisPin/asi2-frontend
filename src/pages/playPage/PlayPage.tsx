import { SelectPlayer } from "./SelectPlayer";
import { AllyGamePart } from "./components/AllyGamePart";
import { EnemyGamePart } from "./components/EnemyGamePart";
import { ActionButtons } from "./components/actionButtons/ActionButtons";


const PlayPage = () => {
    const gameState = {
        NotStarting: {

        }
    }

    let cardList1 = [
        { "name": "name7", "description": "description7", "family": "family7", "affinity": "affinity7", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 8, "energy": 100.0, "hp": 69.85465, "defence": 62.35078, "attack": 20.590729, "price": 5055.923, "userId": 6 },
        { "name": "name1", "description": "description1", "family": "family1", "affinity": "affinity1", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 7, "energy": 100.0, "hp": 96.64132, "defence": 32.886475, "attack": 21.639204, "price": 5023.34, "userId": 6 },
        { "name": "name4", "description": "description4", "family": "family4", "affinity": "affinity4", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 9, "energy": 100.0, "hp": 99.89015, "defence": 76.53059, "attack": 18.486088, "price": 5898.136, "userId": 6 },
        { "name": "name6", "description": "description6", "family": "family6", "affinity": "affinity6", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 10, "energy": 100.0, "hp": 20.050669, "defence": 13.567281, "attack": 39.464188, "price": 3461.6426, "userId": 6 },
        { "name": "name2", "description": "description2", "family": "family2", "affinity": "affinity2", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 11, "energy": 100.0, "hp": 87.58064, "defence": 6.536448, "attack": 5.712211, "price": 3996.586, "userId": 6 },
    ]

    let cardList2 = [
        { "name": "name1", "description": "description1", "family": "family1", "affinity": "affinity1", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 7, "energy": 100.0, "hp": 96.64132, "defence": 32.886475, "attack": 21.639204, "price": 5023.34, "userId": 6 },
        { "name": "name2", "description": "description2", "family": "family2", "affinity": "affinity2", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 11, "energy": 100.0, "hp": 87.58064, "defence": 6.536448, "attack": 5.712211, "price": 3996.586, "userId": 6 },
        { "name": "name4", "description": "description4", "family": "family4", "affinity": "affinity4", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 9, "energy": 100.0, "hp": 99.89015, "defence": 76.53059, "attack": 18.486088, "price": 5898.136, "userId": 6 },
        { "name": "name6", "description": "description6", "family": "family6", "affinity": "affinity6", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 8, "energy": 100.0, "hp": 69.85465, "defence": 62.35078, "attack": 20.590729, "price": 5055.923, "userId": 6 },
        { "name": "name7", "description": "description7", "family": "family7", "affinity": "affinity7", "imgUrl": "http://medias.3dvf.com/news/sitegrab/gits2045.jpg", "smallImgUrl": "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/feature/89858/05.jpg", "id": 10, "energy": 100.0, "hp": 20.050669, "defence": 13.567281, "attack": 39.464188, "price": 3461.6426, "userId": 6 },
    ]

    // socket.on("game_state", (data) => setGameData(data))


    return (
        <>
            {('Playing' in gameState) ? (
                <>
                    <EnemyGamePart cardList={cardList1}></EnemyGamePart>
                    <ActionButtons></ActionButtons>
                    <AllyGamePart cardList={cardList2}></AllyGamePart>
                </>

            ) : (
                <SelectPlayer />
            )}
        </>
    )
}

export default PlayPage;