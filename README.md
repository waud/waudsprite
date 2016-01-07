# waudsprite
![waud logo](https://raw.githubusercontent.com/adireddy/waud/master/logo.png)

Audio Sprite Generator for [waud.js](https://github.com/adireddy/waud) - ported from [audiosprite](https://github.com/tonistiigi/audiosprite).

###Installation

```
npm install -g waudsprite
```

###Dependencies

You need `FFmpeg` framework and `ogg` codecs to use **`waudsprite`**.

Install on OSX using `brew`:

```
brew install ffmpeg --with-theora --with-libogg --with-libvorbis
```

###Usage

`waudsprite --loop loop --autoplay loop  -o assets/sprite -e m4a assets/*.mp3`

The above command generates the following json:

```
{
	"src": "assets/sprite.m4a",
	"sprite": [
		{
			"name": "bell",
			"start": 0,
			"duration": 2.1149886621315193,
			"loop": false
		},
		{
			"name": "canopening",
			"start": 4,
			"duration": 2,
			"loop": false
		},
		{
			"name": "glass",
			"start": 7,
			"duration": 0.5485714285714289,
			"loop": false
		},
		{
			"name": "loop",
			"start": 9,
			"duration": 56.032653061224494,
			"loop": true
		}
	]
}
```

###Help

```
waudsprite --help
info: Usage: audiosprite [options] *.mp3
info: Options:
  --output, -o      Name for the output files.                                   [default: "sprite"]
  --path, -u        Path for files to be used on final JSON.                     [default: ""]
  --export, -e      Limit exported file types. Comma separated extension list.   [default: "ogg,m4a,mp3,ac3"]
  --log, -l         Log level (debug, info, notice, warning, error).             [default: "info"]
  --autoplay, -a    Autoplay sprite name.                                        [default: null]
  --loop            Loop sprite name, can be passed multiple times.              [default: null]
  --gap, -g         Silence gap between sounds (in seconds).                     [default: 1]
  --minlength, -m   Minimum sound duration (in seconds).                         [default: 0]
  --bitrate, -b     Bit rate. Works for: ac3, mp3, mp4, m4a, ogg.                [default: 128]
  --vbr, -v         VBR [0-9]. Works for: mp3. -1 disables VBR.                  [default: -1]
  --samplerate, -r  Sample rate.                                                 [default: 44100]
  --channels, -c    Number of channels (1=mono, 2=stereo).                       [default: 1]
  --rawparts, -p    Include raw slices(for Web Audio API) in specified formats.  [default: ""]
  --help, -h        Show this help message.
```
