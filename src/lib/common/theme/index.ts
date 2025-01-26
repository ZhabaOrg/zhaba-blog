type ThemeMode = 'dark' | 'light';

const LOCAL_STORAGE_THEME_KEY = 'theme';

const getSystemTheme = (): ThemeMode => {
	return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getLocalTheme = (): ThemeMode | null => {
	return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeMode;
};

const setLocalTheme = (themeMode: ThemeMode) => {
	localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeMode);
};

const bindSystemThemeChange = (callback: (themeMode: ThemeMode) => void) => {
	matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
		if (matches) {
			callback('dark');
		} else {
			callback('light');
		}
	});
};

const getTheme = () => {
	const userTheme = getLocalTheme();

	if (userTheme) return userTheme;

	return getSystemTheme();
};

export { setLocalTheme, getTheme, bindSystemThemeChange, type ThemeMode };
