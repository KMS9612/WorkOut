import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BaseSyntheticEvent } from "react";

interface IPropsSignInDialog {
  open: boolean;
  handleClickOpen: () => void;
  handleClose: () => void;
  onSubmitSigninForm: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}

export default function SigninDialog(props: IPropsSignInDialog) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Work Out! 과 함께 하시겠어요?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            확인 버튼을 누르면 가입이 진행되며 개인정보가 데이터베이스가 저장됩니다. 해당 개인정보는 개발자의 이익을 위해 사용되지 않습니다, 해킹에 대한 책임은 지지 않습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>거절</Button>
          <Button onClick={props.onSubmitSigninForm} autoFocus>
            가입 진행
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
