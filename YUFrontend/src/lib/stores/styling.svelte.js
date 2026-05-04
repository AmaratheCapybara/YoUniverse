export const MainThemeColors = {
	AccentColor: '#77B602',
	AlertColor: '#FF6F61',
	ThirdLively: '#F4A261',
	ThirdCalm: '#B4D2FF'
};
export const ChangingColors = {
	LightmodeBackground: '#FFFFFF',
	DarkmodeBackground: '#050C1D',
	LightmodeText: '#050C1D',
	DarkmodeText: '#FFFFFF'
};
//export const Screenmode = window.matchMedia;   //Svelte Hates "window" as usual
export const ScreenColors = $state(
	{
	Theme: 'light',
	MainThemeColors: MainThemeColors,
	BackgroundColor:ChangingColors.LightmodeBackground,
	TextColor:ChangingColors.LightmodeText
})