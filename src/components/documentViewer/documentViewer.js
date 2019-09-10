import React from "react";
import PropTypes from "prop-types";
import { documentTemplates } from "./utils";
import QrCode from "../templates/qrCode";

const DocumentViewer = props => {
  const { tabIndex, document, handleHeightUpdate } = props;
  const templates = documentTemplates(document, handleHeightUpdate);
  const Template = templates[tabIndex].template;

  return (
    <>
      <Template document={document} />
      <QrCode document={document} />
    </>
  );
};

DocumentViewer.propTypes = {
  document: PropTypes.object.isRequired,
  handleHeightUpdate: PropTypes.func.isRequired,
  tabIndex: PropTypes.number
};

export default DocumentViewer;
