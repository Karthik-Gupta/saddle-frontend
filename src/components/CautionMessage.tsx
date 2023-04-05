import { DialogContent, Typography } from "@mui/material"
import React, { ReactElement, useState } from "react"
import Dialog from "./Dialog"
import { useTranslation } from "react-i18next"

export default function CautionMessage(): ReactElement {
  const [open, setOpen] = useState<boolean | undefined>()
  const { t } = useTranslation()
  const dialog_displayed = sessionStorage.getItem("displayed")

  function handleClose(arg0: boolean): void {
    setOpen(arg0)
    sessionStorage.setItem("displayed", "yes")
  }

  return (
    <div>
      {dialog_displayed != "yes" ? (
        <Dialog
          open={open ?? true}
          maxWidth="xs"
          onClose={() => handleClose(false)}
        >
          <DialogContent sx={{ whiteSpace: "pre-line" }}>
            <Typography textAlign="center" mb={3} sx={{ fontSize: 28 }}>
              Welcome to Pascal!
            </Typography>
            <Typography>{t("cautionMessage")}</Typography>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  )
}
