<script>


    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();


 import '../app.css';
  import { 
    Card, 
    Carousel, 
    Tabs, 
    TabItem, 
    Img, 
    Button
  } from 'flowbite-svelte';

  import iOne   from '$lib/images/one.png';
  import iTwo   from '$lib/images/two.png';
  import iThree from '$lib/images/three.png';
  import iFour  from '$lib/images/four.png';
  import iFive  from '$lib/images/five.png';
  import iSix   from '$lib/images/six.png';
  import iSeven from '$lib/images/seven.png';
  import Schedule from '$lib/images/YoUniverse_Solar_Cycles_Project_plan_and_outlook.png';

  const images = [
    { alt: "Fundraiser Summary", src: iOne, title: "Fundraiser Summary"},
    { alt: "tier 1 and 2", src: iTwo, title: "tier 1 and 2"},
    { alt: "tier 3 and 4", src: iThree, title: "tier 3 and 4"},
    { alt: "tier 5 and 6", src: iFour, title: "tier 5 and 6"},
    { alt: "tier 7 and 8", src: iFive, title: "tier 7 and 8"},
    { alt: "tier 9 and 10", src: iSix, title: "tier 9 and 10"},
    { alt: "qr codes", src: iSeven, title: "qr codes"}
  ];





    
</script>
<iframe width="560" 
height="315" 
src="https://www.youtube.com/embed/5p_SmXHEbuw?si=1WV2gmB2_EREdfli" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" 
allowfullscreen 
class="m-auto justify-center block video"
></iframe>

<Tabs tabStyle="full" classes={{
    content: "min-w-full max-w-full bg-transparent dark:bg-transparent pb-20 mx-auto",
  }}
  class="list-none min-w-9/10 max-w-9/10 justify-between mx-auto mt-4"
