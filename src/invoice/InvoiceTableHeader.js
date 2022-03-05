import { StyleSheet, Text, View } from "@react-pdf/renderer";

const stylesTableHeader = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#000",
    backgroundColor: "#525659",
    borderBottomWidth: 1,
    paddingTop: 5,
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
    color: "#fff",
  },
  description: {
    width: "40%",
    textAlign: "center",

    paddingLeft: 8,
  },
  qty: {
    width: "10%",

    textAlign: "center",
    paddingRight: 8,
  },
  rate: {
    width: "25%",

    textAlign: "center",
    paddingRight: 8,
  },
  amount: {
    width: "25%",
    textAlign: "center",
    paddingRight: 8,
    marginLeft: "1rem",
  },
  tax: {
    width: "15%",
    textAlign: "center",
  },
});

const InvoiceTableHeader = () => (
  <View style={stylesTableHeader.container}>
    <Text style={stylesTableHeader.description}>Product</Text>
    <Text style={stylesTableHeader.qty}>Qty</Text>
    <Text style={stylesTableHeader.rate}>Netto</Text>
    <Text style={stylesTableHeader.tax}>Tax</Text>
    <Text style={stylesTableHeader.amount}>Total</Text>
  </View>
);
export default InvoiceTableHeader;
