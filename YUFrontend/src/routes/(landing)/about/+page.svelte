<script>


    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();


    import { Card, Tabs, TabItem } from 'flowbite-svelte';





    
</script>
<iframe width="560" height="315" src="https://www.youtube.com/embed/5p_SmXHEbuw?si=1WV2gmB2_EREdfli" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<Tabs tabStyle="underline">
  <TabItem>
    <div slot="title" class="flex items-center gap-2">
  
  Summary of project
    </div>
<section>
  <h1>Welcome to YoUniverse! </h1>
  <h2> the first social media platform built with plural systems and their loved ones in mind</h2>
</section>
<section>
  <p>YoUniverse is a unique platform designed for plural systems and singlets to communicate, organize, and connect. Whether you're a system with multiple headmates or a singlet, this space is built to honor your experience and individuality.
    <ul>
        <li>For Systems: Manage your collective, create headmates, and communicate seamlessly. Each headmate can send messages, whether they are fronting or not, and switch notifications ensure that everyone stays informed. Customize your privacy settings to suit your comfort, and safeguard your littles and teens with built-in protections.</li>
        <li>For Singlets: Stay connected with friends in systems while maintaining a user-friendly experience tailored just for you.</li>
    </ul>
<p>With YoUniverse, you can:
    <ul>
        <li>Create individual headmate profiles within your system and customize their profiles.</li>
        <li>Engage in private or group conversations with specific headmates.</li>
        <li>Protect your system’s privacy with robust permissions for minors</li>
        <li>Easily switch between headmates, keeping everyone informed with notifications.</li>
    </ul>
<footer class='hidden'><!--unhide when login is available-->
<a href= '/auth'> sign up! </a>

</footer>
</section>
  </TabItem>
  

    <TabItem open>
      <div slot="title" class="flex items-center gap-2">
        
       Goals
      </div>
<section>
  <header>
    <h1> Reduce the allostatic load of plural systems and their loved ones</h1>
  
  </header>

<h2>what is <b>Allostatic load</b></h2>
<p> A simple way of thinking about Allostatic load is that it is the increased likelyhood of developing physical and mental ilnnesses due to chronic stress.</p>
<cite>
  Allostatic Load: Importance, Markers, and Score Determination in Minority and Disparity Populations by Erik J Rodriquez, Edward N Kim , Anne E Sumner , Anna M Nápoles , Eliseo  Pérez-Stable
</cite>

<h3>Steps the project has taken to accomplish allostatic load reduction:</h3>

  <ul>
    <li>
      Framework built with plurals and their loved one’s in mind
    </li>
    <li>
      Easy navigation of site and switching feature
    </li>
    <li>
      Streamline onboarding
    </li>
    <ul>
      <li>
        Start messaging as soon as possible
      </li>
    </ul>
    <li>
      Remove involuntary minority labels
    </li>
    <ul>
      <li>
        No one will be distinguished as plural or singlet. All profiles will look the same, regardless of the individual's situation. Any identity labels used will be up to individual users to distinguish themselves and will not be imposed by the website.
      </li>
    </ul>
  </ul>
</section>
<section>
  <header>
    <h1>
      Promote healthy internal and external communication
    </h1>
  </header>
  <h3>Steps the project has taken to assist in improved communication:</h3>
  <ul>
    <li>
      Private Messaging across all profiles for one on one conversations
    </li>
    <li>
      System group chats
    </li>
    <li>
      Feed for system updates and news <i>to be implemented later on</i>
    </li>
    <li>
      Personalized notifications for each profile
    </li>
    <ul>
      <li>
        Minimizes spam from the notifications of other profiles on the account
      </li>
    </ul>
    <li>
      Connecting to profile on different account requires UUID for the specific profile trying to be reached
    </li>
  </ul>
</section>
    </TabItem>
    <TabItem class="hidden">
      <div slot="title" class="flex items-center gap-2">
        
        Demo

      </div>
     
    </TabItem>
    <TabItem>
      <div slot="title" class="flex items-center gap-2">
        
        Get involved!
      </div>
      <section>
        <h1>Volunteer</h1>
        <p>we are accepting volunteers through email and our Discord server</p>
      </section>
      <section>
        <h1>Stay up to date</h1>
        <!--
        Discord
        maaybe email letter
        -->
      </section>
      <section>
        <h1>Funding</h1>
        <ul>
          <li>
            <h2>Donation pages</h2>
             <!--
        for single time donations and custom monthly donations, use Ko-fi. For preset memberships use patreon.-->
          </li>
          <li>
           <h2>Merchandise</h2>
<!--Redbubble Shop-->
           <p><i>Returns and refunds are done through RedBubble. YoUniverse is not responsible for the creation and delievery of merchandise. If an issue occurs, contact Redbubble's customer service.</i></p>
          </li>
          <h2>Financial Transparency</h2>
          <h3>Percentage YoUniverse recieves from:</h3>
          <ul>
            <li><b>ko-fi:</b></li>
            <li><b>Patreon:</b></li>
            <li><b>RedBubble:</b></li>
          </ul>
        </ul>
      </section>
    </TabItem>
    <TabItem>
      <div slot="title" class="flex items-center gap-2">
        Frequently Asked Questions
      </div>
      <h1>who is YoUniverse for?</h1>
      <h1>Will [insert specific people group] be allowed on YoUniverse?</h1>
      <h1>Will our profiles be searchable?</h1>
      <h1>Will there be an offline version?</h1>
      <h1>How will YoUniverse protect our privacy?</h1>
      <h1>Can I volunteer?</h1>
    </TabItem>
    <TabItem>
      <div slot="title" class="flex items-center gap-2">
        
        Contacts
      </div>
      <ul>
        <li>
      <p><b>Email</b> youniversedevteam@gmail.com</p>
        </li>
        <li><b>Discord</b> <a href='https://discord.gg/NmmkZP6QFS'>join here</a></li>
    </ul>
    </TabItem>
  </Tabs>
