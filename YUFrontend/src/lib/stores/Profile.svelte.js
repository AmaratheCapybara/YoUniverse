

export class ProfileSkeleton {
    Name = $state("");
    Handle = $state(""); //for unique names or privacy in group settings
    SocialID = $state(""); //UUID that is required for anyone outside of the system to interact with the profile
    ProfileID =$state(""); //just the index of the Profile in Account.Profiles
    Age = $state("");
    Maturity = $state(["AgeSlider" || "Eternal" || "Elderly" || "Adult" || "Adolescent" || "Child" || "Ageless"]);
    ProfileType = $state("");
    Bio = $state("");
    FavoriteColor =$state("");
    ProfilePic = $state("");
    Friends = $state([]);
    Chats = $state([]);
    Feed = $state([]);
    Notifications =$state([]);
    Systems = $state([]);
    PSettings = $state({
    "Third Party Connections": [
        "SPMemberID"= "", 
        "PKMemberID" ="",
        "SPSync"= ["SP2YU", "YU2SP", "bothways"],
        "PKSync"= ["PK2YU", "YU2PK", "bothways"],
        "Middleware" =[
            "Make YoUniverse Fronting Middleware" || //marks "YU2SP" and "YU2PK" on SPSync and PKSync
            "Make Third Party services Fronting Middleware for YoUniverse"|| //marks "SP2YU" and "PK2YU" on SPSync and PKSync
            "Sync Fronting across all services" //marks "bothways" on SPSync and PKSync
        ]
    ],
    "Privacy": [

    ],
    "Moderation":[
        "Allow Caution Badge When entering a chat to other participants"= ["True"||"False"], //default to none
        "CensorshipOn"= ["True"|| "False"],
        "Profanity censorship on"= ["True"|| "False"],
        "Custom censorship on"= ["True"||"False"],
        "Custom censors"=[ /*enter words that will be covered*/],
    ]
})
}
export const Profile = new ProfileSkeleton;