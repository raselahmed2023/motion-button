"use client";

import { useRef, useState } from "react";

type ButtonState =
  | "idle"
  | "loading"
  | "success"
  | "error";

type SmartSendButtonProps = {
  forcedResult?: "success" | "error" | null;
};

export default function SmartSendButton({
  forcedResult = null,
}: SmartSendButtonProps) {
  const [state, setState] =
    useState<ButtonState>("idle");

  const requestId = useRef(0);

  const runAction = async () => {
    if (state === "loading") return;

    const currentRequest = ++requestId.current;

    setState("loading");

    const delay =
      900 + Math.floor(Math.random() * 700);

    await new Promise<void>((resolve) => {
      setTimeout(resolve, delay);
    });

    if (currentRequest !== requestId.current) {
      return;
    }

    const result =
      forcedResult ??
      (Math.random() < 0.2
        ? "error"
        : "success");

    setState(result);

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 1400);
    });

    if (currentRequest !== requestId.current) {
      return;
    }

    setState("idle");
  };

  const label = {
    idle: "Send message",
    loading: "Sending...",
    success: "Sent",
    error: "Try again",
  }[state];

  return (
    <button
      type="button"
      className={`smart-send-button state-${state}`}
      onClick={() => void runAction()}
      disabled={state === "loading"}
      aria-busy={state === "loading"}
    >
      <span
        className="smart-button-content"
        key={state}
      >
        {state === "loading" && (
          <span
            className="smart-spinner"
            aria-hidden="true"
          />
        )}

        {state === "success" && (
          <span
            className="smart-success-icon"
            aria-hidden="true"
          >
            ✓
          </span>
        )}

        {state === "error" && (
          <span
            className="smart-error-icon"
            aria-hidden="true"
          >
            !
          </span>
        )}

        <span aria-live="polite">
          {label}
        </span>
      </span>
    </button>
  );
}