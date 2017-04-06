export const TOGGLE_MUSIC = 'TOGGLE_MUSIC';
export const LIST_MUSIC = 'LIST_MUSIC';
export const toggleMusic = (text) => ({
    type: 'TOGGLE_MUSIC', text
});

export const listMusic = (text) => ({
	type: 'LIST_MUSIC', text
});