import React, { useEffect } from "react";
import html2canvas from "html2canvas";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const VoiceScreenshot = () => {
  useEffect(() => {
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in your browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("Voice recognition started 🎙️");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase();

      console.log("You said:", transcript);

      if (transcript.includes("screenshot")) {
        console.log("🎯 'screenshot' detected — taking screenshot...");
        takeScreenshot();
      }
    };

    recognition.onerror = (e) => console.error("Speech error:", e);
    recognition.onend = () => recognition.start();

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);

  const takeScreenshot = () => {
    html2canvas(document.body, {
      useCORS: true,
      backgroundColor: "#ffffff",
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
      scrollX: 0,
      scrollY: -window.scrollY,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "homepage-screenshot.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return null;
};

export default VoiceScreenshot;