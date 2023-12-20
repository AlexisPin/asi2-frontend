import { CardType } from "~/type/card"
import { UserGamePart } from "./userGamePart/UserGamePart"
import { useSelector } from "react-redux";
import { AppState } from "~/store";

export const EnemyGamePart = ({cardList}: {cardList: CardType[]}) => {

    const user = useSelector((state: AppState) => state.user.current_user);

    if (!user) return null

    return (
        <UserGamePart cardList={cardList} user={user}></UserGamePart>
    )
}