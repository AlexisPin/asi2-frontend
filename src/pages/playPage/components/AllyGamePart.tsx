import { CardType } from "~/type/card"
import { UserGamePart } from "./userGamePart/UserGamePart"
import { AppState } from "~/store";
import { useSelector } from "react-redux";

export const AllyGamePart = ({cardList}: {cardList: CardType[]}) => {

    const user = useSelector((state: AppState) => state.user.current_user);
    if (!user) return null

    console.log({UserAllyGamePart: user})

    return (
        <UserGamePart cardList={cardList} user={user}></UserGamePart>
    )
}