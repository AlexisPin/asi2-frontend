import { CardType } from "~/type/card"
import { UserGamePart } from "./userGamePart/UserGamePart"
import { PlayerDto } from "~/type/socket"

export const AllyGamePart = ({ cardList, user }: { cardList: CardType[], user?: PlayerDto}) => {

    if (!user) return null

    return (
        <UserGamePart cardList={cardList} user={user}></UserGamePart>
    )
}
