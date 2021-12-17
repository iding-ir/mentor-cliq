import Box from "@mui/material/Box";
import StepWizard from "react-step-wizard";

import { styles } from "./styles";
import Step1 from "../Wizard/Step1";
import Step2 from "../Wizard/Step2";

const Profile = () => {
  return (
    <Box sx={styles.Profile}>
      <StepWizard>
        <Step1 />

        <Step2 />
      </StepWizard>
    </Box>
  );
};

export default Profile;
