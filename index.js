/* global AFRAME */
require("./src/meyda.min")
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}



// // Single audio context.
// var context;

/**
 * Audio visualizer system for A-Frame. Share AnalyserNodes between components that share the
 * the `src`.
 */
// AFRAME.registerSystem('audioanalyser', {
//   init: function () {
//     this.analysers = {};
//   },
//
//   getOrCreateAnalyser: function (data) {
//     if (!context) { context = new AudioContext() || new webkitAudioContext(); }
//     var analysers = this.analysers;
//     var analyser = context.createAnalyser();
//     var audioEl = data.src;
//     var src = audioEl.getAttribute('src');
//
//     if (analysers[src]) { return analysers[src]; }
//
//     var source = context.createMediaElementSource(audioEl)
//     source.connect(analyser);
//     analyser.connect(context.destination);
//     analyser.smoothingTimeConstant = data.smoothingTimeConstant;
//     analyser.fftSize = data.fftSize;
//
//     // Store.
//     analysers[src] = analyser;
//     return analysers[src];
//   }
// });

/**
 * Spectral Centroid A-Frame Component component for A-Frame.
 */


AFRAME.registerComponent('meyda', {
  schema: {

  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,


  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
_this=this
addEventListener('contextReady',()=>{


this.audiocontext =document.querySelector('[audiocontext]').components.audiocontext
  console.log(this.audiocontext)
var bufferSize=1024;
this.audioObject = new Audio(bufferSize);



})

      // WIP Changed the line above for:
      // var Acontext = new AudioContext();


    function Audio(bufferSize){
console.log(_this.audiocontext)
        _this.meyda = Meyda.createMeydaAnalyzer({
          audioContext: _this.audiocontext.context,
          source: _this.audiocontext.stream,
          bufferSize: bufferSize,
          windowingFunction: 'blackman'
        });



       this.get =(features)=>{
          _this.audiocontext.context.resume();

          return _this.meyda.get(features);


        }

      //  this.initializeMicrophoneSampling();
      };







   },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
   // WIP commented out this
  update: function (oldData) {

   },

   // update: function () {
   //   var data = this.data;
   //   var self = this;
   //   var system = this.system;
   //
   //   if (!data.src) { return; }
   //
   //   // Get or create AnalyserNode.
   //   if (data.unique) {
   //     init(system.createAnalyser(data));
   //   } else {
   //    init()
   //   }

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  tick: function (t) {

  if(this.audioObject) {this.features =    this.audioObject.get(['amplitudeSpectrum', 'spectralCentroid', 'spectralRolloff', 'loudness', 'rms', 'chroma','spectralFlatness']);
}
// this.ffts.pop();
//  this.ffts.unshift(features.amplitudeSpectrum);
//  var windowedSignalBuffer = this.audioObject.meyda._m.signal;

// catch (err)
// {
//   console.log(err)
// }


   },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { }
});
