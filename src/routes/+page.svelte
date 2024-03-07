<script>
    import projects from '$lib/projects.json';
    import Project from "$lib/Project.svelte";
</script>

<style>
    dl {
        display: grid;
        grid-auto-columns: 1fr;
    }

    dt {
        display: grid;
        grid-row: 1;
        opacity: 50%;
        font: 90%/1.5 system-ui;
    }

    dd {
        display: grid;
        grid-row: 2;
        margin-left: 0;
        font: 125%/1.5 system-ui;
    }
</style>

<h1>Cameron Dougal</h1>
<p>I am an MIT junior studying Urban Science and Planning with Computer Science.</p>
<img src="images/headshot.JPEG" width="300px" alt="A headshot of Cameron Dougal."/>

<h2>Projects</h2>
<div class="projects">
    {#each projects.slice(0, 3) as p}
        <Project info={p} hLevel=3 />
    {/each}
</div>

<h2>GitHub Stats</h2>
{#await fetch("https://api.github.com/users/cammyt5") }
	<p>Loading...</p>
{:then response}
	{#await response.json()}
		<p>Decoding...</p>
	{:then data}
        <dl>
            <dt>Username</dt>
            <dd>{data.login}</dd>
            <dt>Public Repos</dt>
            <dd>{data.public_repos}</dd>
            <dt>Followers</dt>
            <dd>{data.followers}</dd>
        </dl>

	{:catch error}
		<p class="error">
			Something went wrong: {error.message}
		</p>
	{/await}
{:catch error}
	<p class="error">
		Something went wrong: {error.message}
	</p>
{/await}