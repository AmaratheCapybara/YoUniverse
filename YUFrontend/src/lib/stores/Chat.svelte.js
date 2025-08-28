export class ChatSkeleton {
    _id= $state("");
    AllowedSocialIDs = $state([]);
    MessageHistory = $state([]);
    CSettings = $state([
        {
            "Title":""
        }
    ])
      
}

export const Chat = new ChatSkeleton;