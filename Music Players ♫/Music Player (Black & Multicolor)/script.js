new Vue({
	el: '#app',
	data: {
		playerStyle: {
			backgroundColor: "#000000".replace(/0/g,() => {return (~~(Math.random()*16)).toString(16)})
		},
		cover: 'https://i1.sndcdn.com/artworks-000217001504-gzt4ul-t500x500.jpg',
		coverClass: '',
		playPauseButton: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5NC44NDMgMjk0Ljg0MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk0Ljg0MyAyOTQuODQzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjc4LjUyNyw3OS45NDZjLTEwLjMyNC0yMC4wMjMtMjUuMzgtMzcuNzA0LTQzLjUzOC01MS4xMzJjLTIuNjY1LTEuOTctNi40MjEtMS40MDctOC4zOTIsMS4yNTdzLTEuNDA3LDYuNDIxLDEuMjU3LDguMzkyICAgYzE2LjY4NywxMi4zNCwzMC41MjEsMjguNTg2LDQwLjAwOCw0Ni45ODNjOS45NCwxOS4yNzcsMTQuOTgsNDAuMTI4LDE0Ljk4LDYxLjk3NmMwLDc0LjY3MS02MC43NSwxMzUuNDIxLTEzNS40MjEsMTM1LjQyMSAgIFMxMiwyMjIuMDkzLDEyLDE0Ny40MjFTNzIuNzUsMTIsMTQ3LjQyMSwxMmMzLjMxMywwLDYtMi42ODcsNi02cy0yLjY4Ny02LTYtNkM2Ni4xMzMsMCwwLDY2LjEzMywwLDE0Ny40MjEgICBzNjYuMTMzLDE0Ny40MjEsMTQ3LjQyMSwxNDcuNDIxczE0Ny40MjEtNjYuMTMzLDE0Ny40MjEtMTQ3LjQyMUMyOTQuODQyLDEyMy45NzcsMjg5LjIwMSwxMDAuNjQ1LDI3OC41MjcsNzkuOTQ2eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTEwOS42OTksNzguOTY5Yy0xLjg3NiwxLjA2Ny0zLjAzNSwzLjA1OS0zLjAzNSw1LjIxNnYxMzEuNjc0YzAsMy4zMTQsMi42ODcsNiw2LDZzNi0yLjY4Niw2LTZWOTQuNzRsODguODMzLDUyLjg4MyAgIGwtNjUuMzI0LDQyLjA4N2MtMi43ODUsMS43OTUtMy41ODksNS41MDgtMS43OTQsOC4yOTNjMS43OTYsMi43ODYsNS41MDgsMy41OSw4LjI5NCwxLjc5NGw3My40NjUtNDcuMzMzICAgYzEuNzQ2LTEuMTI1LDIuNzg2LTMuMDczLDIuNzQ5LTUuMTVjLTAuMDM3LTIuMDc3LTEuMTQ1LTMuOTg3LTIuOTMtNS4wNUwxMTUuNzMzLDc5LjAyOSAgIEMxMTMuODc3LDc3LjkyNiwxMTEuNTc1LDc3LjkwMiwxMDkuNjk5LDc4Ljk2OXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K',
		play: true,
		pause: false,
		faded: '',
		controls: '',
		infoPage: '',
		songName: 'Insane',
		artistName: 'Flume (Jey Vazz Remix)',
	},
	methods: {
		backwardButtonClicked: function() {
			if(this.cover == 'https://i1.sndcdn.com/artworks-000202678628-gdpmft-t500x500.jpg') {
				this.coverClass = 'faded'
				setTimeout(()=>{
					this.coverClass = ''
					this.cover = 'https://i1.sndcdn.com/artworks-000217001504-gzt4ul-t500x500.jpg'
					this.songName = 'Insane'
					this.artistName = 'Flume (Jey Vazz Remix)'
				},200)	
			}
			else {
				this.coverClass = 'faded'
				setTimeout(()=>{
					this.coverClass = ''
					this.cover = 'https://i1.sndcdn.com/artworks-000202678628-gdpmft-t500x500.jpg'
					this.songName = 'All You Ever Talk About'
					this.artistName = 'Whethan VS Oliver Tree'
				},200)
			}
		},
		forwardButtonClicked: function() {
			if(this.cover == 'https://i1.sndcdn.com/artworks-000217001504-gzt4ul-t500x500.jpg') {
				this.coverClass = 'faded'
				setTimeout(()=>{
					this.coverClass = ''
					this.cover = 'https://i1.sndcdn.com/artworks-000202678628-gdpmft-t500x500.jpg'
					this.songName = 'All You Ever Talk About'
					this.artistName = 'Whethan VS Oliver Tree'
				},200)	
			}
			else {
				this.coverClass = 'faded'
				setTimeout(()=>{
					this.coverClass = ''
					this.cover = 'https://i1.sndcdn.com/artworks-000217001504-gzt4ul-t500x500.jpg'
					this.songName = 'Insane'
					this.artistName = 'Flume (Jey Vazz Remix)'
				},200)
			}
		},
		coverClicked: function() {
			this.controls = 'active'
			setTimeout(()=>{
				this.coverClass = 'active'
				setTimeout(()=>{
					this.infoPage = 'active'
				},500)
			},500)
		},
		infoPageClicked: function() {
			this.infoPage = ''
			setTimeout(()=>{
				this.coverClass = ''
				setTimeout(()=>{
					this.controls = ''
				},500)
			},500)
		},
		playPauseClicked: function() {
			if(this.play == true) {
				this.faded = 'faded'
				setTimeout(()=>{
					this.faded = ''
					this.play = false
					this.pause = true
					this.playPauseButton = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDc3LjYwNywxMjguMDU1QzQ0My40MzIsNjguODYxLDM4OC4yNSwyNi41MiwzMjIuMjI5LDguODNDMjU2LjIwNy04Ljg2MiwxODcuMjQ5LDAuMjE4LDEyOC4wNTUsMzQuMzkzICAgIEM2OC44NjIsNjguNTcsMjYuNTIsMTIzLjc1LDguODMsMTg5Ljc3MWMtMTcuNjksNjYuMDIyLTguNjExLDEzNC45ODEsMjUuNTY0LDE5NC4xNzQgICAgYzM0LjE3NSw1OS4xOTQsODkuMzU1LDEwMS41MzUsMTU1LjM3NywxMTkuMjI1YzIyLjA0Niw1LjkwOCw0NC40MTcsOC44Myw2Ni42NDQsOC44M2M0NC4zMzktMC4wMDEsODguMTAxLTExLjYyOSwxMjcuNTI5LTM0LjM5NSAgICBjNTkuMTkzLTM0LjE3NSwxMDEuNTM1LTg5LjM1NSwxMTkuMjI1LTE1NS4zNzdDNTIwLjg2MSwyNTYuMjA3LDUxMS43ODIsMTg3LjI0OCw0NzcuNjA3LDEyOC4wNTV6IE00NzcuNDMxLDMxNS4zMzMgICAgYy0xNS44NDksNTkuMTQ2LTUzLjc4LDEwOC41NzktMTA2LjgxLDEzOS4xOTdjLTUzLjAyOCwzMC42MTYtMTE0LjgwNiwzOC43NDgtMTczLjk1MiwyMi45MDEgICAgYy01OS4xNDctMTUuODQ5LTEwOC41ODEtNTMuNzgtMTM5LjE5Ny0xMDYuODFjLTMwLjYxNi01My4wMjgtMzguNzUtMTE0LjgwNy0yMi45MDEtMTczLjk1NCAgICBjMTUuODQ5LTU5LjE0Niw1My43OC0xMDguNTc5LDEwNi44MS0xMzkuMTk3YzM1LjMyNS0yMC4zOTUsNzQuNTIzLTMwLjgxMiwxMTQuMjQ5LTMwLjgxMmMxOS45MSwwLDM5Ljk1OCwyLjYyLDU5LjcwNSw3LjkxICAgIGM1OS4xNDcsMTUuODQ5LDEwOC41ODEsNTMuNzgsMTM5LjE5NywxMDYuODFDNDg1LjE0NiwxOTQuNDA3LDQ5My4yNzksMjU2LjE4Niw0NzcuNDMxLDMxNS4zMzN6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjEwLjcwNiwxMzMuMTE4aC0zMy4xMmMtMTQuNjk0LDAtMjYuNjQ4LDExLjk1NC0yNi42NDgsMjYuNjQ4djE5Mi40NjhjMCwxNC42OTQsMTEuOTU0LDI2LjY0OCwyNi42NDgsMjYuNjQ4aDMzLjEyICAgIGMxNC42OTQsMCwyNi42NDgtMTEuOTU0LDI2LjY0OC0yNi42NDhWMTU5Ljc2NkMyMzcuMzU0LDE0NS4wNzIsMjI1LjQsMTMzLjExOCwyMTAuNzA2LDEzMy4xMTh6IE0yMTAuNzA2LDM1Mi4yMzRoLTMzLjEyVjE1OS43NjYgICAgaDMzLjEybDAuMDE3LDE5Mi40NjZDMjEwLjcyMywzNTIuMjMyLDIxMC43MTgsMzUyLjIzNCwyMTAuNzA2LDM1Mi4yMzR6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzM0LjQxNiwxMzMuMTE4aC0zMy4xMmMtMTQuNjk0LDAtMjYuNjQ4LDExLjk1NC0yNi42NDgsMjYuNjQ4djE5Mi40NjhjMCwxNC42OTQsMTEuOTU0LDI2LjY0OCwyNi42NDgsMjYuNjQ4aDMzLjEyICAgIGMxNC42OTQsMCwyNi42NDgtMTEuOTU0LDI2LjY0OC0yNi42NDhWMTU5Ljc2NkMzNjEuMDY0LDE0NS4wNzIsMzQ5LjEwOSwxMzMuMTE4LDMzNC40MTYsMTMzLjExOHogTTMzNC40MTQsMzUyLjIzNGgtMzMuMTIgICAgVjE1OS43NjZoMzMuMTJsMC4wMTcsMTkyLjQ2NkMzMzQuNDMyLDM1Mi4yMzIsMzM0LjQyNiwzNTIuMjM0LDMzNC40MTQsMzUyLjIzNHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'
				},200)
			}
			else if(this.pause == true) {
				this.faded = 'faded'
				setTimeout(()=>{
					this.faded = ''
					this.pause = false
					this.play = true
					this.playPauseButton = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5NC44NDMgMjk0Ljg0MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk0Ljg0MyAyOTQuODQzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjc4LjUyNyw3OS45NDZjLTEwLjMyNC0yMC4wMjMtMjUuMzgtMzcuNzA0LTQzLjUzOC01MS4xMzJjLTIuNjY1LTEuOTctNi40MjEtMS40MDctOC4zOTIsMS4yNTdzLTEuNDA3LDYuNDIxLDEuMjU3LDguMzkyICAgYzE2LjY4NywxMi4zNCwzMC41MjEsMjguNTg2LDQwLjAwOCw0Ni45ODNjOS45NCwxOS4yNzcsMTQuOTgsNDAuMTI4LDE0Ljk4LDYxLjk3NmMwLDc0LjY3MS02MC43NSwxMzUuNDIxLTEzNS40MjEsMTM1LjQyMSAgIFMxMiwyMjIuMDkzLDEyLDE0Ny40MjFTNzIuNzUsMTIsMTQ3LjQyMSwxMmMzLjMxMywwLDYtMi42ODcsNi02cy0yLjY4Ny02LTYtNkM2Ni4xMzMsMCwwLDY2LjEzMywwLDE0Ny40MjEgICBzNjYuMTMzLDE0Ny40MjEsMTQ3LjQyMSwxNDcuNDIxczE0Ny40MjEtNjYuMTMzLDE0Ny40MjEtMTQ3LjQyMUMyOTQuODQyLDEyMy45NzcsMjg5LjIwMSwxMDAuNjQ1LDI3OC41MjcsNzkuOTQ2eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTEwOS42OTksNzguOTY5Yy0xLjg3NiwxLjA2Ny0zLjAzNSwzLjA1OS0zLjAzNSw1LjIxNnYxMzEuNjc0YzAsMy4zMTQsMi42ODcsNiw2LDZzNi0yLjY4Niw2LTZWOTQuNzRsODguODMzLDUyLjg4MyAgIGwtNjUuMzI0LDQyLjA4N2MtMi43ODUsMS43OTUtMy41ODksNS41MDgtMS43OTQsOC4yOTNjMS43OTYsMi43ODYsNS41MDgsMy41OSw4LjI5NCwxLjc5NGw3My40NjUtNDcuMzMzICAgYzEuNzQ2LTEuMTI1LDIuNzg2LTMuMDczLDIuNzQ5LTUuMTVjLTAuMDM3LTIuMDc3LTEuMTQ1LTMuOTg3LTIuOTMtNS4wNUwxMTUuNzMzLDc5LjAyOSAgIEMxMTMuODc3LDc3LjkyNiwxMTEuNTc1LDc3LjkwMiwxMDkuNjk5LDc4Ljk2OXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'
				},200)
			}
		}
	},
	mounted: function(){
		setInterval(()=>{
			this.playerStyle.backgroundColor = "#000000".replace(/0/g,() => {return (~~(Math.random()*16)).toString(16)})
		},200)
	}
})
