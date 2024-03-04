<script>
    import projects from '$lib/projects.json';
    import Project from "$lib/Project.svelte";
</script>

<h1>Cameron Dougal</h1>
<p>I am an MIT junior studying Urban Science and Planning with Computer Science.</p>
<img src="images/headshot.JPEG" width="300px" alt="A headshot of Cameron Dougal."/>

<h2>Projects</h2>
<div class="projects">
    {#each projects.slice(0, 3) as p}
        <Project info={p} hLevel=3 />
    {/each}
</div>