<script>
    export let href = undefined;
    /**
     * Specify the bsType of button
     * @type {"default" | "primary" }
     */
    export let bsType = "default";
</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
{#if href}
    <a
        href="{href}"
        rel="{$$restProps.target === '_blank' ? 'noopener noreferrer' : undefined}"
        role="button"
        on:click
        on:mouseover
        on:mouseenter
        on:mouseleave
    >
        {""}
    </a>
{:else}
    <button
        type="button" 
        class="btn btn-{bsType}"
        on:click
        on:mouseover
        on:mouseenter
        on:mouseleave
    >
    <slot></slot>
    </button>
{/if}
