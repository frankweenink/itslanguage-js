const administrativeSdk = require('./administrative-sdk');
const audioSdk = require('./audio-sdk');
const AudioTools = require('./audio-tools');
const CordovaMediaPlayer = require('./cordova-media-player');
const CordovaMediaRecorder = require('./cordova-media-recorder');
const MediaRecorder = require('./media-recorder');
const TextualComponents = require('./textual-components');
const Tools = require('./tools');
const WavePacker = require('./wave-packer');
const WebAudioPlayer = require('./web-audio-player');
const WebAudioRecorder = require('./web-audio-recorder');


module.exports = {
  BasicAuth: administrativeSdk.BasicAuth,
  ChoiceChallenge: administrativeSdk.ChoiceChallenge,
  ChoiceRecognition: administrativeSdk.ChoiceRecognition,
  Organisation: administrativeSdk.Organisation,
  Phoneme: administrativeSdk.Phoneme,
  PronunciationAnalysis: administrativeSdk.PronunciationAnalysis,
  PronunciationChallenge: administrativeSdk.PronunciationChallenge,
  Sdk: administrativeSdk.Sdk,
  SpeechChallenge: administrativeSdk.SpeechChallenge,
  SpeechRecording: administrativeSdk.SpeechRecording,
  Student: administrativeSdk.Student,
  Tenant: administrativeSdk.Tenant,
  Word: administrativeSdk.Word,
  WordChunk: administrativeSdk.WordChunk,

  AudioPlayer: audioSdk.AudioPlayer,
  AudioRecorder: audioSdk.AudioRecorder,

  AudioTools: AudioTools,

  CordovaMediaPlayer: CordovaMediaPlayer,

  CordovaMediaRecorder: CordovaMediaRecorder,

  MediaRecorder: MediaRecorder,

  TextualComponents: TextualComponents,

  Tools: Tools,

  WavePacker: WavePacker,

  WebAudioPlayer: WebAudioPlayer,

  WebAudioRecorder: WebAudioRecorder
};
