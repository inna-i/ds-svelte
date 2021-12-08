<script>
    import Button from '../Button/Button.svelte';
    import Link from '../Link/Link.svelte';
    import SubTitle from '../Typography/SubTitle.svelte';
    import Text from '../Typography/Text.svelte';
    
    export let title = '';
    export let subTitle = '';
    export let description = '';
    export let actions = {
        left: { label: '', onclick: null },
        right: { label: '', onclick: null }
    };
    /**
     * Specify the tipsPosition of a Tutorial tip
     * @type { "top" | "left" | "right" | "bottom" }
    */
    export let tipsPosition = 'bottom';

</script>

<div class="tutorial-tips {tipsPosition}">
    <SubTitle hSize="sub-h4" inGray={true}>{subTitle}</SubTitle>
    <SubTitle hSize="sub-h1">{title}</SubTitle>

    <Text size="medium">{description}</Text>

    <div class="tutorial-tips-controls">
        <Link label={actions.left.label} on:click={actions.left.onclick} bsType="ghost" icon="➔"/>
        <Button label={actions.right.label} on:click={actions.right.onclick} />
    </div>
</div>

<style>
    .tutorial-tips {
        display: inline-block;
        position: relative;
        padding: 24px;
        width: 320px;
        height: 230px;
        border: 1px solid silver;
        border-radius: 5px;
        background: white;
    }

    .tutorial-tips-controls {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-top: 20px;
    }

    .tutorial-tips::before,
    .tutorial-tips::after {
        position: absolute;
        width: 10px;
        height: 10px;
        content: '';
    }
    
    .tutorial-tips.bottom::before {
        bottom: -12px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 11px solid silver;
    }
    .tutorial-tips.bottom::after {
        bottom: -10px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 11px solid #fff;
    }
 
    .tutorial-tips.right::before {
        left: -20px;
        border-left: 10px solid transparent;
        border-right: 10px solid silver;
        border-top: 11px solid transparent;
        border-bottom: 10px solid transparent;
    }

    .tutorial-tips.right::after {
        top: 24px;
        left: -19px;
        border-left: 10px solid transparent;
        border-right: 10px solid #fff;
        border-top: 11px solid transparent;
        border-bottom: 10px solid transparent;
    }
</style>