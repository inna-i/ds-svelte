<script>
	export let hSize;
</script>

<p class="sub-title {hSize}">
    <slot></slot>
</p>

<style>
    .sub-h3 {
        font-size: 20px;
        line-height: 30px;
    }
    .sub-h2 {
        font-size: 22px;
        line-height: 30px;
    }
    .sub-h1 {
        font-size: 24px;
        line-height: 30px;
    }
</style>