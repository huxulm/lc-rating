import { useEffect, useState } from "react";

const DEFAULT_PING_EVENT = "lcre-ping-event";
const DEFAULT_PONG_EVENT = "lcr-pong-event";

type useReceivePingOptions = {
  isReady?: boolean;
  pingEvent?: string;
  pongEvent?: string;
};

export const useSendPong = (options?: useReceivePingOptions) => {
  const {
    isReady = false,
    pingEvent = DEFAULT_PING_EVENT,
    pongEvent = DEFAULT_PONG_EVENT,
  } = options || {};

  useEffect(() => {
    const handlePing = () => {
      if (isReady) {
        window.dispatchEvent(new CustomEvent(pongEvent));
      }
    };
    window.addEventListener(pingEvent, handlePing);
    return () => {
      window.removeEventListener(pingEvent, handlePing);
    };
  }, [isReady, pingEvent, pongEvent]);
};
