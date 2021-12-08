<script>
    import { PureGray, MainRed } from '../Colors/colors';
    export let href = undefined;
    export let bsType = 'primary';

    export let label = "Save";
    export let icon = "";
    export let disabled = false;
    export let active = false;

	let background = {
        primary: PureGray.C100.hex,
        secondary: PureGray.C20.hex,
    };
	let hover = {
        primary: MainRed.C70.hex,
        secondary: MainRed.C20.hex,
    };
    let activeColors = {
        primary: MainRed.C80.hex,
        secondary: MainRed.C30.hex,
    };

	$: cssVarStyles = `
        --link-color: ${background[bsType]};
        --link-secondary-color: ${PureGray.C100.hex};
        --link-hover: ${hover[bsType]};
        --link-active: ${activeColors[bsType]};
        `; 
</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<a
    href="{href}"
    rel="{$$restProps.target === '_blank' ? 'noopener noreferrer' : undefined}"
    role="button"
    class:active="{active}"
    class:disabled="{disabled}"
    style={cssVarStyles}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
>
    {icon} {label}
</a>


<style>
     @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");

     a {
        font-size: 14px;
        font-weight: 500;
        color: #333;
     }

</style>