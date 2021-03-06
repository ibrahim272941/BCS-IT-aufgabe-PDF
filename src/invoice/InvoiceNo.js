import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import moment from "moment";
const styleInvoiceNo = StyleSheet.create({
  invoiceNoContainer: {
    flexDirection: "row",
    marginTop: 36,
    justifyContent: "flex-end",
  },
  invoiceDateContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  invoiceDate: {
    fontSize: 12,
    fontStyle: "bold",
  },
  label: {
    width: 60,
  },
});

const InvoiceNo = ({ invoice }) => {
  return (
    <div>
      <View style={styleInvoiceNo.invoiceNoContainer}>
        <Text style={styleInvoiceNo.label}>Invoice No</Text>
        <Text style={styleInvoiceNo.invoiceDate}>:{invoice.slice(11)}</Text>
      </View>
      <View style={styleInvoiceNo.invoiceDateContainer}>
        <Text style={styleInvoiceNo.label}>Date</Text>
        <Text>:{moment().format("L")}</Text>
      </View>
    </div>
  );
};

export default InvoiceNo;
