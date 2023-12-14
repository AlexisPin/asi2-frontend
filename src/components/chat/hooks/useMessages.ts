import { messageType } from '~/type/message';

export const useGetMessages = ({userId1, userId2}:{userId1: number, userId2: number}) => {
    // Get from the back

    const tempResponse: messageType[] = [{
        id: 1,
        date: new Date(),
        content: "Hi there",
        userSenderId: 1,
        conversationId: 1
    },{
        id: 2,
        date: new Date(),
        content: "MESSAGE DE FOU",
        userSenderId: userId1,
        conversationId: 1
    },
    {
        id: 3,
        date: new Date(),
        content: "t'as vu comment ça fonctionne trop bien ?",
        userSenderId: 1,
        conversationId: 1
    }]

    return tempResponse;
};

export const useSendMessage = ({userDiscussionId, message}:{userDiscussionId: number, message: string}) => {
    // do somethin
    console.log(userDiscussionId + " : " + message);
};