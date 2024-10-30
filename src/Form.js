import { AdaptiveForm } from "@aemforms/af-react-renderer";
import customMappings from "./utils/mapping";
import useFetch from "./custom-hooks/useFetch";

const Form = () => {
  const json = useFetch();

  const onSubmitSuccess = (action) => {
    console.log("Submitting " + action);
  };

  const onSubmitError = (action) => {
    alert("Encountered an internal error while submitting the form.");
  };

  const onInitialize = (action) => {
    console.log("Initializing Form");
  };

  const onFieldChanged = (action) => {
    console.log(
      "On Field Changed (Executes everytime a form field is updated)"
    );
  };

  if (!json) return null;

  return (
    <AdaptiveForm
      formJson={json}
      mappings={customMappings}
      onInitialize={onInitialize}
      onFieldChanged={onFieldChanged}
      onSubmitSuccess={onSubmitSuccess}
      onSubmitError={onSubmitError}
      onSubmitFailure={onSubmitError}
    />
  );
};

export default Form;
