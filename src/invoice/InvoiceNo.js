import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
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
        <Text style={styleInvoiceNo.label}>Invoice No:</Text>
        <Text style={styleInvoiceNo.invoiceDate}>{invoice}</Text>
      </View>
      <View style={styleInvoiceNo.invoiceDateContainer}>
        {/* <Text style={styleInvoiceNo.label}>Date: </Text>
        <Text>{invoice.trans_date}</Text> */}
      </View>
    </div>
  );
};

export default InvoiceNo;
