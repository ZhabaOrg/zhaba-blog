<script lang="ts">
	import { format } from 'date-fns';
	import { ru as localeRu } from 'date-fns/locale/ru';

	export let date: string;
	export let includeTime = true;

	$: date = format(new Date(date), `MM/dd/yyyy${includeTime ? ' в HH:mm:ss' : ''}`, {
		locale: localeRu
	});
</script>

<time datetime={date}>
	{date}
</time>
