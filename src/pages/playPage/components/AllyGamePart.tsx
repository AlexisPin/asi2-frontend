import { CardType } from "~/type/card"
import { UserGamePart } from "./userGamePart/UserGamePart"
import { PlayerDto } from "~/type/socket"

export const AllyGamePart = ({ cardList, user, turn,setAttack }: { cardList: CardType[], user?: PlayerDto, turn : number, setAttack : (id: number) => void}) => {

    if (!user) return null

    return (
        <UserGamePart setCard={setAttack}  cardList={cardList} user={user} turn={turn}></UserGamePart>
    )
}
