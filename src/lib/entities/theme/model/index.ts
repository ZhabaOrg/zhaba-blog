import { writable } from 'svelte/store';
import { bindSystemThemeChange, setLocalTheme, type ThemeMode } from '$lib/common/theme';

const theme = writable<ThemeMode>('system');

const setTheme = (themeMode: ThemeMode) => {
	theme.set(themeMode);
	setLocalTheme(themeMode);
};

const initBindTheme = () => {
	bindSystemThemeChange((themeMode) => {
		theme.set(themeMode);
	});
};

export { theme, setTheme, initBindTheme };
