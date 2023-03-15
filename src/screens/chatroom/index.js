import styled from "styled-components";
import { ScreenWrapper as Wrapper } from "../../components/ScreenWrapper";
import { Header } from "./Header";
import { MessageBox } from "./MesssageBox";
import { colors } from "../../values/colors";
import { messageTypes } from "../../values/messageTypes";
import { Options } from "./Options";
import { MessageForm } from "./MessageForm";

const messages = [
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
    id: 1,
    fromBot: true,
    type: messageTypes.TEXT,
    content:
      "Gotcha, you want to gain weight. Can you tell me about any other health conditions or concerns you have? Any diagnoses, symptoms?",
  },
];

export function ChatRoomScreen() {
  const handleSubmit = (text) => {
    if (!text) return;

    console.log(`Sending message ${text}`);
  };

  return (
    <SWrapper>
      <SHeader />
      <SMessageBox data={messages} />
      {/* <Options options={["Yes, let's do it!", "No, I have questions."]} /> */}
      <MessageForm onSubmit={handleSubmit} />
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
