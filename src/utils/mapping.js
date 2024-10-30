import { mappings } from "@aemforms/af-react-native";

const customMappings = {
  ...mappings,
  "forms-components-examples/components/demo/component": mappings.panel,
  "forms-components-examples/components/form/panelcontainer": mappings.panel,
};

export default customMappings;
