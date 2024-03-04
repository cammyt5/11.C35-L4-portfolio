<script>
    export let info = {};
    let p = info;
    export let hLevel = 2;
</script>

<style>
    h3 {
        margin: 0;
    }
</style>

<article>
    <svelte:element this={"h" + hLevel}>{ p.title }</svelte:element>
    <img src={p.image} alt="">
    <p>{p.description}</p>
</article>