<script>
    import { PureGray, MainRed } from '../Colors/colors';
    /**
     * Specify the bsType of button
     * @type { "primary" | "secondary" | "ghost" }
     */
    export let bsType = "primary";
    export let label = "Save";
    export let icon = "";
    export let disabled = false;
    export let active = false;

	let background = {
        primary: PureGray.C100.hex,
        secondary: PureGray.C20.hex,
        ghost: 'transparent',
    };
	let hoverColors = {
        primary: MainRed.C70.hex,
        secondary: MainRed.C20.hex,
        ghost: MainRed.C20.hex,
    };
    let disabledColors = {
        primary: PureGray.C100.hex,
        secondary: PureGray.C20.hex,
        ghost: PureGray.C20.hex,
    };
    let activeColors = {
        primary: MainRed.C80.hex,
        secondary: MainRed.C30.hex,
        ghost: MainRed.C20.hex,
    };

	$: cssVarStyles = `
        --btn-background: ${background[bsType]};
        --btn-secondary-color: ${PureGray.C100.hex};
        --btn-hover: ${hoverColors[bsType]};
        --btn-active: ${activeColors[bsType]};
        --btn-disabled: ${disabledColors[bsType]};
        `; 
</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
    type="button" 
    class="btn btn-{bsType}"
    class:active="{active}"
    class:disabled="{disabled}"
    disabled={disabled}
    style={cssVarStyles}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
>
    {icon} {label}
</button>


<style>
     @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

    .btn {
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        background: var(--btn-background);
        border-color: var(--btn-background);
    }
    .btn:hover,
    .btn:focus,
    .btn:not(:disabled):not(.disabled):hover {
        background: var(--btn-hover);
        border-color: var(--btn-hover);
    }
    
    .btn.disabled {
        background: var(--btn-disabled);
        border-color: var(--btn-disabled);
        cursor: default;
    }

    .btn:not(:disabled):not(.disabled).active {
        background: var(--btn-active);
        border-color: var(--btn-active);
    }
    
    .btn-secondary,
    .btn-secondary.disabled,
    .btn-secondary:disabled,
    .btn-secondary:not(:disabled):not(.disabled).active {
        color: var(--btn-secondary-color);
    }
</style>