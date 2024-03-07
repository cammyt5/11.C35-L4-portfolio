<script>

    //nav bar logic
    import { page } from '$app/stores';

    let pages = [
        {url: "/", title: "Home"},
        {url: "/projects", title: "Projects"},
        {url: "/contact", title: "Contact"},
        {url: "/resume", title: "Resume"},
        {url: "https://github.com/cammyt5", title: "Github"},
    ];

    //theme selector logic
    let localStorage = globalThis.localStorage ?? {};
    let colorScheme = localStorage.colorScheme ?? "light-dark";

    // dynamically read colorScheme from localStorage
    $: localStorage.colorScheme = colorScheme;

    // dynamically write colorScheme to localStorage
    let root = globalThis?.document?.documentElement;
    $: root?.style.setProperty("color-scheme", colorScheme);

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

    label.color-scheme {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font: inherit;
        font-size: 80%;
    }

    select {
        font: inherit;
        font-size: 80%;
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

<label class="color-scheme"> 
    Theme:
    <select bind:value={ colorScheme }>
        <option value="light dark">Automatic</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</label>

<slot />