export class ChatSkeleton {
    _id= $state("");
    AllowedSocialIDs = $state([]);
    MessageHistory = $state([]);
    isGroupChat =$state(false);
    CSettings = $state([
        {
            "name":"isGroupt"
        }
    ])
      
}

export const Chat = new ChatSkeleton;