<script>
    import { PureGray } from '../Colors/colors'

    /**
     * Specify the hSize of a SubTitle
     * @type { "sub-h4" | "sub-h3" | "sub-h2" | "sub-h1" }
    */
	export let hSize;
    export let inGray = false;
</script>

<p
    class="sub-title {hSize}"
    class:gray="{inGray}"
    style={`--subtitle-color: ${PureGray.C70.hex}`}
>
    <slot></slot>
</p>

<style>
    .sub-h4 {
        font-size: 12px;
        line-height: 22px;
    }

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
    
    .sub-h4.gray,
    .sub-h3.gray,
    .sub-h2.gray,
    .sub-h1.gray {
        margin-bottom: 10px;
        color: var(--subtitle-color);
        text-transform: uppercase;
    }
</style>