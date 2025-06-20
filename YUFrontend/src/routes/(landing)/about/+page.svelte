<script>


    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();


    import { Card, Tabs, TabItem } from 'flowbite-svelte';





    
</script>
<iframe width="560" height="315" src="https://www.youtube.com/embed/5p_SmXHEbuw?si=1WV2gmB2_EREdfli" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<Tabs tabStyle="underline">
    <TabItem open>
      <div slot="title" class="flex items-center gap-2">
        
        Profile
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      <div slot="title" class="flex items-center gap-2">
    
        Dashboard
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      <div slot="title" class="flex items-center gap-2">
       
        Settings
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem>
      <div slot="title" class="flex items-center gap-2">
        
        Contacts
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Contacts:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>

        <Card class=" w-100% m-4 text-black flex">
            <p><h1>Welcome to System chat!</h1>
                <p>System Chat is a unique platform designed for plural systems and singlets to communicate, organize, and connect. Whether you're a system with multiple headmates or a singlet, this space is built to honor your experience and individuality.
                    <ul>
                        <li>For Systems: Manage your collective, create headmates, and communicate seamlessly. Each headmate can send messages, whether they are fronting or not, and switch notifications ensure that everyone stays informed. Customize your privacy settings to suit your comfort, and safeguard your littles and teens with built-in protections.</li>
                        <li>For Singlets: Stay connected with friends in systems while maintaining a user-friendly experience tailored just for you.</li>
                    </ul>
                <p>With System Chat, you can:
                    <ul>
                        <li>Create individual headmate profiles within your system and customize their profiles.</li>
                        <li>Engage in private or group conversations with specific headmates.</li>
                        <li>Protect your system’s privacy with robust permissions for minors</li>
                        <li>Easily switch between headmates, keeping everyone informed with notifications.</li>
                    </ul>
               <footer>
                <a href= '/auth'> sign up! </a>
                
            </footer>
        </Card>
       
   <Card>
    <h1>Goals</h1>
   </Card>
<Card>
    <h1>Frequently Asked Questions</h1>
</Card>
<Card>
    <h1>Demo</h1>
</Card>