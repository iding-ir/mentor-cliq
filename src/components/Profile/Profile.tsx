import Box from "@mui/material/Box";
import StepWizard from "react-step-wizard";

import Step1 from "../Wizard/Step1";
import Step2 from "../Wizard/Step2";
import Step3 from "../Wizard/Step3";

const Profile = () => {
  return (
    <Box>
      <StepWizard>
        <Step1 />

        <Step2 />

        <Step3 />
      </StepWizard>
    </Box>
  );
};

export default Profile;
