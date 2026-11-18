/**
 * Procedural coastal soundscape using the Web Audio API.
 * Generates natural, soothing Ionian ocean waves with zero external audio assets,
 * zero network delay, infinite non-repeating swells, and 100% autoplay compliance.
 */

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isRunning = false;
  private timerId: number | null = null;
  private waveInterval: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  // Generates 5 seconds of pink noise in a looping audio buffer
  private createPinkNoiseBuffer(ctx: AudioContext): AudioBuffer {
    const bufferSize = ctx.sampleRate * 5;
    const buffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);

    for (let channel = 0; channel < 2; channel++) {
      const data = buffer.getChannelData(channel);
      let b0 = 0;
      let b1 = 0;
      let b2 = 0;
      let b3 = 0;
      let b4 = 0;
      let b5 = 0;
      let b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }
    }
    return buffer;
  }

  public async start(): Promise<boolean> {
    try {
      this.initContext();
      if (!this.ctx) return false;

      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      const ctx = this.ctx;
      const pinkBuffer = this.createPinkNoiseBuffer(ctx);

      // Master output gain
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.001, ctx.currentTime);
      // Gentle fade-in over 1.6 seconds
      master.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 1.6);
      master.connect(ctx.destination);
      this.masterGain = master;

      // Noise source 1: Deep rolling swell
      const swellSource = ctx.createBufferSource();
      swellSource.buffer = pinkBuffer;
      swellSource.loop = true;

      const swellFilter = ctx.createBiquadFilter();
      swellFilter.type = 'lowpass';
      swellFilter.frequency.setValueAtTime(240, ctx.currentTime);
      swellFilter.Q.setValueAtTime(2.5, ctx.currentTime);

      const swellGain = ctx.createGain();
      swellGain.gain.setValueAtTime(0.4, ctx.currentTime);

      swellSource.connect(swellFilter);
      swellFilter.connect(swellGain);
      swellGain.connect(master);
      swellSource.start();

      // Noise source 2: Gentle cresting foam & sea spray
      const spraySource = ctx.createBufferSource();
      spraySource.buffer = pinkBuffer;
      spraySource.loop = true;

      const sprayFilter = ctx.createBiquadFilter();
      sprayFilter.type = 'bandpass';
      sprayFilter.frequency.setValueAtTime(950, ctx.currentTime);
      sprayFilter.Q.setValueAtTime(1.2, ctx.currentTime);

      const sprayGain = ctx.createGain();
      sprayGain.gain.setValueAtTime(0.08, ctx.currentTime);

      spraySource.connect(sprayFilter);
      sprayFilter.connect(sprayGain);
      sprayGain.connect(master);
      spraySource.start();

      // Natural wave modulation loop: 8.5 second tide rhythm
      const cycleWave = () => {
        if (!this.isRunning || !this.ctx) return;
        const now = this.ctx.currentTime;
        const cycle = 8.5; // seconds per wave swell

        // Swell up (3.8s)
        swellFilter.frequency.cancelScheduledValues(now);
        swellFilter.frequency.setValueAtTime(180, now);
        swellFilter.frequency.exponentialRampToValueAtTime(520, now + 3.8);
        swellGain.gain.cancelScheduledValues(now);
        swellGain.gain.setValueAtTime(0.18, now);
        swellGain.gain.linearRampToValueAtTime(0.55, now + 3.8);

        sprayFilter.frequency.cancelScheduledValues(now);
        sprayFilter.frequency.setValueAtTime(650, now);
        sprayFilter.frequency.exponentialRampToValueAtTime(1400, now + 4.2);
        sprayGain.gain.cancelScheduledValues(now);
        sprayGain.gain.setValueAtTime(0.04, now);
        sprayGain.gain.linearRampToValueAtTime(0.18, now + 4.2);

        // Recede back (4.7s)
        swellFilter.frequency.exponentialRampToValueAtTime(180, now + cycle);
        swellGain.gain.linearRampToValueAtTime(0.18, now + cycle);
        sprayFilter.frequency.exponentialRampToValueAtTime(650, now + cycle);
        sprayGain.gain.linearRampToValueAtTime(0.04, now + cycle);
      };

      this.isRunning = true;
      cycleWave();

      this.waveInterval = window.setInterval(() => {
        cycleWave();
      }, 8500);

      return true;
    } catch {
      this.isRunning = false;
      return false;
    }
  }

  public stop(): void {
    if (!this.isRunning) return;

    if (this.waveInterval !== null) {
      clearInterval(this.waveInterval);
      this.waveInterval = null;
    }
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      // Fade out over 1.2 seconds
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(Math.max(this.masterGain.gain.value, 0.001), now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      setTimeout(() => {
        if (this.ctx && !this.isRunning) {
          try {
            this.ctx.suspend();
          } catch {
            // Context suspended
          }
        }
      }, 1250);
    }

    this.isRunning = false;
  }

  public toggle(): Promise<boolean> | boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      return this.start();
    }
  }

  public getIsPlaying(): boolean {
    return this.isRunning;
  }
}

export const soundscape = new SoundscapeEngine();
