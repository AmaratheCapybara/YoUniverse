<script>
	import { Card } from 'svelte-5-ui-lib';

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>
<Card class=" w-100% m-4">
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