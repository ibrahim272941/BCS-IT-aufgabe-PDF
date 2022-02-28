import { Text, View, StyleSheet } from "@react-pdf/renderer";

import React from "react";

const styleTitle = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    marginTop: "24",
  },
  reportTitle: {
    color: "#000",

    fontSize: "13",
  },
});
const InvoiceTitle = ({ title }) => {
  return (
    <View style={styleTitle.titleContainer}>
      <Text style={styleTitle.reportTitle}>Hans-Böckler-Straße 40</Text>
      <Text style={styleTitle.reportTitle}>40764 Langenfeld</Text>
      <Text style={styleTitle.reportTitle}> 021732697183</Text>
      <Text style={styleTitle.reportTitle}>info@bcsit-gmbh.de</Text>
    </View>
  );
};

export default InvoiceTitle;
