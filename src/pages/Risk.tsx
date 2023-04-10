import { Container, Typography } from "@mui/material"
import React, { ReactElement } from "react"

import { useTranslation } from "react-i18next"

function Risk(): ReactElement {
  const { t } = useTranslation()

  return (
    <Container maxWidth="md" sx={{ pb: 16 }}>
      <Typography variant="h3" mt={5} mb={2}>
        Risk
      </Typography>
      <Typography variant="body1" data-testid="risk-intro">
        {t("riskIntro")}
      </Typography>
      <Typography variant="h3" mt={5} mb={2}>
        {t("audits")}
      </Typography>
      <Typography variant="body1" data-testid="risk-audits">
        {t("riskAudits")}{" "}
        <a href="https://docs.pascal.finance/vepsc">{t("riskAudits2")}</a>
        {"."}
        <br />
        <br />
        {t("riskAudits3")}
        <br />
        <br />
        {t("riskAudits4")}
      </Typography>
      <Typography variant="h3" mt={5} mb={2}>
        {t("adminKeys")}
      </Typography>
      <Typography variant="body1" data-testid="risk-adminkeys">
        {t("riskAdminKeys")}
      </Typography>
      <Typography variant="h3" mt={5} mb={2}>
        {t("lossOfPeg")}
      </Typography>
      <Typography variant="body1" data-testid="risk-lossofpeg">
        {t("riskLossOfPeg")}
      </Typography>
    </Container>
  )
}

export default Risk
