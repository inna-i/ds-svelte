<script>
	export let hSize;
</script>

{#if hSize === 'h1'}
    <h1 class="title">
        <slot></slot>
    </h1> 
{:else if hSize === 'h2'}
    <h2 class="title">
        <slot></slot>
    </h2>
{:else}
    <h3 class="title">
        <slot></slot>
    </h3>
{/if}

<style>
    h1 {
        font-size: 66px;
        line-height: 74px;
    }
    
    h2 {
        font-size: 54px;
        line-height: 62px;
    }

    h3 {
        font-size: 44px;
        line-height: 52px;
    }

</style>