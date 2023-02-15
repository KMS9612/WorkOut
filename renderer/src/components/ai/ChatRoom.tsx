import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useState } from "react";
import * as CS from "../../styles/ai/ChatRoom.styles";

export default function ChatRoom() {
  const [ChatInput, setChatInput] = useState("");
  const [result, setResult] = useState("");
  const [Loading, setLoading] = useState(false);
  const onSubmitChatWithAi = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Chat: ChatInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setLoading(false);
      setResult(data.result);
      setChatInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  };
  return (
    <CS.Wrapper>
      <CS.Header>AI에게 질문하세요!</CS.Header>
      <CS.TextWrapper>{Loading ? <CircularProgress /> : <CS.MessageBox>{result}</CS.MessageBox>}</CS.TextWrapper>
      <CS.InputWrapper>
        <CS.Input
          label="Ai에게 질문하세요!"
          value={ChatInput}
          onChange={(e) => {
            setChatInput(e.target.value);
          }}
        />
        <CS.SubmitBtn onClick={onSubmitChatWithAi} disabled={Loading ? true : false}>
          제출
        </CS.SubmitBtn>
      </CS.InputWrapper>
    </CS.Wrapper>
  );
}
