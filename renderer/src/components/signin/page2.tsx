interface IPropsSignInPage2 {
  onClickNextOrPrev: () => void;
}

export default function SignInPage2(props: IPropsSignInPage2) {
  return (
    <div>
      {/* 2page */}
      2page <br />
      1.이름 2.체중 3. 키 4. 나이
      <button onClick={props.onClickNextOrPrev}>이전</button>
    </div>
  );
}
