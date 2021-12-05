<script>
	export let size;
</script>

<p class="text {size}">
    <slot></slot>
</p>

<style>
    .small {
        font-size: 12px;
        line-height: 20px;
    }
    
    .medium {
        font-size: 14px;
        line-height: 22px;
    }

    .large {
        font-size: 16px;
        line-height: 24px;
    }

    .extra-large {
        font-size: 18px;
        line-height: 28px;
    }
</style>