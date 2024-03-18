<style>

    div.container {
        display: flex;
        align-items: center;
        gap: 3em;
    }

    svg {
        max-width: 20em;
        margin-block: 2em;

        /* Do not clip shapes outside the viewBox */
        overflow: visible;
    }

    ul {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(7em, 1fr));
        gap: 1em;
        border-style: double;
        padding: 1em;
        margin: 1em;
    }

    li {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }

    span {
        display: inline-flex;
        width: 1em;
        height: 1em;
        background-color: var(--color);
    }

    svg:has(path:hover, path:focus-visible) {
        path:not(:hover, :focus-visible) {
            opacity: 50%;
        }
    }

    path {
	    transition: 300ms;
        cursor: pointer;
        outline: none;
        --angle: calc(var(--end-angle) - var(--start-angle));
	    --mid-angle: calc(var(--start-angle) + var(--angle) / 2);
        transform: rotate(var(--mid-angle))
	           translateY(0)
	           rotate(calc(-1 * var(--mid-angle)));
        &.selected {
            transform: rotate(var(--mid-angle))
                    translateY(-6px)
                    scale(1.1)
                    rotate(calc(-1 * var(--mid-angle)));
	    }
    }

    .selected {
        --color: rgb(106, 226, 26) !important;

        &:is(path) {
            fill: var(--color);
	    }
    }


</style>

<script>
    import * as d3 from 'd3';

    export let data = [];
    let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
    let sliceGenerator = d3.pie().value(d => d.value);
    let colors = d3.scaleOrdinal(d3.schemeTableau10);
    let arcData;
    let arcs;
    $: {
        arcData = sliceGenerator(data);
        arcs = arcData.map(d => arcGenerator(d));
    }

    export let selectedIndex = -1;

    function toggleWedge(index, event) {
        if (!event.key || event.key === "Enter") {
            selectedIndex = selectedIndex === index ? -1 : index;
        }
    }

</script>

<div class="container">
    <svg viewBox="-50 -50 100 100">
        {#each arcs as arc, index}
            <path d={ arc } 
                style="--start-angle: { arcData[index]?.startAngle }rad; --end-angle: { arcData[index]?.endAngle }rad;"
                fill={ colors(index) } 
                class:selected={selectedIndex === index}
                on:click={e => toggleWedge(index, e)}
                on:keyup={e => toggleWedge(index, e)}
                tabindex="0"
                role="button"
                aria-label="pie slice"/>
        {/each}
    </svg>
    
    <ul class="legend">
        {#each data as d, index}
            <li style="--color: { colors(index) }" 
                class:selected={selectedIndex === index}>
                <span class="swatch"></span>
                {d.label} <em>({d.value})</em>
            </li>
        {/each}
    </ul>
</div>