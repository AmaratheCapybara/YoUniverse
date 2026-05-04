<script>
    import { Button, Dropdown, DropdownItem, DropdownHeader, DropdownGroup, Avatar } from "flowbite-svelte";
    import { BellSolid, EyeSolid, MessagesSolid} from "flowbite-svelte-icons";
    import {ChangingColors, MainThemeColors, ScreenColors} from "$lib/stores/styling.svelte.js";
    let {
Sender ={
  Name: "Sender name",
},
Message={
  Sender,
  MessageInput: "Hey, what's up? All set for the presentation?",
  Timestamp: "Wed Nov 26 2014 15:01:23 GMT+0100 (CET)"

}
    } =$props();
  </script>
  
  <div id="bell" class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-hidden dark:text-gray-400 dark:hover:text-white">
    <MessagesSolid class="shrink-0 h-6 w-6" color={ScreenColors.TextColor}/>
    <div class="relative flex">
      <div class="relative end-4 -top-2 inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-gray-900"></div>
    </div>
  </div>
  <Dropdown triggeredBy="#bell" class="w-full max-w-sm divide-y divide-gray-100 rounded-sm shadow-sm dark:divide-gray-700 dark:bg-gray-800" color={ScreenColors.BackgroundColor}>
    <div class="py-2 text-center font-bold">Messages</div>
    <DropdownGroup>
      <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
        <Avatar src="/images/profile-picture-1.webp" dot={{ color: "bg-gray-300" }} />
        <div class="w-full ps-3">
          <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
            New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>
            : "Hey, what's up? All set for the presentation?"
          </div>
          <div class="text-primary-600 dark:text-primary-500 text-xs">a few moments ago</div>
        </div>
      </DropdownItem>
      <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
        <Avatar src="/images/profile-picture-2.webp" dot={{ color: "bg-red-400" }} />
        <div class="w-full ps-3">
          <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
            and
            <span class="font-medium text-gray-900 dark:text-white">5 others</span>
            started following you.
          </div>
          <div class="text-primary-600 dark:text-primary-500 text-xs">10 minutes ago</div>
        </div>
      </DropdownItem>
      <DropdownItem class="flex space-x-4 rtl:space-x-reverse">
        <Avatar src="/images/profile-picture-3.webp" dot={{ color: "bg-green-400" }} />
        <div class="w-full ps-3">
          <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
            and
            <span class="font-medium text-gray-900 dark:text-white">141 others</span>
            love your story. See it and view more stories.
          </div>
          <div class="text-primary-600 dark:text-primary-500 text-xs">44 minutes ago</div>
        </div>
      </DropdownItem>
    </DropdownGroup>
    <a href="/YUFrontend/static" class="-my-1 block bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
      <div class="inline-flex items-center">
        <EyeSolid class="me-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
        View all
      </div>
    </a>
  </Dropdown>


<!--Snippets-->
{#snippet MessageNotification(Message)}

  <DropdownItem color={ScreenColors.BackgroundColor}>
<Avatar rounded/>
    <div class="w-full ps-3">
      <div>New Message from <span>{Message.Sender.Name}</span> : {Message.MessageInput}}</div>
    </div>
  </DropdownItem>
  {/snippet}
{#snippet ChatGroupCreation()}
  <Avatar rounded/>
  {/snippet}
{#snippet MessageRequest()}
  <Avatar rounded/>
{/snippet}