OSCFunc.trace(false);
Server.local.boot


(
OSCdef.new(
	\thread0,
	{
		arg msg, time, addr, port;
		x.set(\freq, msg[0]);
	},
	'/Methexis'
);
)


(
OSCdef.new(
	\thread0,
	{
		arg msg, time, addr, port;
		x.set(\nharm, msg[1]);
	},
	'/Methexis'
);
)

SynthDef.new(\tone, {
	arg freq=40, nharm=12, detune=0.2, gate=0,
	pan=0, amp=1, out=0;
	var sig, env;
	env = EnvGen.kr(Env.adsr(0.05,0.1,0.5,3),gate);
	sig = Blip.ar(
		freq *
		LFNoise1.kr(0.2!16).bipolar(detune.neg,detune).midiratio,
		nharm
	);
	sig = sig * LFNoise1.kr(0.5!16).exprange(0.1,1);
	sig = Splay.ar(sig);
	sig = Balance2.ar(sig[0], sig[1], pan);
	sig = sig * env * amp;
	Out.ar(out, sig);
}).add
x = Synth.new(\tone, [\gate, 1]);
x.set(\freq, 47);
x.set(\nharm, 12);
