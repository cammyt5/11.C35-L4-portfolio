<script>
    import { page } from '$app/stores';

    let pages = [
        {url: "/", title: "Home"},
        {url: "/projects", title: "Projects"},
        {url: "/contact", title: "Contact"},
        {url: "/resume", title: "Resume"},
        {url: "https://github.com/cammyt5", title: "Github"},
    ];
</script>

<style>
    nav {
        display: flex;
        margin-bottom: 3em;
        border-bottom-width: 0.1em;
        border-bottom-style: solid;
        --border-color: oklch(50% 10% 200 / 40%);
        border-bottom-color: var(--border-color);
    }

    a {
        flex: 1;
        text-decoration: none;
        color: inherit;
        text-align: center;
        padding: 0.5em;
    }

    a.current {
        border-bottom-width: 0.3em;
        border-bottom-style: solid;
        border-bottom-color: var(--border-color);
        padding-bottom: 0.2em;
    }

    a:hover {
        border-bottom-width: 0.3em;
        border-bottom-style: solid;
        padding-bottom: 0.2em;
        border-bottom-color: color-mix(in oklch, var(--color-accent), canvas 85%);
    }
</style>

<nav>
    {#each pages as p }
        <a href={ p.url } 
           class:current={$page.route.id === p.url}
           target={ p.url.startsWith("http") ? "_blank" : null }>
                { p.title }
        </a>
    {/each}
</nav>

<slot />