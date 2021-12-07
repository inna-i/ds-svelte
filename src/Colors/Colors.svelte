<script>
    import { PureGray, ColdGray, MainRed, CrimsonRed } from './colors';
</script>

<section>
    <h4>Neutral</h4>
    <div class="color-block">
        <h6>PureGray</h6>
        <div class="colors-list">
            {#each Object.keys(PureGray) as colorKey }
                <div class="color-list-item" style="--theme-color: {PureGray[colorKey].hex}">
                    <p>
                        {colorKey}
                    </p>
                    <div class="descr">
                        {PureGray[colorKey].hex}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="color-block">
        <h6>ColdGray</h6>
        <div class="colors-list">
            {#each Object.keys(ColdGray) as colorKey }
                <div class="color-list-item" style="--theme-color: {ColdGray[colorKey].hex}">
                    <p>
                        {colorKey}
                    </p>
                    <div class="descr">
                        {ColdGray[colorKey].hex}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<section>
    <h4>Red</h4>
    <div class="color-block">
        <h6>MainRed</h6>
        <div class="colors-list">
            {#each Object.keys(MainRed) as colorKey }
                <div class="color-list-item" style="--theme-color: {MainRed[colorKey].hex}">
                    <p>
                        {colorKey}
                    </p>
                    <div class="descr">
                        {MainRed[colorKey].hex}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    <div class="color-block">
        <h6>CrimsonRed</h6>
        <div class="colors-list">
            {#each Object.keys(CrimsonRed) as colorKey }
                <div class="color-list-item" style="--theme-color: {CrimsonRed[colorKey].hex}">
                    <p>
                        {colorKey}
                    </p>
                    <div class="descr">
                        {CrimsonRed[colorKey].hex}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .color-block {
        margin-bottom: 25px;
        font-family: sans-serif;
    }
    
    h4, h6 {
        font-family: sans-serif;
        text-align: left;
    }

    h4 {
        margin-bottom: 15px;
    }

    .colors-list {
        display: flex;
        flex-direction: row;
        justify-content: stretch;
    }

    .color-list-item {
        color: #000;
    }
    
	p {
        padding: 30px;
        background: var(--theme-color);
	}

    .descr {
        font-size: 12px;
    }
</style>
