"use client";

import { useState } from "react";
import SmartSendButton from "./components/SmartSendButton";

type DemoMode =
  | "success"
  | "error"
  | "random";

export default function Home() {
  const [mode, setMode] =
    useState<DemoMode>("success");

  return (
    <main className="motion-demo-page">
      <section className="motion-demo-shell">
        <header className="motion-demo-heading">
          <p className="motion-demo-eyebrow">
            FE-AA1 · Motion & State
          </p>

          <h1>Buttons with a Brain</h1>

          <p>
            A Send button that communicates every
            stage of an async action using intentional
            motion and accessible feedback.
          </p>
        </header>

        <section className="motion-demo-card">
          <div className="demo-card-top">
            <div>
              <p className="motion-demo-label">
                Result mode
              </p>

              <h2>Test the full lifecycle</h2>
            </div>

            <span className="demo-status">
              Interactive demo
            </span>
          </div>

          <div
            className="motion-mode-controls"
            aria-label="Button result mode"
          >
            <button
              type="button"
              className={
                mode === "success"
                  ? "mode-button active"
                  : "mode-button"
              }
              onClick={() =>
                setMode("success")
              }
            >
              Force Success
            </button>

            <button
              type="button"
              className={
                mode === "error"
                  ? "mode-button active"
                  : "mode-button"
              }
              onClick={() =>
                setMode("error")
              }
            >
              Force Error
            </button>

            <button
              type="button"
              className={
                mode === "random"
                  ? "mode-button active"
                  : "mode-button"
              }
              onClick={() =>
                setMode("random")
              }
            >
              Random
            </button>
          </div>

          <div className="motion-button-stage">
            <SmartSendButton
              forcedResult={
                mode === "random"
                  ? null
                  : mode
              }
            />
          </div>

          <div className="state-guide">
            <span>Idle</span>
            <span>Hover / Focus</span>
            <span>Loading</span>
            <span>Success</span>
            <span>Error</span>
          </div>
        </section>

        <section className="motion-notes">
          <p className="motion-demo-label">
            Motion rationale
          </p>

          <h2>Why these transitions?</h2>

          <p>
            Hover and press feedback uses roughly
            180–220ms so direct interaction feels
            responsive. State content enters over
            260ms with an ease-out curve so feedback
            appears quickly and settles naturally.
          </p>

          <p>
            Motion relies mainly on transform and
            opacity to avoid layout-heavy animation.
            Success uses a short confirmation scale
            and error uses a one-time shake.
            prefers-reduced-motion removes the motion
            while preserving labels, icons and color
            feedback.
          </p>
        </section>
      </section>
    </main>
  );
}