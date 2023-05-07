window.onload = function() {
 
  const file = document.getElementById("file-input");
  const canvas = document.getElementById("canvas");
  const h3 = document.getElementById('name')
  const audio = document.getElementById("audio");

  file.onchange = function() {
  
    const files = this.files; // FileList containing File objects selected by the user (DOM File API)
    console.log('FILES[0]: ', files[0])
    audio.src = URL.createObjectURL(files[0]); // Creates a DOMString containing the specified File object
    const name = files[0].name
    document.querySelector(".title").innerText = name;
    
    ///////// <CANVAS> INITIALIZATION //////////
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    ///////////////////////////////////////////

    let context = new AudioContext(); 
    let src = context.createMediaElementSource(audio); 
    let analyser = context.createAnalyser();
    src.connect(analyser); // Connects the audio context source to the analyser
    analyser.connect(context.destination); // End destination of an audio graph in a given context

    analyser.fftSize = 16384;
    // analyser.fftSize = 32768;

    // (FFT) is an algorithm that samples a signal over a period of time
    // and divides it into its frequency components (single sinusoidal oscillations).
    // It separates the mixed signals and shows what frequency is a violent vibration.

    // (FFTSize) represents the window size in samples that is used when performing a FFT

    // Lower the size, the less bars (but wider in size)
    ///////////////////////////////////////////////////////////


    const bufferLength = analyser.frequencyBinCount; // (read-only property)
    // Unsigned integer, half of fftSize (so in this case, bufferLength = 8192)
    // Equates to number of data values you have to play with for the visualization

    // The FFT size defines the number of bins used for dividing the window into equal strips, or bins.
    // Hence, a bin is a spectrum sample, and defines the frequency resolution of the window.

    const dataArray = new Uint8Array(bufferLength); // Converts to 8-bit unsigned integer array
    // At this point dataArray is an array with length of bufferLength but no values
    console.log('DATA-ARRAY: ', dataArray) // Check out this array of frequency values!

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const barWidth = (WIDTH / bufferLength) * 40;

    let barHeight;
    let x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame); // Takes callback function to invoke before rendering

      x = 0;

      analyser.getByteFrequencyData(dataArray); // Copies the frequency data into dataArray

      ctx.fillStyle = "rgba(0,0,0,0.2)"; // Clears canvas before rendering bars (black with opacity 0.2)
      ctx.fillRect(0.2, 0.9, WIDTH, HEIGHT); // Fade effect, set opacity to 1 for sharper rendering of bars

      let r, g, b;
      let bars = 250 // Set total number of bars you want per frame


      for (let i = 0; i < bars; i++) {
        barHeight = (dataArray[i] * 2.5);

        if (dataArray[i] > 210){ // pink
          r = 210
          g = 191
          b = 224
        } else if (dataArray[i] > 200){ // yellow
          r = 248
          g = 250
          b = 185
        } else if (dataArray[i] > 190){ // yellow/green
          r = 204
          g = 255
          b = 0
        } else if (dataArray[i] > 180){ // blue/green
          r = 0
          g = 219
          b = 131
        } else { // light blue
          r = 242,
          g = 242,
          b = 230
        }
        
        

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);


        x += barWidth + 60 // Gives 10px space between each bar
      }
    }
    audio.play();
    renderFrame();
  };


};
