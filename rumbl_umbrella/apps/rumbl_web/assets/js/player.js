let Player = {
	player: null,

	init(domId, playerId, onReady) {
		window.onYouTubeIframeAPIReady = () => {
			this.onIframeReady(domId, playerId, onReady);
		};

		const tag = document.createElement('script');

		tag.src = 'https://www.youtube.com/iframe_api';
		const firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	},

	onIframeReady(domId, playerId, onReady) {
		this.player = new YT.Player(domId, {
			height: '360',
			width: '420',
			videoId: playerId,
			events: {
				onReady: (event) => onReady(event),
				onStateChange: (event) => this.onPlayerStateChange(event),
			},
		});
	},

	onPlayerStateChange(event) {},

	getCurrentTime() {
		return Math.floor(this.player.getCurrentTime() * 1000);
	},

	seekTo(millsec) {
		return this.player.seekTo(millsec / 1000);
	},
};

export default Player;