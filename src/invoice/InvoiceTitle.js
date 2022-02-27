import { Text, View, StyleSheet } from "@react-pdf/renderer";

import React from "react";

const styleTitle = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: "24",
  },
  reportTitle: {
    color: "#000",
    letterSpacing: "4",
    fontSize: "25",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
const InvoiceTitle = ({ title }) => {
  return (
    <View style={styleTitle.titleContainer}>
      <Text style={styleTitle.reportTitle}>{title}</Text>
    </View>
  );
};

export default InvoiceTitle;
