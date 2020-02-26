# Animate text with audio transcript

1. Create a account on happyscribe.io
https://www.happyscribe.co/
(The trial includes 30 minutes of transcribing)

2. Upload mp3/video and start making your first transcript! :smirk:

3. Export as `Interactive Transcript (.html)` transcript. Open the index.html to see the transcript working!

4. Do something with the generated html and data attributes

`<span data-m='1080' data-d='209'>Lorem </span>
<span data-m='1290' data-d='389'> ipsum </span>
<span data-m='1680' data-d='150'> dolar </span>
`

Thoughts on animation

data-m = exact moment in timeline <br>
data-d = exact duration of animation

Add some `css` for a cool animation:

```
<style>
  #hypertranscript {
    background-color: #ebe0d1;
  }

  p span {
    font-size:40px;
    font-weight: bolder;
    color:#2f2520;
    text-decoration:none;
    background-position: 0 0;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, white 50%);
    transition: background-position 0.5s ease-out 0s;
    background-size: 200.22% auto;
    font-weight: 200;
    display: inline;
  }

  p span.read, p span.active {
    background-position: -99.99% 0;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 50%, white 50%);
  }
</style>
```

## Next steps

Checkout the .js files (hyperaudio-lite-wrapper.js and hyperaudio-lite.js). And make something way cooler with gsap.
