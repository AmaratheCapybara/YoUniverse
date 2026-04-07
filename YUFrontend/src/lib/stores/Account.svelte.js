export class AccountSkeleton { 
    SelectedProfile = $state();
    Fronters = $state([]);
    Headmates = $state([]);
    Profiles = $state([]);

    AccountName = $state("Celestial Collective");
    Age = $state("41");
    AccountBio = $state("A constellation of voices orbiting together in harmony.");
    AccountType = $state("GeneralSystem");

    ASettings = $state([
        
    {"SettingCategory":"Third Party Connections",
      "SPToken": "token_12345",
      "PKToken": "token_67890",
      "SPUSer_id": "user_24680",
      "SPSync": "YU2SP",
      "PKSync": "bothways",
      "Middleware": [
        "Sync Fronting across all services"
      ]
    },
    {"SettingCategory": "Privacy",
      "Vulnerable Parts": {
        "Somewhat Vulnerable": ["Moon", "Adolescent", "Echo"],
        "Entirely Vulnerable": ["Satellite"],
        "Vulnerable Profile Managers": ["Planet Accounts"]
      }
    },
    {"SettingCategory": "Moderation",
      "Allow Caution Badge When entering a chat to other participants": "For Somewhat Vulnerable",
      "Allow censorship": "True",
      "Profanity censorship": "True",
      "Custom censorship": "True",
      "Our Custom censors": ["fear", "silence"],
      "Censored Profiles": ["Moon", "Adolescent", "Echo"]
    },
    {"SettingCategory":"Notifications",
      "System Alerts": ["Daily Summary", "Fronting Changes"],
      "Profile Mentions": ["All"]
    },
    {"SettingCategory": "Profile Settings",
      "Third Party Connections": "All profiles can customize their settings",
      "Privacy": "nonvulnerable Profiles can customize their setting",
      "Moderation": "nonvulnerable Profiles can customize their setting",
      "Notifications": "All profiles can customize their settings"
    }
  
    ]);
}

export const Account = new AccountSkeleton();