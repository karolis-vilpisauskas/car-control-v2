import { useCallback, useEffect, useMemo, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useModeStore } from "../state/Mode";

export enum Commands {
  Drive = "drive",
  Stop = "stop",
  Auto = "auto",
  Received = "received",
  Straight = "straight",
  Backwards = "backwards",
  TurnL = "turnl",
  TurnR = "turnr",
  AutoPidP = "autopidp",
  AutoPidI = "autopidi",
  AutoPidD = "autopidd",
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
  const sendCommandWithValue = useCallback(
    (value: string, command: Commands) => () => {
      const driveCommand = buildCommand({
        command,
        value,
      });
      sendMessage(driveCommand);
    },
    [buildCommand, sendMessage]
  );

  // Handle commands without value
  const sendCommandWithoutValue = useCallback(
    (command: Commands) => () => {
      const builtCommand = buildCommand({
        command,
        value: "0",
      });
      sendMessage(builtCommand);
    },
    [buildCommand, sendMessage]
  );

  return {
    sendMessage,
    connectionStatus,
    messageHistory,
    sendCommandWithValue,
    sendCommandWithoutValue,
  };
};
