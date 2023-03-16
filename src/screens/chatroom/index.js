import styled from "styled-components";
import { ScreenWrapper as Wrapper } from "../../components/ScreenWrapper";
import { Header } from "./Header";
import { MessageBox } from "./MesssageBox";
import { colors } from "../../values/colors";
import { messageTypes } from "../../values/messageTypes";
import { Options } from "./Options";
import { MessageForm } from "./MessageForm";
import { Loader } from "./Loader";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const mockupMessages = [
  {
    id: 1,
    fromBot: true,
    type: messageTypes.TEXT,
    content:
      "Hi! Welcome to Diet GPT! I'm your personal AI to help you figure out how to optimize your diet and supplements to help you feel better!",
  },
  {
    id: 2,
    fromBot: true,
    type: messageTypes.TEXT,
    content:
      "I've been specifically trained on a huge amount of nutritional and medical science. Feel free to pit my advice against a nutritionist! I'm confident I'd pass the test :)",
  },
  {
    id: 3,
    fromBot: true,
    type: messageTypes.QUESTION,
    content: "Ready to get started?",
    options: ["Yes, let's do it!", "No, I have questions."],
  },
  {
    id: 4,
    fromBot: false,
    type: messageTypes.TEXT,
    content: "Yes, let's do it!",
  },
  {
    id: 5,
    fromBot: true,
    type: messageTypes.TEXT,
    content:
      "OK, first I want to get to know you a bit better. Tell me about you - age, gender, weight, height - and what are some issues you face and what you'd like to achieve?",
  },
  {
    id: 6,
    fromBot: false,
    type: messageTypes.TEXT,
    content: "I'm 32, male, 5 foot 9, 123lb. I'd like to build muscle",
  },
  {
    id: 7,
    fromBot: true,
    type: messageTypes.TEXT,
    content:
      "Gotcha, you want to gain weight. Can you tell me about any other health conditions or concerns you have? Any diagnoses, symptoms?",
  },
];

export function ChatRoomScreen() {
  const [messages, setMessages] = useState(mockupMessages);
  const messageEndRef = useRef();
  const inputRef = useRef();

  const isLoading =
    messages.length === 0 || !messages[messages.length - 1].fromBot;

  const handleSubmit = (text) => {
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1].id + 1,
        fromBot: false,
        type: messageTypes.TEXT,
        content: text,
      },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev[prev.length - 1].id + 1,
          fromBot: true,
          type: messageTypes.TEXT,
          content: "Great!",
        },
      ]);
    }, 1000);
  };

  useLayoutEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        messageEndRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      setTimeout(() => {
        inputRef.current.value = "";
        inputRef.current.focus();
        messageEndRef.current.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [messages, isLoading]);

  return (
    <SWrapper>
      <SHeader />
      <SMessageBox ref={messageEndRef} data={messages} />

      {/* <Options options={["Yes, let's do it!", "No, I have questions."]} /> */}
      {/* <MessageForm onSubmit={handleSubmit} /> */}
      {isLoading && <SLoader />}
      {<MessageForm ref={inputRef} onSubmit={handleSubmit} show={!isLoading} />}
    </SWrapper>
  );
}

const SWrapper = styled(Wrapper)({
  background: colors.dark,
});

const SHeader = styled(Header)({
  marginTop: 12,
});

const SMessageBox = styled(MessageBox)({
  marginTop: 16,
  flexGrow: 1,
});

const SLoader = styled(Loader)({
  marginBlock: 20,
});
