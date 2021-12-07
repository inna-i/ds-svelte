<script>
    import Button from '../Button/Button.svelte';

    const actionsProps = [
        { type: 'Simple' },
        { icon: '◯', type: 'With icon' },
        { active: true, type: 'Active' },
        { disabled: true, type: 'Disabled' }
    ];
</script>

<section>
    <h5>Primary</h5>

    {#each actionsProps as prop}
        <div class="btn-wrap">
            <Button
                label="Primary"
                bsType="primary"
                icon={prop.icon}
                disabled={prop.disabled}
                active={prop.active}/>
            <p>{prop.type}</p>
        </div>
    {/each}

</section>

<section>
    <h5>Secondary</h5>

    {#each actionsProps as prop}
        <div class="btn-wrap">
            <Button
                label="Secondary"
                bsType="secondary"
                icon={prop.icon}
                disabled={prop.disabled}
                active={prop.active} />
            <p>{prop.type}</p>
        </div>
    {/each}

</section>

<section>
    <h5>Ghost</h5>

    {#each actionsProps as prop}
        <div class="btn-wrap">
            <Button
                label="Ghost"
                bsType="ghost"
                icon={prop.icon}
                disabled={prop.disabled}
                active={prop.active} />
            <p>{prop.type}</p>
        </div>
    {/each}

</section>

<style>
    section {
        margin-bottom: 20px;
    }
    .btn-wrap {
        display: inline-block;
        margin-right: 10px;
    }
    p {
        margin-top: 5px;
        text-align: center;
        font-size: 13px;
    }
</style>