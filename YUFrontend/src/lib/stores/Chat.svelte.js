export class ChatSkeleton {
    ChatID= $state("");
    AllowedSocialIDs = $state([]);
    MessageHistory = $state([]);
    isGroupChat =$state(false);
		Name = $state(undefined);
		SameAccountProfilesinConversation= $state([undefined]);
      
}

export const Chat = new ChatSkeleton;