>
  <TabItem open activeClass="tab-active" inactiveClass="tab-inactive">
    {#snippet titleSlot()}
    <span >About</span>
    {/snippet}
    <article>
      <section>
        <h1>Welcome to YoUniverse!</h1>
        <h3>The first social media platform built with plural systems and their loved ones in mind</h3>
      </section>
      <section>
        <h2>Summary</h2>
<p>
  YoUniverse (pronounced “universe") Is a social media platform designed with individuals who identify as plural, live with dissociation, and their loved ones in mind. The main feature will be instant messaging designed with systems in mind. Easy switches between profiles facilitates in the moment conversations within friends and family both inside and outside of the body. Personal notifications will ensure that loved ones will be reachable whether they are a part of a system, or have a single identity.
</p>
      </section>
      <section>
        <h2>Purpose</h2>
        <p>
Our primary objective with this project is to strengthen communication with our internal and external loved ones. It is our belief that healing comes from vulnerability and respect for each other. We also want to create a space where everyone can relax. We strive to create a user experience that doesn’t alienate or single out otherness. To do this we regularly request feedback from plurals and their loved ones on how to streamline their individual experiences. We created the space metaphor to be flexible to the different types of systems out there that function in their own unique way while also providing enough distinction to facilitate system organization.
        </p>
      </section>
    </article>
  </TabItem>

  <TabItem activeClass="tab-active" inactiveClass="tab-inactive">
    {#snippet titleSlot()}
    <span>Goals</span>
    {/snippet}
    <article>
      <section>
          <h1>Reduce the allostatic load of plural systems and their loved ones</h1>
        <h2>What is <b>Allostatic load</b>?</h2>
        <p>To put it simply, it is the increased likelihood of developing physical and mental illnesses due to chronic stress.</p>
        <cite>
          Allostatic Load: Importance, Markers, and Score Determination in Minority and Disparity Populations by Erik J Rodriquez, Edward N Kim, Anne E Sumner, Anna M Nápoles, Eliseo Pérez-Stable
        </cite>

        <h3>Steps the project has taken to accomplish this goal:</h3>
        <ul>
          <li>
            Framework built with plurals and their loved ones in mind
          </li>
          <li>
            Easy navigation of site and switching features
          </li>
          <li>
            Streamlined onboarding allowing users to start messaging as soon as possible
          </li>
          <li>
            No involuntary minority labels
          </li>
          <ul>
            <li>
              No one will be distinguished as plural or singlet. All profiles will look the same, regardless of the individual's situation. Any identity labels used will be up to individual users to distinguish themselves and will not be imposed by the website.
            </li>
          </ul>
        </ul>
      </section>
      <section>
          <h1>
            Promote healthy and safe internal and external communication
          </h1>
        <h3>Steps taken to assist in improved communication:</h3>
        <ul>
          <li>
            Private messaging across all profiles for one on one conversations
          </li>
          <li>
            System group chats
          </li>
          <li>
            Feed for system updates and news <i>(on the roadmap!)</i>
          </li>
          <li>
            Personalized notifications for each profile to minimize spam from other headmates' profiles
          </li>
          <li>
            Connecting to profiles on different accounts requires the unique ID for the specific profile trying to be reached
          </li>
        </ul>
      </section>
    </article>
  </TabItem>

  <TabItem activeClass="tab-active" inactiveClass="tab-inactive">
    {#snippet titleSlot()}
      <span>Schedule</span>
    {/snippet}
    <Img 
    src={Schedule}
    alt='YoUniverse schedule' 
    class=" rounded-lg center mx-auto max-w-9/10"/>
  </TabItem>

  <TabItem activeClass="tab-active" inactiveClass="tab-inactive">
    {#snippet titleSlot()}
      <span>Help Out!</span>
    {/snippet}
    <article>
      <section>
        <h1>Volunteer</h1>
        <p>We are accepting volunteers through email and our <a href='https://discord.gg/NmmkZP6QFS'>discord server</a>!</p>
      </section>

      <!-- hidden section
      <section>
        <h1 class="hidden">Stay up to date</h1>
          Discord
          maybe email letter
      </section>
      -->

      <section>
        <h1>Funding</h1>

        <h2>Donation pages</h2>
        <!-- for single time donations and custom monthly donations, use Ko-fi. For preset memberships use patreon. -->
        <div class= "flex-wrap-reverse">
        <a class="button" href="https://ko-fi.com/amaracapybara">Ko-fi</a>
        <a class="button" href ='patreon.com/YoUniverseProject'> Patreon</a>
        </div>
        <h2>Fundraiser</h2>
        <p>During the month of <b>August</b>, donors will receive rewards and prizes (see the tiers below).

        Prizes include exclusive assets for your YoUniverse account and art pieces made by plural artists. Rewards will be processed and shipped out after the fundraiser is finished.</p>
        <div class="w-full ">
          {#each images as image}
          <Img src={image.src} alt={image.alt} class="rounded-lg flex-wrap-reverse center mx-auto max-w-9/10"/>

          {/each}
        </div>
        <h2>Merchandise</h2>

        <!--Redbubble Shop-->
        <p class="pb-5"><i>Returns and refunds are done through RedBubble. YoUniverse is not responsible for the creation and delivery of merchandise. If an issue occurs, contact Redbubble's customer service.</i></p>
        <a class="button" href="https://www.redbubble.com/people/TheYoUniverse/shop?asc=u">RedBubble Shop</a>
        <h2>Financial Transparency</h2>
        <h3>Percentage YoUniverse recieves from:</h3>
        <ul>
          <li><b>ko-fi:</b>100% goes to YoUniverse</li>
          <li><b>Stripe</b> <i>(used to recieve some ko-fi payments and donations)</i><b>:</b> 2.9% + 30¢
          fee per successful transaction for domestic cards</li>
          <li class="hidden"><b>Patreon:</b></li> <!-- TODO: fill this in eventually -->
          <li><b>RedBubble:</b> 20% goes to YoUniverse (80% fee for product and shipping)</li>
        </ul>
      </section>
    </article>
  </TabItem>

  <TabItem activeClass="tab-active" inactiveClass="tab-inactive">
    {#snippet titleSlot()}
      <span>Contact</span>
    {/snippet}
    <article>
      <ul>
        <li>
          <b>Email:</b> youniversedevteam (at) gmail.com
        </li>
        <li>
          <b>Discord:</b> <a href='https://discord.gg/NmmkZP6QFS'>join here</a>
        </li>
      </ul>
    </article>
  </TabItem>

<!-- HIDDEN TABS -->
<!--
  <TabItem class="hidden" activeClass="tab-active">
    {#snippet titleSlot()}
      <span>FAQ</span>
    {/snippet}
    <article>
      <section>
        <h1>Who is YoUniverse for?</h1>
        <h1>Will [insert specific people group] be allowed on YoUniverse?</h1>
        <h1>Will our profiles be searchable?</h1>
        <h1>Will there be an offline version?</h1>
        <h1>How will YoUniverse protect our privacy?</h1>
        <h1>Can I volunteer?</h1>
      </section>
    </article>
  </TabItem>

  <TabItem class="hidden" activeClass="tab-active">
    {#snippet titleSlot()}
      <span>Demo</span>
    {/snippet}
    <article>
      <p>demo go here</p>
    </article>
  </TabItem>
-->
</Tabs>

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {

  }
</style>