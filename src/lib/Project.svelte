<script>
    export let info = {};
    export let hLevel = 2;
</script>

<style>
    h3 {
        margin: 0;
    }
    p.year {
        opacity: 50%;
    }
</style>

<article>
    <svelte:element this={"h" + hLevel}>{ info.title }</svelte:element>
    <img src={info.image} alt="">
    <div>
        <p>{info.description}</p>
        <p class="year">{info.year}</p>
    </div>
</article>