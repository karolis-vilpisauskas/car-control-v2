import { useCallback, useEffect, useMemo, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useModeStore } from "../state/Mode";

enum Commands {
  Drive = "drive",
}

const separator = ":";

export const useSockets = () => {
  const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>([]);

  const { modeApiUrl } = useModeStore(({ modeApiUrl }) => ({
    modeApiUrl,
  }));

  const socketUrl = useMemo(() => `ws://${modeApiUrl}:81/`, [modeApiUrl]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const connectionStatus = useMemo(() => {
    return {
      [ReadyState.CONNECTING]: "Connecting...",
      [ReadyState.OPEN]: "Open",
      [ReadyState.CLOSING]: "Closing...",
      [ReadyState.CLOSED]: "Closed",
      [ReadyState.UNINSTANTIATED]: "Uninstantiated",
    }?.[readyState];
  }, [readyState]);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  // Build Command
  const buildCommand = useCallback(
    ({ command, value }: { command: string; value: string }): string => {
      return `${command}${separator}${value}`;
    },
    []
  );

  // Drive distance
  const driveDistance = useCallback(
    (distance: string) => () => {
      const driveCommand = buildCommand({
        command: Commands.Drive,
        value: distance,
      });
      sendMessage(driveCommand);
    },
    [buildCommand, sendMessage]
  );

  return {
    sendMessage,
    connectionStatus,
    messageHistory,
    driveDistance,
  };
};
