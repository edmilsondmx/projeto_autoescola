import React from "react";

import Callout, { CalloutBody, CalloutAction, CalloutMedia } from "./Callout";
import Button from "./Button";

import SpeedImage from "draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutAction, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, temporibus
        officia. Amet impedit enim, placeat nam inventore tempore est magnam
        eveniet odio dolor molestias provident nostrum vitae animi reprehenderit
        excepturi.
      </p>
      <CalloutAction>
        <Button color="primary">Matricular</Button>
      </CalloutAction>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);
