import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface IPropsMyRoutineDialog {
  open: boolean;
  handleDialogTrigger: () => void;
  onClickCompleteTodayRoutine: () => Promise<void>;
}

export default function MyRoutineDialog(props: IPropsMyRoutineDialog) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleDialogTrigger}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"루틴 진행 저장"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            오늘의 운동을 완료하셧나요??
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleDialogTrigger}>아니요..</Button>
          <Button onClick={props.onClickCompleteTodayRoutine} autoFocus>
            네! 오늘도 성공!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
