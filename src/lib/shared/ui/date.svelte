<script lang="ts">
	import { format } from 'date-fns';
	import { ru as localeRu } from 'date-fns/locale/ru';

	export let date: string;
	export let includeTime = true;
	export let id: string | undefined = undefined;

	$: formattedDate = format(new Date(date), `MM/dd/yyyy${includeTime ? ' в HH:mm:ss' : ''}`, {
		locale: localeRu
	});
</script>

<time datetime={date} {id}>
	{formattedDate}
</time>
