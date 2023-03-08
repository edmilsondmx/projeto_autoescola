import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
      possimus, assumenda, impedit laboriosam officia nostrum itaque? Placeat
      corrupti exercitationem vitae nulla doloremque.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
      possimus, assumenda, impedit laboriosam officia nostrum itaque? Placeat
      corrupti exercitationem vitae nulla doloremque.
    </Accordion>
    <Accordion title="Fui multado e agora?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
      possimus, assumenda, impedit laboriosam officia nostrum itaque? Placeat
      corrupti exercitationem vitae nulla doloremque.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
      possimus, assumenda, impedit laboriosam officia nostrum itaque? Placeat
      corrupti exercitationem vitae nulla doloremque.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
      possimus, assumenda, impedit laboriosam officia nostrum itaque? Placeat
      corrupti exercitationem vitae nulla doloremque.
    </Accordion>
    <Accordion title="Fui multado e agora?">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      perspiciatis facilis ipsa numquam voluptas voluptatibus quasi saepe
      possimus, assumenda, impedit laboriosam officia nostrum itaque? Placeat
      corrupti exercitationem vitae nulla doloremque.
    </Accordion>
  </AccordionGroup>
);
