import { CardType } from "~/type/card"
import { UserGamePart } from "./userGamePart/UserGamePart"
import { PlayerDto } from "~/type/socket"

export const EnemyGamePart = ({ cardList, user, turn, setTarget }: { cardList: CardType[], user?: PlayerDto, turn: number, setTarget: (id: number) => void }) => {

    if (!user) return null

    return (
        <UserGamePart setCard={setTarget} cardList={cardList} user={user} turn={turn}></UserGamePart>
    )
}
